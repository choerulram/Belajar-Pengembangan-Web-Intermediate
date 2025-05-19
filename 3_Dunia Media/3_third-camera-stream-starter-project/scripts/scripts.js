let width = 320;
let height = 0;

let streaming = false;
let currentStream;

async function startup() {
  const cameraVideo = document.getElementById("camera-video");
  const cameraCanvas = document.getElementById("camera-canvas");
  const cameraTakeButton = document.getElementById("camera-take-button");
  const cameraOutputList = document.getElementById("camera-list-output");
  const cameraListSelect = document.getElementById("camera-list-select");

  // TODO: show taken picture
  function populateTakenPicture(image) {
    cameraOutputList.innerHTML = `
      <li><img src="${image}" alt=""></li>
    `;
  }

  // TODO: generate camera stream
  async function getStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: {
            exact: !streaming ? undefined : cameraListSelect.value,
          },
          aspectRatio: 16 / 9,
          width: 1280,
          height: 720,
        },
      });

      // Show available camera after camera permission granted
      await populateCameraList(stream);

      return stream;
    } catch (error) {
      throw error;
    }
  }

  async function populateCameraList() {
    try {
      // Get all available webcam
      const enumeratedDevices = await navigator.mediaDevices.enumerateDevices();
      const list = enumeratedDevices.filter(
        (device) => device.kind === "videoinput"
      );
      cameraListSelect.innerHTML = list.reduce(
        (accumulator, device, currentIndex) => {
          return accumulator.concat(`
          <option value="${device.deviceId}">
            ${device.label || `Camera ${currentIndex + 1}`}
          </option>
        `);
        },
        ""
      );
    } catch (error) {
      throw error;
    }
  }

  function stopCurrentStream() {
    if (!(currentStream instanceof MediaStream)) {
      return;
    }
    currentStream.getTracks().forEach((track) => {
      track.stop();
    });
  }

  // TODO: launch camera on video
  function cameraLaunch(stream) {
    cameraVideo.srcObject = stream;
    cameraVideo.play();
  }

  cameraListSelect.addEventListener("change", async () => {
    stopCurrentStream();

    currentStream = await getStream();
    cameraLaunch(currentStream);
  });

  cameraTakeButton.addEventListener("click", () => {
    const imageUrl = cameraTakePicture();
    populateTakenPicture(imageUrl);
  });

  // set ukuran input kamera
  cameraVideo.addEventListener("canplay", () => {
    if (streaming) {
      return;
    }
    // Calculate height dynamically
    height = (cameraVideo.videoHeight * width) / cameraVideo.videoWidth;
    cameraVideo.setAttribute("width", width.toString());
    cameraVideo.setAttribute("height", height.toString());
    cameraCanvas.setAttribute("width", width.toString());
    cameraCanvas.setAttribute("height", height.toString());
    streaming = true;
  });

  // TODO: draw video frame to canvas
  function cameraTakePicture() {
    const context = cameraCanvas.getContext("2d");
    cameraCanvas.width = width;
    cameraCanvas.height = height;
    context.drawImage(cameraVideo, 0, 0, width, height);

    return cameraCanvas.toDataURL("image/png");
  }

  // TODO: init
  async function init() {
    try {
      currentStream = await getStream();
      cameraLaunch(currentStream);

      currentStream.getVideoTracks().forEach((track) => {
        console.log(track.getSettings());
      });
    } catch (error) {
      console.error(error);
    }
  }

  init();
}

window.onload = startup;

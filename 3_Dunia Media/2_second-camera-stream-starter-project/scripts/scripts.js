let width = 320;
let height = 0;

let streaming = false;

async function startup() {
  const cameraVideo = document.getElementById('camera-video');
  const cameraCanvas = document.getElementById('camera-canvas');
  const cameraTakeButton = document.getElementById('camera-take-button');
  const cameraOutputList = document.getElementById('camera-list-output');

  // TODO: show taken picture
  function populateTakenPicture(image) {
    cameraOutputList.innerHTML = `
      <li><img src="${image}" alt=""></li>
    `;
  }

  // TODO: generate camera stream
  async function getStream() {
    try {
      return await navigator.mediaDevices.getUserMedia({
        video: true,
      });
    } catch (error) {
      throw error;
    }
  }

  // TODO: launch camera on video
  function cameraLaunch(stream) {
    cameraVideo.srcObject = stream;
    cameraVideo.play();
  }

  // event listener take picture
  cameraTakeButton.addEventListener('click', () => {
    const imageUrl = cameraTakePicture();
    populateTakenPicture(imageUrl);
  });

  // set ukuran input kamera
  cameraVideo.addEventListener('canplay', () => {
    if (streaming) {
      return;
    }
    // Calculate height dynamically
    height = (cameraVideo.videoHeight * width) / cameraVideo.videoWidth;
    cameraVideo.setAttribute('width', width.toString());
    cameraVideo.setAttribute('height', height.toString());
    cameraCanvas.setAttribute('width', width.toString());
    cameraCanvas.setAttribute('height', height.toString());
    streaming = true;
  });

  // TODO: draw video frame to canvas
  function cameraTakePicture() {
    const context = cameraCanvas.getContext('2d');
    cameraCanvas.width = width;
    cameraCanvas.height = height;
    context.drawImage(cameraVideo, 0, 0, width, height);
  
    return cameraCanvas.toDataURL('image/png');
  }

  // TODO: init
  async function init() {
    try {
      const stream = await getStream();
      cameraLaunch(stream);
    } catch (error) {
      console.error(error);
      alert("Error occurred:", error.message);
    }
  }

  init();
}

window.onload = startup;

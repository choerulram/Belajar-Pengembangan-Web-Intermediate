async function startup() {
  const cameraVideo = document.getElementById('camera-video');
  
  // TODO: show taken picture
  function populateTakenPicture(image) {
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

  // TODO: draw video frame to canvas
  function cameraTakePicture() {
  }

  // TODO: init
  async function init() {
    try {
      const stream = await getStream();
      cameraLaunch(stream);
    } catch (error) {
      console.error(error);
      alert('Error occurred:', error.message);
    }
  }
 
  init();
}

window.onload = startup;

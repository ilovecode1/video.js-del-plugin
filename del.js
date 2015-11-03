//Fullscreen.js v1.0.0

function fullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

//Video.js DEL (Doing Ending Leaving) v1.4.5

function del(videoname, fullscreen, onEnd) {
  window.onload = function() {
  var player = videojs(videoname, { }, function() {//Register with video.js
    if (fullscreen) {//See if fullscreen is true
      fullscreen(videoname);//Fullscreen
    }
    document.getElementById(videoname).style.display = "visible";//Make video visable
    this.play(); //Play video
    this.on('ended', function() {//See if video is done
      exitFullscreen();//Leave fullscreen
      document.getElementById(video-name).remove();//Remove Video
      document.getElementById("end").innerHTML = onEnd;//Show onEnd code
    };
    });
  });
}

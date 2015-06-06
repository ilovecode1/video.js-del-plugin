//Video.js DEL (Doing Ending Leaving) v1.3

function del(videoname, fullscreen, onEnd) {
  var player = videojs(videoname, { }, function() {
    if (fullscreen) {
      this.requestFullScreen();
    }
    document.getElementById(videoname).style.display = "visible";
    this.play(); 
    this.on('ended', function() {
      this.cancelFullScreen();
      document.getElementById(video-name).remove();
      document.getElementById("end").innerHTML = onEnd;

    });
  });
}

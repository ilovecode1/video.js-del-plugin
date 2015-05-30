//Video.js DEL (Doing Ending Leaving) v1.2.2

function del(videoname, fullscreen) {
  var player = videojs(videoname, { }, function() {
    if (fullscreen) {
      this.requestFullScreen();
    }
    document.getElementById(videoname).style.display = "visible";
    this.play(); 
    this.on('ended', function() {
      this.cancelFullScreen();
      document.getElementById(video-name).remove();
    });
  });
}

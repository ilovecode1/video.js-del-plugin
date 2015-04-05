//Video.js DEL (Doing Ending Leaving) v1.1

function del(videoname, fullscreen) {

  var player = videojs(videoname, { }, function() {
  
    if (fullscreen) {
    
      this.requestFullScreen();
      
    }
    
    this.play(); 
    
    this.on('ended', function() {
    
     this.cancelFullScreen();

      
      document.getElementById(video-name).remove();
      
    });
  });

}

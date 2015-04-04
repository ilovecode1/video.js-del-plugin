//Video.js DEL (Doing Ending Leaving) v1.0.5

function del(videoname, fullscreen) {

  var player = videojs(videoname, { }, function() {
  
    if (fullscreen) {
    
      this.requestFullScreen();
      
    }
    
    this.play(); 
    
    this.on('ended', function() {
    
      if (fullscreen) {
      
        this.cancelFullScreen();
        
      }
      
      document.getElementById(video-name).remove();
      
    });
  });

}

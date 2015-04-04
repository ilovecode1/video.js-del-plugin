//Video.js DEL (Doing Ending Leaving) v1.0

function del(video-name, fullscreen) {

  var player = videojs(video-name, { }, function() {
  
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

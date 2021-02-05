
// JS WH_05.02.2021


// Plyr
const players = Array.from(document.querySelectorAll(".projectfilm")).map(player => new Plyr(player,{
    muted: false, 
    autoplay: false, 
    hideControls: true, 
    loop:{ active: 'true'},
    fullscreen: { iosNative: 'true'},
    debug: true,
    vimeo: {
            muted: false, 
            loop: true, 
            autoplay: false,  
            byline: false, 
            portrait: false, 
            title: false, 
            speed: false, 
            transparent: false, 
            controls: false },
controls: [
          'play-large', //big one
          'play', // Extra one for hacks 
          'play', // Play/pause playback
          'progress', // The progress bar and scrubber for playback and buffering
          'current-time', // The current time of playback
          'duration', // The full duration of the media
          'captions', // Toggle captions
          'volume',
          'fullscreen', // Toggle fullscreen
          'download',
         ]}));
Webflow.push(function() {

    players.forEach(function(player) {
        player.on('play',function(){
        $(".plyr__video-wrapper").attr( "style","visibility: visible"),
        $(".plyr__controls").attr( "style","visibility: visible"),
        $(".VimeoPlyrPreviewWrapper").attr( "style","visibility: hidden")

        
        });
    });

		players.forEach(function(player) {
        player.on('pause',function(){
        $(".plyr__video-wrapper").attr( "style","visibility: hidden"),
        $(".plyr__controls").attr( "style","visibility: hidden"),
        $(".VimeoPlyrPreviewWrapper").attr( "style","visibility: visible")

        
        });
    });

});
// Expose player so it can be used from the console

//window.player = player;

// fq player hide/show


// fq Archive Image Hover

Webflow.push(function() {
  
  // Hover image change
  $('img[data-hover-image]').hover(function() {
    var el = $(this); el.attr('data-hover-original-image', el.attr('src')).attr('src', el.attr('data-hover-image'));
  }, function() {
    var el = $(this); el.attr('src', el.attr('data-hover-original-image'));
  });
});

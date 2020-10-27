// JS WH_26.10.20 

// Plyr
document.addEventListener('DOMContentLoaded', () => {
            const player = Plyr.setup('.projectfilm',  { 

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
         ],
    });



});// Expose player so it can be used from the console

window.player = player;

// fq player hide/show

var preceding = $('.plyr__control--pressed').prevAll().find('.plyr__video-wrapper.plyr__video-embed').last();
$(preceding).addClass('playing-show');



// fq Archive Image Hover

Webflow.push(function() {
  
  // Hover image change
  $('img[data-hover-image]').hover(function() {
    var el = $(this); el.attr('data-hover-original-image', el.attr('src')).attr('src', el.attr('data-hover-image'));
  }, function() {
    var el = $(this); el.attr('src', el.attr('data-hover-original-image'));
  });
});

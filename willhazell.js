// JS WH_01.08.20 

// Plyr
const players = Plyr.setup('.projectfilm',  { 

    muted: false, 
    autoplay: false, 
    hideControls: true, 
    loop:{ active: 'true'}, 
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
          'play', // Play/pause playback
          'progress', // The progress bar and scrubber for playback and buffering
          'current-time', // The current time of playback
          'duration', // The full duration of the media
          'captions', // Toggle captions
          'volume',
          'fullscreen', // Toggle fullscreen
         ],



});// Expose player so it can be used from the console

window.player = player;

// fq Archive Image Hover

Webflow.push(function() {
  
  // Hover image change
  $('img[data-hover-image]').hover(function() {
    var el = $(this); el.attr('data-hover-original-image', el.attr('src')).attr('src', el.attr('data-hover-image'));
  }, function() {
    var el = $(this); el.attr('src', el.attr('data-hover-original-image'));
  });
});



// WIll face DVD screensaver

(function ($, window, undefined) {
	$.fn.marqueeify = function (options) {
		var settings = $.extend({
			horizontal: true,
			vertical: true,
			speed: 100, // In pixels per second
			container: $(this).parent(),
			bumpEdge: function () {}
		}, options);
		
		return this.each(function () {
			var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
				$el = $(this);

			getSizes = function () {
				containerWidth = settings.container.outerWidth();
				containerHeight = settings.container.outerHeight();
				elWidth = $el.outerWidth();
				elHeight = $el.outerHeight();
			};

			move = {
				right: function () {
					$el.animate({left: (containerWidth - elWidth)}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.left();
					}});
				},
				left: function () {
					$el.animate({left: 0}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.right();
					}});
				},
				down: function () {
					$el.animate({top: (containerHeight - elHeight)}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.up();
					}});
				},
				up: function () {
					$el.animate({top: 0}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.down();
					}});
				}
			};

			getSizes();

			if (settings.horizontal) {
				move.right();
			}
			if (settings.vertical) {
				move.down();
			}

      // Make that shit responsive!
      $(window).resize( function() {
        getSizes();
      });
		});
	};
})(jQuery, window);

$(document).ready( function() {

	$('.marquee').marqueeify({
		speed: 300,
		bumpEdge: function () {
			var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
			$('.marquee .logo').css('fill', newColor);
		}
	});
});

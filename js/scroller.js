$(document).ready(function () {
		$('[id^=hp-]').each(function(i, el) {
			var waypoints = new Waypoint({
				element: el,
				handler: function(direction) {
					if (direction === 'down') {
						$('.aios-scroll-id-hp-' + String(i) + String(i)).removeClass('nav-active-section');
						$('.aios-scroll-id-hp-' + String(i+1) + String(i+1)).addClass('nav-active-section');
					} else {
						$('.aios-scroll-id-hp-' + String(i+1) + String(i+1)).removeClass('nav-active-section');
						$('.aios-scroll-id-hp-' + String(i) + String(i)).addClass('nav-active-section');
					}
				},
				offset: '50%'
			});
		})

})


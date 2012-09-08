(function() {
	// should smooth scroll be enabled?
	var smooth_scroll = true;

	// should we try to scroll to image's left side?
	var horizontal_scroll = false;

	// duration of smooth scroll (ms)
	var duration = 100;

	// pause (ms) between smooth scroll frame
	var interval = 10;

	// min area (px2) of image to include in navigation
	var area = 100000; // ~ 333x300

	// no more configurable settings below this comment

	var img = document.getElementsByTagName('img');
	var len = img.length;
	var images = [];

	for (var i=0; i<len; i++) {
		if (img[i].width * img[i].height >= area) {
			images.push(img[i]);
		}
	}

	len = images.length;

	if (!len) {
		return;
	}

	document.onkeyup = function (e) {
		var key = (window.event) ? event.keyCode : e.keyCode;

		switch (key) {
			case 74: // J
			case 75: // K

				var page_y = scrollY();
				index = -1;

				if (key == 75) {
					for (var i=len-1; i>-1; i--) {
						position = getElementXY(images[i]);
						if ((position.y + 5) <= page_y) {
							index = i;
							break;
						}
					}
				} else {
					for (var i=0; i<len; i++) {
						position = getElementXY(images[i]);
						if ((position.y - 5) >= page_y) {
							index = i;
							break;
						}
					}
				}

				if (index === -1) {
					return;
				}

				var position = getElementXY(images[index]);
				if (smooth_scroll) {
					var steps = duration / interval;
					var x_step = (horizontal_scroll ? Math.round((position.x - scrollX()) / steps) : 0);
					var y_step = Math.round((position.y - scrollY()) / steps);
					var step = 0;

					function smoothScrollBy() {
						window.scrollBy(x_step, y_step);
						if (++step < steps) {
							setTimeout(smoothScrollBy, interval);
						} else {
							window.scrollTo(0, position.y);
						}
					}

					smoothScrollBy();
				} else {
					scrollTo((horizontal_scroll ? position.x : 0), position.y);
				}

			break;
		}
	};

	function getElementXY(elem) {
		var x = 0,
				y = 0;

		while (elem.tagName != "BODY") {
			x += elem.offsetLeft;
			y += elem.offsetTop;
			elem = elem.offsetParent;
		}

		return { x: x, y: y };
	}

	function scrollX() {
		return window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft;
	}

	function scrollY() {
		return window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
	}

})();
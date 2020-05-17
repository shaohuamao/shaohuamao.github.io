/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com 
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function () {

	var docElem = document.documentElement,
		header = document.querySelector('.navbar-default'),
		didIndex = document.querySelector('.active a'),
		didScroll = false;
	if (didIndex) {
		changeHeaderOn = 0;
	} else {
		changeHeaderOn = 200;
	}

	function onWindowResize() {
		var element = $('.row');
		if (element[0].id == 'headrow') {
			element[0].style.display = $(window).width() <= 768 ? 'none' : 'flex';
			console.log(element[0].style.display);
		}
	}

	function init() {
		$(document).ready(function () {
			onWindowResize();
		});

		window.addEventListener('resize', onWindowResize);

		window.addEventListener('scroll', function (event) {
			if (!didScroll) {
				didScroll = true;
				setTimeout(scrollPage, 250);
			}
		}, false);
	}

	function scrollPage() {
		var sy = scrollY();
		if (sy >= changeHeaderOn) {

			if ($(window).width() >= 768) {
				classie.add(header, 'navbar-shrink');
				document.getElementById("headrow").style.display = "none";
				document.getElementById("li-Index").style.color = "black";
				document.getElementById("li-Joinus").style.color = "black";
				document.getElementById("li-About").style.color = "black";
				// document.getElementById("li-Team").style.color = "black";
				document.getElementById("li-Contact").style.color = "black";
				document.getElementById("title").style.color = "black";
				document.getElementById("li-Language").style.color = "black";
			}

		}
		else {

			if ($(window).width() <768) {
				document.getElementById("headrow").style.display = "none";
			} else {
				classie.remove(header, 'navbar-shrink');
				document.getElementById("headrow").style.display = "flex";
			}
			document.getElementById("li-Index").style.color = "white";
			document.getElementById("li-Joinus").style.color = "white";
			document.getElementById("li-About").style.color = "white";
			// document.getElementById("li-Team").style.color = "white";
			document.getElementById("li-Contact").style.color = "white";
			document.getElementById("title").style.color = "white";
			document.getElementById("li-Language").style.color = "white";
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
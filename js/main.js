(function () {

	"use strict";

	AOS.init({
		ease: 'slide',
		once: true
	});

	const swiper = new Swiper('.swiper', {
		direction: 'vertical',
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	var slider = function () {

		var carouselSlider = document.querySelectorAll('.carousel-testimony');

		if (carouselSlider.length > 0) {

			var testimonySlider = tns({
				container: '.carousel-testimony',
				items: 1,
				mode: 'carousel',
				autoplay: true,
				animateIn: 'tns-fadeIn',
				animateOut: 'tns-fadeOut',
				speed: 700,
				nav: false,
				gutter: 20,
				controls: true,
				controlsText: ["<span class='ion-ios-arrow-round-back'></span>", "<span class='ion-ios-arrow-round-forward'></span>"],
				autoplayButtonOutput: false,
				responsive: {
					0: {
						items: 1,
						gutter: 0
					},
					600: {
						items: 1,
						gutter: 20
					},
					1000: {
						items: 1,
						gutter: 20
					}
				}
			});
		}
	}
	slider();

	var lang = document.getElementById('lang');
	var path = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
	console.log(window.location)
	lang.onchange = function () {
		window.location.pathname = ''
		window.location.pathname = `visit-site${lang.options[lang.options.selectedIndex].value}${path}`
	}

	var counter = function () {
		function countUp(elem) {
			var current = elem.innerHTML;


			var timeIntervalBeforeIncrement = 2000 / elem.getAttribute("data-count")


			var interval = setInterval(increase, timeIntervalBeforeIncrement);

			function increase() {
				elem.innerHTML = current++;
				if (current > elem.getAttribute("data-count")) {
					clearInterval(interval);
				}
			}

		}

		var span = document.querySelectorAll("[id^='count']");

		var i = 0;
		for (i = 0; i < span.length; i++) {
			countUp(span[i]);
		}
	}

	var elements;
	var windowHeight;

	function init() {
		elements = document.querySelectorAll('.ftco-about-section');
		windowHeight = window.innerHeight;
	}

	function checkPosition() {
		var i;
		for (i = 0; i < elements.length; i++) {
			var element = elements[i];
			var positionFromTop = elements[i].getBoundingClientRect().top;
			if (positionFromTop - windowHeight <= 0) {
				if (!element.classList.contains('viewed')) {
					element.classList.add('viewed');
					counter();
				} else {
					if (element.classList.contains('viewed')) {

					}
				}
			}
		}
	}
	window.addEventListener('scroll', checkPosition);
	window.addEventListener('resize', init);

	init();
	checkPosition()


	const lightbox = lightbox({
		touchNavigation: true,
		loop: true,
		autoplayVideos: true
	});

	//SCROLL
	const links = document.querySelectorAll(".btn-custom");

	for (const link of links) {
		link.addEventListener("click", clickHandler);
	}

	function clickHandler(e) {
		const href = this.getAttribute("href");
		const offsetTop = document.querySelector(href).offsetTop;

		scroll({
			top: offsetTop,
			behavior: "smooth"
		});
	}

})()


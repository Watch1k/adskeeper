head.ready(function(){

// fix IE8 background-size
	$('.section').css("background-size", "cover");

// menu toggle
	$('#menu_toggle').on('click', function(){
		$(this).toggleClass('is-active');
		$('.nav-main').slideToggle();
	});

// FullPage
	$('.fullpage').fullpage({
		// verticalCentered: false,
		// normalScrollElements: '.section',
		onLeave: function(index, nextIndex, direction) {
			// show active menu
			if (nextIndex > 2 && nextIndex < 7) {
				$('.nav-main li').eq(0).addClass('is-active');
				$('.nav-main li').eq(1).removeClass('is-active');
			} else {
				$('.nav-main li').eq(0).removeClass('is-active');
				if (nextIndex > 6) {
					$('.nav-main li').eq(1).addClass('is-active');
				} else {
					$('.nav-main li').eq(1).removeClass('is-active');
				}
			}
			// show join button
			if (nextIndex > 2 && nextIndex < 6) {
				$('.join-btn').addClass('is-active');
			} else {
				if (nextIndex > 6 && nextIndex < 10 ) {
					$('.join-btn').addClass('is-active');
				} else {
					$('.join-btn').removeClass('is-active');
				}
			}
		}
	});

	// disable fullpage.js if mobile landscape
	function disableFullpage () {
		if (head.mobile && head.landscape) {
			$.fn.fullpage.setAutoScrolling(false);
			$.fn.fullpage.setFitToSection(false);
			console.log("false");
		} else {
			$.fn.fullpage.setAutoScrolling(true);
			$.fn.fullpage.setFitToSection(true);
			console.log("true");
		}
	}
	disableFullpage();
	$(window).resize(function(){
		console.log("fine");
		setTimeout(function(){
			disableFullpage();
		}, 100);
	});

// Navigation
	$('.nav-main li').eq(0).on('click', function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(3);
	});
	$('.nav-main li').eq(1).on('click', function(e){
		e.preventDefault();
		$.fn.fullpage.moveTo(7);
	});

// Clear placeholder
	// (function() {
	// 	$('input,textarea').focus(function(){
	// 			$(this).data('placeholder',$(this).attr('placeholder'))
	// 			$(this).attr('placeholder','');
	// 	});
	// 	$('input,textarea').blur(function(){
	// 		$(this).attr('placeholder',$(this).data('placeholder'));
	// 	});
	// }());

// IE8 placeholder
	$('input.form-input').placeholder();

// Validation
	$.validate({
		validateOnBlur : true,
		validateOnEvent: true
	});

// // ScrollTo
// 	$(function(){
// 	    $('.main-nav').onePageNav({
// 			filter: ':not(.external)',
// 			scrollThreshold: 0.25,
// 			scrollSpeed: 1200,
// 			easing: 'swing',
// 			scrollOffset: 38
// 		});
// 	});

// // js-inview
// 	$('.js-inview').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
// 		if (isInView) {
// 				if (visiblePartY == 'top') {
// 				// top part of element is visible
// 			} else if (visiblePartY == 'bottom') {
// 				// bottom part of element is visible
// 			} else {
// 				// whole part of element is visible
// 			}
// 		} else {
// 			// element has gone out of viewport
// 		}
// 	});

// // WOW animation
// 	new WOW().init();
	
	
});
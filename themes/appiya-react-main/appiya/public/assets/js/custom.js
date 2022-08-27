/*========================================================================
EXCLUSIVE ON themeforest.net
Template Name   : Appiya - App Landing Page
Author: ThemeAtelier
Created: December 2018
Last update: December 2018
========================================================================*/

/* TABLE OF CONTENTS
	1. PRELOADER
	2. ADD CLASS HEADER
	3. NAV COLLAPSE
	4. NAV SMOOTH SCROLL
	5. FIXED HEADER
	6. TEXT ANIMATION
	7. SCREENSHOTS SLIDER
	8. TESTIMONIAL SLIDER
	9. CONTACT FORM
*/
var PATH = {};
(function ($) {
	"use strict"

	/******************** 1. PRELOADER ********************/
	PATH.preLoader = function () {
		$(".loader").fadeOut();
			$(".loader-wrapper").delay(1000).fadeOut("slow");
	}

	/******************** 2. ADD CLASS HEADER ********************/
	PATH.HeaderSticky = function () {
		$(".navbar-toggler").on("click", function (a) {
			a.preventDefault(),
				$(".navbar").addClass("fixed-header")
		});
	}

	/******************** 3. NAV COLLAPSE ********************/
	PATH.MenuClose = function () {
		$('.navbar-nav .nav-link').on('click', function () {
			var toggle = $('.navbar-toggler').is(':visible');
			if (toggle) {
				$('.navbar-collapse').collapse('hide');
			}
		});
	}

	/******************** 5. FIXED HEADER ********************/
	PATH.HeaderFixed = function () {
		var varHeaderFix = $(window).scrollTop() >= 60,
		$navbar = $('.navbar');
		if (varHeaderFix) {
			$navbar.addClass('fixed-header');
		} else {
			$navbar.removeClass('fixed-header');
		}
	}

	/******************** 6. TEXT ANIMATION ********************/
	PATH.textAnimation = function () {
		var $tlt1 = $('.tlt1'),
			$tlt = $('.tlt');
			
		if( $tlt1.length ){
			$tlt1.textillate({
				loop: true,
				in: {
					effect: 'fadeInDown',
				},
				out: {
					effect: 'flip',
				},
			});
		}
		//
		if( $tlt.length ){
			$tlt.textillate({
				loop: true,
				in: {
					effect: 'fadeInRight',
				},
				out: {
					effect: 'fadeOutLeft',
				},
			});
		}
	}

	/******************** 7. SCREENSHOTS SLIDER ********************/
	PATH.shotsSlider = function(){
	var cswiper = new Swiper('.screenshot-swiper', {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflowEffect: {
			  rotate: 50,
			  stretch: 0,
			  depth: 100,
			  modifier: 1,
			  slideShadows : true,
			},
			loop: true,
			// pagination: {
			//   el: '.swiper-pagination',
			// },
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			  },
	});
	}
	
	/******************** 8. TESTIMONIAL SLIDER ********************/
	PATH.sliderTestimonial = function () {
	var vswiper = new Swiper('.testimonialSwiper', {
	speed: 2000,
	autoplay: {
	  delay: 2000,
	},
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	});
	}

/* Document ready function */
	$(function(){
		PATH.textAnimation(),
		PATH.MenuClose(),
		PATH.HeaderSticky();
	});

/* Window on scroll function */
	$(window).on("scroll", function () {
		PATH.HeaderFixed();
	});

/* Window on load function */
$(window).on('load', function () {
	PATH.sliderTestimonial();
	PATH.shotsSlider();
	PATH.preLoader();
});

})(jQuery);


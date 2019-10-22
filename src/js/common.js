$(document).ready(function () {

	/*фиксация кнопок при скролле*/

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.to-top').fadeIn();
		} else {
			$('.to-top').fadeOut();
		}
		if(document.documentElement.clientWidth >= 992) {
			var $productNav = $('.product__nav');
			var $productNavHeight = $('.product__nav').outerHeight();
			var $productNavTop = $('.product__nav').offset().top;

			if(($productNavTop + $productNavHeight) - $(window).scrollTop() < 0 ) {
				$('.product__nav__content').addClass('fixed');
			}
			else {
				$('.product__nav__content').removeClass('fixed');
			}
		} else {
			$('.product__nav__content').removeClass('fixed');
		}
	});

	/*кнопка наверх*/
	$('.to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});


	/*переключение кнопок при скролле*/

	var productItem = $('.product__item');

	$(window).scroll(function () {
		productItem.each(function (i) {
			if ($(this).position().top - $(window).scrollTop() < 150) {
				$('.product__nav__content.fixed a.active').removeClass('active');
				$('.product__nav__content.fixed a').eq(i).addClass('active')
			}
		});

	});

	$('.materials .materials__item p').matchHeight();
	$('.offers .offers__item .name').matchHeight();
	$('.services .services__item h3').matchHeight();
	$('.services .services__item p').matchHeight();
	$('.portfolio .portfolio__item .text p').matchHeight();

	/*Плавный скролл*/
	$(".two-cols-block__nav, .product__nav__content").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),//забираем идентификатор бока с атрибута href
			top = $(id).offset().top - 100;//узнаем высоту от начала страницы до блока на который ссылается якорь

		$('body,html').animate({
			scrollTop: top
		}, 1500);//анимируем переход на расстояние - top за 1500 мс
	});

	/*ОТКРЫТИЕ МЕНЮ*/
	var burger = $('.burger');

	var close = document.querySelector('.close');
	var overlay = document.querySelector('.overlay');

	$('.burger, .open-menu').click (function () {
		overlay.classList.add('active');
		overlay.classList.remove('hide');
		/*burger.classList.toggle('active');*/
	});

	close.addEventListener('click', function () {
		overlay.classList.remove('active');
		overlay.classList.add('hide');
	});


	/*ОТКРЫТИЕ ПОДСКАЗОК*/
	$('.mark-icon').hover(function () {
		$(this).next().fadeToggle();
	});

	/*ОТКРЫТИЕ ОФФЕРОВ*/
	var offerBlock = $('.offers');
	var offerItem = $('.offers__item a, .offers__item .image');
	var offersOverlay = $('.overlay-offers');

	offerItem.click(function () {
		offersOverlay.addClass('active');
		offerItem.not(this).parents('.offers__item').removeClass('active');
		$(this).parents('.offers__item').addClass('active');
		$(this).parents('.offers__item').siblings('.more-offers-content').addClass('active');
	});

	offersOverlay.click(function () {
		$(this).removeClass('active');
		$('.more-offers-content').removeClass('active');
	});

	/*МАСКА ТЕЛЕФОНА*/
	$(".phone").mask("+7 999 999 99 99");


});

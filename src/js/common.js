$(document).ready(function () {
	$('.intro__slider').slick({
		arrows: false,
		dots: false
	});


	//затемнение контента при раскрытии меню
	$('.product-menu .product-menu__item').hover(function () {
		$('.overlay').toggleClass('active');
	});

	//ширина раскрывающегося меню
	(function () {
		var introContentWidth = $('.intro__content').width();
		var introContentLeft = $('.intro__content').offset().left;
		var productMenuWidth = $('.product-menu').width();
		var productMenuHeight = $('.product-menu').height();
		var productMenuLeft = $('.product-menu').offset().left;
		var productMenuLeftWidth = productMenuLeft - introContentLeft;
		var dropdownMenu = $('.dropdown-menu');

		dropdownMenu.width(introContentWidth - productMenuWidth - productMenuLeftWidth);
		dropdownMenu.height(productMenuHeight);
	})();

	var WINDOW_WIDTH = {
		mobileBreakpoint: 725,
		tablet: 768,
		laptop: 1280
	};


	$(window).resize(function () {
		if(document.documentElement.clientWidth >= WINDOW_WIDTH.laptop) {
			var introContentWidth = $('.intro__content').width();
			var introContentLeft = $('.intro__content').offset().left;
			var productMenuWidth = $('.product-menu').width();
			var productMenuHeight = $('.product-menu').height();
			var productMenuLeft = $('.product-menu').offset().left;
			var productMenuLeftWidth = productMenuLeft - introContentLeft;
			var dropdownMenu = $('.dropdown-menu');


			dropdownMenu.width(introContentWidth - productMenuWidth - productMenuLeftWidth);
			dropdownMenu.height(productMenuHeight);
		}
	});

	// слайдер кнопок под первым экраном
	$('.product-kind-btns__wrapper').slick({
		mobileFirst: true,
		arrows: false,
		dots: false,
		centerMode: true,
		centerPadding: '60px',
		responsive: [
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 1280,
				settings: "unslick"
			}
		]

	});

	//слайдер-партнеры
	$('.partners__list').slick({
		mobileFirst: true,
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 2,
					centerPadding: '60px',
					centerMode: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 975,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 1280,
				settings: 'unslick'
			}
		]

	});

	//продукты
	$('.products__list').slick({
		arrows: false,
		dots: false,
		mobileFirst: true,
		centerMode: true,
		responsive: [
				{
					breakpoint: 320,
					settings: {
						slidesToShow: 1,
						centerPadding: '15px'
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						centerPadding: '20px'
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						centerPadding: '10px'
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						centerPadding: '20px'
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 1150,
					settings: {
						slidesToShow: 4
					}
				},
				// {
				// 	breakpoint: 1500,
				// 	settings: {
				// 		slidesToShow: 4,
				// 		centerMode: false
				// 	}
				// },
				{
					breakpoint: 1500,
					settings: 'unslick'
				}
			]
	});

	//одинаковая высота новостей
	$('.news__text').matchHeight();

	//аккордеон
	var activateAccordion = function (element) {
		element.click(function () {
			element.not(this).next().slideUp();
			$(this).next().slideToggle();
		});
	};

	//аккордеон карта
	var mapToggle = $('.map__item .item-name');

	activateAccordion(mapToggle);


	//аккордеон футер
	if(document.documentElement.clientWidth <= WINDOW_WIDTH.mobileBreakpoint) {
		var footerToggle = $('.footer__title');

		activateAccordion(footerToggle);
	}


	// Дождёмся загрузки API и готовности DOM.
	ymaps.ready(init);

	function init () {
		// Создание экземпляра карты и его привязка к контейнеру с
		// заданным id ("map").
		var myMap = new ymaps.Map('map', {
			// При инициализации карты обязательно нужно указать
			// её центр и коэффициент масштабирования.
			center: [55.76, 37.64], // Москва
			zoom: 10
		}, {
			searchControlProvider: 'yandex#search'
		});
	}
});

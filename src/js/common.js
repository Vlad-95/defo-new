$(document).ready(function () {
	$('.intro__slider').slick({
		arrows: false,
		dots: false
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

	//одинаковая высота новостей
	$('.news__text').matchHeight();

	//аккордеон
	$('.map__item .item-name').click(function () {
		$('.map__item .item-name').not(this).next().slideUp();
		$(this).next().slideToggle();
	});

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

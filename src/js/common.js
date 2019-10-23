$(document).ready(function () {
	$('.intro__slider').slick({
		arrows: false,
		dots: false
	});

	//одинаковая высота новостей
	$('.news__text').matchHeight();

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

		document.getElementById('destroyButton').onclick = function () {
			// Для уничтожения используется метод destroy.
			myMap.destroy();
		};

	}
});

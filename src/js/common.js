$(document).ready(function () {
	$('.intro__slider').slick({
		arrows: false,
		dots: false
	});

	//одинаковая высота новостей
	$('.news__text').matchHeight();
});

const ham = document.getElementById('ham');
const menu_wrapper = document.getElementById('menu_wrapper');
ham.addEventListener('click', function() {
	ham.classList.toggle('clicked');
	menu_wrapper.classList.toggle('clicked');
});

$('.slick01').slick({
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: false,
});

/** @format */

document.addEventListener('DOMContentLoaded', function () {
	const mobileMenuToggle = document.querySelector('.mobile_menu_toggle');
	const navigationArea = document.querySelector('.navigation_area');

	// Function to close the navigation area if device width is greater than 576px
	function closeNavigationArea() {
		if (window.innerWidth > 768) {
			navigationArea.classList.remove('open');
		}
	}

	// Event listener for the mobile menu toggle button
	mobileMenuToggle.addEventListener('click', function () {
		navigationArea.classList.toggle('open');
	});

	// Event listener for the resize event to close navigation area on window resize
	window.addEventListener('resize', closeNavigationArea);

	// Call closeNavigationArea initially to ensure correct state on page load
	closeNavigationArea();
});

// initialise slider
$('.reviewSlide').slick({
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

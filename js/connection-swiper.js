const swiper = new Swiper('.swiper-container', {
    // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
    // If we need pagination
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
    // Navigation arrows
    scrollbar: {
      hide: true,
    },
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			}
		}
})

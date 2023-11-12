document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.our-work__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click',function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })



	$('.our-work__btn').click(function() {
		$('.our-work__btn').removeClass('our-work__btn-orange');
		$(this).addClass('our-work__btn-orange');
	});
	document.querySelector('.header__burger').addEventListener('click', function(){  this.classList.toggle('rotate');
	})

	document.querySelector('.header__burger').addEventListener('click',function(){
		document.querySelector('.header__menu').classList.toggle('menu-active')
	})
})

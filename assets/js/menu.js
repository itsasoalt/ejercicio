$(document).ready(function(){

	$('nav>ul>li>a').click(function() {
		$('nav>ul>li>a').parent().removeClass('current-menu-item');
		$(this).parent().addClass('current-menu-item');
	});

	$('#mobile-button').click(function() {
		$('#menu-container').show();
		$('#mobile-button').hide();
		$('#mobile-close').show();
	});
	$('#mobile-close').click(function() {
		$('.sub-menu').hide();
		$('#menu-container').hide();
		$('#mobile-button').show();
		$('#mobile-close').hide();
	});

	$('nav>ul>li').hover(function() {
		if ($(window).width()>990) {
			$(this).find('.sub-menu').fadeToggle();
		}
	});
	
	$('nav>ul>li').click(function() {
		if ($(window).width()<=990) {
			$('nav>ul>li').not(this).find($('.sub-menu:visible')).hide();
			$(this).find($('.sub-menu')).toggle();
		}	
	});

	$(window).resize(function() {

		if ($(window).width()>990) {
			$('#mobile-button').hide();
			$('#mobile-close').hide();

		} else {
			$('#menu-container').hide();
			$('#mobile-button').show();
		}
	});

});
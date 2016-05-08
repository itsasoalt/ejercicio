$(document).ready(function(){

	$('nav>ul>li>a').click(function() {
		$('nav>ul>li>a').parent().removeClass('current-menu-item');
		$(this).parent().addClass('current-menu-item');
	});

	if ($(window).width()>991) {
		
		$('nav>ul>li').hover(function() {
			$(this).find('ul').fadeToggle('sub-menu');
		});

	} else {

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
		$('nav>ul>li').click(function() {
			$('nav>ul>li').find($('.sub-menu')).hide();
			$(this).find($('.sub-menu')).toggle();
		});
		
	};

	$(window).resize(function() {
		if ($(window).width()>991) {
			$('#mobile-button').hide();
			$('#mobile-close').hide();
		} else {
			$('#mobile-button').show();
		}
	});

});
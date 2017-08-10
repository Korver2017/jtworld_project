$(document).ready(function() {
	$('.enter').hide();
	$('.btnEffect').mouseenter(function(event) {
		$('body').css({
			'filter': 'none',
			'transition': 'all 2s'
		});
	});
	$('.btnEffect').mouseleave(function(){
		$('body').css({
			'filter': 'grayscale(100%) opacity(0.5)'
		});
	});
	$('.btnEffect').on('click', function(event) {
		event.preventDefault();
		$(this).fadeOut(1000);
		$('.btnEffect').mouseleave(function(){
			$('body').css({
				'filter': 'grayscale(0%)'
			});
		});
	});
	$('.btnEffect').on('click', function(){
		$('.enter').show().css({
			'transition-delay': '1.5s',
			'transition-duration': '1s',
			'opacity': '1',
			'bottom': '100px'
		});
	});
});
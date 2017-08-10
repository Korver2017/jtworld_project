$(document).ready(function() {
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
		$(this).fadeOut(2000);
		$('.btnEffect').mouseleave(function(){
			$('body').css({
				'filter': 'grayscale(0%)'
			});
		});
	});
	$('.btnEffect').on('click', function(){
		$('.enter').css({
			'transition-delay': '2.5s',
			'transition-duration': '.3s',
			'bottom': '100px'
		});
	});
});
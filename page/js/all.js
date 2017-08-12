$(document).ready(function() {

  new WOW().init();

	if(navigator.userAgent.match(/Trident\/7\./)) {
	    $('body').on("mousewheel", function () {
	        event.preventDefault(); 

	        var wheelDelta = event.wheelDelta;
	        var currentScrollPosition = window.pageYOffset;
	        window.scrollTo(0, currentScrollPosition - wheelDelta);
	    });
	}

	$('.top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 1000)
	});

	$('.control').on('click', function(e){
		$('.nav').toggleClass('open');
	});

	$(document).on('click',function(e){
	    $('.nav').removeClass('open');
	});

	$('.nav').on('click',function(e){
	    e.stopPropagation();
	});

	baguetteBox.run('.gallery');

	$(window).on('load', function() {
	    $('#slider2').nivoSlider(); 
	    $('#slider3').nivoSlider(); 
	    $('#slider4').nivoSlider(); 
	    $('#slider5').nivoSlider(); 
	    $('#slider6').nivoSlider(); 
	    $('#slider7').nivoSlider(); 
	    $('#slider8').nivoSlider(); 
	});

	$('#slider2').nivoSlider({ 
	    controlNavThumbs: true,
      effect:'fade'
	});
	$('#slider3').nivoSlider({ 
	    controlNavThumbs: true,
      effect:'fade'
	});
	$('#slider4').nivoSlider({ 
	    controlNavThumbs: true,
      effect:'fade'
	});
	$('#slider5').nivoSlider({ 
	    controlNavThumbs: true,
      effect:'fade'
	});
	$('#slider6').nivoSlider({ 
	    controlNavThumbs: true,
      effect:'fade'
	});
	$('#slider7').nivoSlider({ 
	    controlNavThumbs: true,
      effect:'fade'
	});
	$('#slider8').nivoSlider({ 
	    controlNavThumbs: true,
      effect:'fade'
	});


	$(window).scroll(function(){
	     var scrollPos = $(window).scrollTop();
	     var aboutTargetPos = $('#aboutUs').offset().top;
	     var str = -((aboutTargetPos - 300) - scrollPos) / 5;
	     if ((aboutTargetPos - 300) <= scrollPos) {
	     	$('.box').css({
	     		transform: 'translateY(' + str + 'px)'
	     	})
	     	$('.boxOrange').css({
	     		transform: 'translateY(' + str*.3 + 'px)'
	     	})
	     	$('.aboutBg > h2').css({
	     		transform: 'translateX(' + str*.15 + 'px) translateY(' + (str*6) + 'px)'
	     	})
	     	$('.content > p').addClass('animated jello ');
	     }

	     var infoTargetPos = $('.info').offset().top;
       var infoHeight = $('.info').outerHeight();
	     if ((infoTargetPos - infoHeight) <= scrollPos) {
	     	$('.info').addClass('bgCover');
	     }
	     var noteTargetPos = $('.note').offset().top;
	     if ((noteTargetPos - infoHeight / 2) <= scrollPos) {
	     	$('.info p').addClass('text-focus-in');
	     }
	});

	$('.scrollTop').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    var targetHeight = $(target).outerHeight();
    var windowHeight = $(window).height();
    $('html, body').animate({scrollTop: targetPos - windowHeight / 2 + targetHeight / 2}, 1000);
  });

  // $('.scrollDown').on('click', function(event) {
  //   event.preventDefault();
  //   var target = $(this).attr('href');
  //   var targetPos = $(target).offset().top;
  //   $('html, body').animate({scrollTop: targetPos - 100}, 1000);
  // });

	$('.room').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $('html, body').animate({scrollTop: targetPos + 30}, 1000);
  });

  $('.btn').on('click', function(event) {
    event.preventDefault();
    var targetPos = $('#payment').offset().top;
    $('html, body').animate({scrollTop: targetPos - 30}, 1000);
  });
		  
  function atvImg(){
  	var d = document,
  		de = d.documentElement,
  		bd = d.getElementsByTagName('body')[0],
  		htm = d.getElementsByTagName('html')[0],
  		win = window,
  		imgs = d.querySelectorAll('.atvImg'),
  		totalImgs = imgs.length,
  		supportsTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints;

  	if(totalImgs <= 0){
  		return;
  	}

  	for(var l=0;l<totalImgs;l++){

  		var thisImg = imgs[l],
  			layerElems = thisImg.querySelectorAll('.atvImg-layer'),
  			totalLayerElems = layerElems.length;

  		if(totalLayerElems <= 0){
  			continue;
  		}

  		while(thisImg.firstChild) {
  			thisImg.removeChild(thisImg.firstChild);
  		}
  	
  		var containerHTML = d.createElement('div'),
  			shineHTML = d.createElement('div'),
  			shadowHTML = d.createElement('div'),
  			layersHTML = d.createElement('div'),
  			layers = [];

  		thisImg.id = 'atvImg__'+l;
  		containerHTML.className = 'atvImg-container';
  		shineHTML.className = 'atvImg-shine';
  		shadowHTML.className = 'atvImg-shadow';
  		layersHTML.className = 'atvImg-layers';

  		for(var i=0;i<totalLayerElems;i++){
  			var layer = d.createElement('div'),
  				imgSrc = layerElems[i].getAttribute('data-img');

  			layer.className = 'atvImg-rendered-layer';
  			layer.setAttribute('data-layer',i);
  			layer.style.backgroundImage = 'url('+imgSrc+')';
  			layersHTML.appendChild(layer);

  			layers.push(layer);
  		}

  		containerHTML.appendChild(shadowHTML);
  		containerHTML.appendChild(layersHTML);
  		containerHTML.appendChild(shineHTML);
  		thisImg.appendChild(containerHTML);

  		var w = thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
  		thisImg.style.transform = 'perspective('+ w*3 +'px)';

  		if(supportsTouch){
  			win.preventScroll = false;

  	        (function(_thisImg,_layers,_totalLayers,_shine) {
  				thisImg.addEventListener('touchmove', function(e){
  					if (win.preventScroll){
  						e.preventDefault();
  					}
  					processMovement(e,true,_thisImg,_layers,_totalLayers,_shine);		
  				});
  	            thisImg.addEventListener('touchstart', function(e){
  	            	win.preventScroll = true;
  					processEnter(e,_thisImg);		
  				});
  				thisImg.addEventListener('touchend', function(e){
  					win.preventScroll = false;
  					processExit(e,_thisImg,_layers,_totalLayers,_shine);		
  				});
  	        })(thisImg,layers,totalLayerElems,shineHTML);

  	    } else {
  	    	(function(_thisImg,_layers,_totalLayers,_shine) {
  				thisImg.addEventListener('mousemove', function(e){
  					processMovement(e,false,_thisImg,_layers,_totalLayers,_shine);		
  				});
  	            thisImg.addEventListener('mouseenter', function(e){
  					processEnter(e,_thisImg);		
  				});
  				thisImg.addEventListener('mouseleave', function(e){
  					processExit(e,_thisImg,_layers,_totalLayers,_shine);		
  				});
  	        })(thisImg,layers,totalLayerElems,shineHTML);
  	    }
  	}

  	function processMovement(e, touchEnabled, elem, layers, totalLayers, shine){

  		var bdst = bd.scrollTop || htm.scrollTop,
  			bdsl = bd.scrollLeft,
  			pageX = (touchEnabled)? e.touches[0].pageX : e.pageX,
  			pageY = (touchEnabled)? e.touches[0].pageY : e.pageY,
  			offsets = elem.getBoundingClientRect(),
  			w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth,
  			h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight,
  			wMultiple = 320/w,
  			offsetX = 0.52 - (pageX - offsets.left - bdsl)/w,
  			offsetY = 0.52 - (pageY - offsets.top - bdst)/h,
  			dy = (pageY - offsets.top - bdst) - h / 2,
  			dx = (pageX - offsets.left - bdsl) - w / 2,
  			yRotate = (offsetX - dx)*(0.07 * wMultiple),
  			xRotate = (dy - offsetY)*(0.1 * wMultiple),
  			imgCSS = 'rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)',
  			arad = Math.atan2(dy, dx),
  			angle = arad * 180 / Math.PI - 90;

  		if (angle < 0) {
  			angle = angle + 360;

  		}

  		if(elem.firstChild.className.indexOf(' over') != -1){
  			imgCSS += ' scale3d(1.07,1.07,1.07)';

  		}
  		elem.firstChild.style.transform = imgCSS;

  		
  		shine.style.background = 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (pageY - offsets.top - bdst)/h * 0.4 + ') 0%,rgba(255,255,255,0) 80%)';
  		shine.style.transform = 'translateX(' + (offsetX * totalLayers) - 0.1 + 'px) translateY(' + (offsetY * totalLayers) - 0.1 + 'px)';	

  		
  	}

  	function processEnter(e, elem){
  		elem.firstChild.className += ' over';

  	}

  	function processExit(e, elem, layers, totalLayers, shine){

  		var container = elem.firstChild;

  		container.className = container.className.replace(' over','');
  		container.style.transform = '';
  		shine.style.cssText = '';
  		
  		for(var ly=0;ly<totalLayers;ly++){
  			layers[ly].style.transform = '';
  		}

  	}

  }
  atvImg();

  $('#toggle').click(function() {
     $(this).toggleClass('active');
     $('#overlay').toggleClass('open');
  });

});
/*jslint browser: true*/
/*global $, setTimeout*/

var galleryButtons = $('.gallery_button');
var galleryOverlay = $('.sticky_slideshow_overlay');
var loader = $('.loader');
var slideShowWapper = $('.slideshow_wrapper');
var buttonNextSmall = $('.button_next_small');
var buttonPrevSmall = $('.button_prev_small');
var buttonNextTiny = $('.button_next_tiny');
var buttonPrevTiny = $('.button_prev_tiny');
var exitButton = $('.button_exit');
var zoom1 = $('#zoom1');
var zoom2 = $('#zoom2');
var zoom3 = $('#zoom3');
var zoom4 = $('#zoom4');
var zoom5 = $('#zoom5');
var zoom6 = $('#zoom6');
var disabledButtonNext = false;
var disabledButtonPrev = false;
var whatPic = 0;


galleryButtons.on('click', function(){
	galleryOverlay.css('display', 'block');
	setTimeout(function(){
		buttonNextSmall.fadeIn("slow");
		buttonPrevSmall.fadeIn("slow");
	}, 1000);

});

zoom1.on('click', function(){
	loader.css('display', 'block');
	setTimeout(function(){
		slideShowWapper.eq(0).fadeIn("slow");
		loader.css('display', 'none');
	}, 1000);	
	whatPic = 0;
});

zoom2.on('click', function(){
	loader.css('display', 'block');
	setTimeout(function(){
		slideShowWapper.eq(1).fadeIn("slow");
		loader.css('display', 'none');
	}, 1000);
	whatPic = 1;
});

zoom3.on('click', function(){
	loader.css('display', 'block');
	setTimeout(function(){
		slideShowWapper.eq(2).fadeIn("slow");
		loader.css('display', 'none');
	}, 1000);
	whatPic = 2;
});

zoom4.on('click', function(){
	loader.css('display', 'block');
	setTimeout(function(){
		slideShowWapper.eq(3).fadeIn("slow");
		loader.css('display', 'none');
	}, 1000);
	whatPic = 3;
});

zoom5.on('click', function(){
	loader.css('display', 'block');
	setTimeout(function(){
		slideShowWapper.eq(4).fadeIn("slow");
		loader.css('display', 'none');
	}, 1000);
	whatPic = 4;
});

zoom6.on('click', function(){
	loader.css('display', 'block');
	setTimeout(function(){
		slideShowWapper.eq(5).fadeIn("slow");
		loader.css('display', 'none');
	}, 1000);
	whatPic = 5;
});

exitButton.add(galleryOverlay).on('click', function(){	
	slideShowWapper.fadeOut("slow");
	buttonNextSmall.fadeOut("slow");
	buttonPrevSmall.fadeOut("slow");
	setTimeout(
		function() {
			galleryOverlay.css('display', 'none');
		}, 700);
});

buttonNextSmall.add(buttonNextTiny).on('click', function(){
	if(disabledButtonNext == true) return;
	disabledButtonNext = true;
	disabledButtonPrev = true;
	if(whatPic == 5){
		slideShowWapper.eq(whatPic).fadeOut("slow");
		buttonNextSmall.fadeOut("slow");
		buttonPrevSmall.fadeOut("slow");
		whatPic = 0;
		setTimeout(
			function() {
				buttonNextSmall.fadeIn("slow");
				buttonPrevSmall.fadeIn("slow");
				slideShowWapper.eq(whatPic).fadeIn("slow");
				disabledButtonNext = false;
				disabledButtonPrev = false;
			}, 700);		
	}
	else{
		slideShowWapper.eq(whatPic).fadeOut("slow");
		buttonNextSmall.fadeOut("slow");
		buttonPrevSmall.fadeOut("slow");
		whatPic++;
		setTimeout(
			function() {
				buttonNextSmall.fadeIn("slow");
				buttonPrevSmall.fadeIn("slow");
				slideShowWapper.eq(whatPic).fadeIn("slow");
				disabledButtonNext = false;
				disabledButtonPrev = false;
			}, 700);
	}
});

buttonPrevSmall.add(buttonPrevTiny).on('click', function(){
	if(disabledButtonPrev == true) return;
	disabledButtonNext = true;
	disabledButtonPrev = true;
	if(whatPic == 0){
		slideShowWapper.eq(whatPic).fadeOut("slow");
		buttonNextSmall.fadeOut("slow");
		buttonPrevSmall.fadeOut("slow");
		whatPic = 5;
		setTimeout(
			function() {
				buttonNextSmall.fadeIn("slow");
				buttonPrevSmall.fadeIn("slow");
				slideShowWapper.eq(whatPic).fadeIn("slow");
				disabledButtonNext = false;
				disabledButtonPrev = false;
			}, 700);		
	}
	else{
		slideShowWapper.eq(whatPic).fadeOut("slow");
		buttonNextSmall.fadeOut("slow");
		buttonPrevSmall.fadeOut("slow");
		whatPic--;
		setTimeout(
			function() {
				buttonNextSmall.fadeIn("slow");
				buttonPrevSmall.fadeIn("slow");
				slideShowWapper.eq(whatPic).fadeIn("slow");
				disabledButtonNext = false;
				disabledButtonPrev = false;
			}, 700);
	}
});
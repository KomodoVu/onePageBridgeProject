/*jslint browser: true*/
/*global $, window, setTimeout, setInterval*/

var stickyNavigationBar = $('#sticky_navigation_bar_wrapper');
var sliderContainer = $('#container_slider');
var body1 = $('.body1');
var popUp = $('.pop_up_big');
var icon = $('.icon');
var onionIcon = $('.onion_icon');
var picWrapper = $('.pic1_wrapper');
var textWrapper = $('.what_we_do_wrapper');
var buttonNext = $('.button_next');
var buttonPrev = $('.button_prev');
var parallaxPicWrapper = $('.parallax_pic_wrapper');
var stickyButtonUp = $('.sticky_button_up');
var fadingText1Wrapper = $('.fading_text1_wrapper');
var fadingText2Wrapper = $('.fading_text2_wrapper');

$(window).scroll(function() {      
	stickyAnimation();
	parallax();
	hidePopUp();
	picAppear();
});

stickyButtonUp.on('click', function(){
	scrollUp();
});

function stickyAnimation(){
	var containerHeight = sliderContainer.height();
	var srcollValue = $(window).scrollTop();
    if (srcollValue > containerHeight) {
		stickyNavigationBar.slideDown("fast");
		stickyButtonUp.fadeIn("fast");
		icon.animate({
			height: "7vh",
			width: "4vw"
		}, 1000);
		onionIcon.animate({
			height: "12vh",
			width: "4vw"
		}, 1000);	
	} 
	else {
        stickyNavigationBar.css("display", "none");
		stickyButtonUp.fadeOut("fast");
    }
}

function picAppear() {
	var srcollValue = $(window).scrollTop();
	var body1Height = body1.height();
	var containerHeight = sliderContainer.height();
	if (srcollValue > (body1Height + containerHeight)) {
		picWrapper.animate({
			opacity: "1",
			left: "14vw"
		}, 1000);
		textWrapper.animate({
			opacity: "1",
			right: "11vw"
		}, 1000);
	}
}

function parallax(){
	var srcollValue = $(window).scrollTop();
	var body1Height = body1.height();
	sliderContainer.css('top', (srcollValue * 0.5) + 'px');
	parallaxPicWrapper.css('top', - (1.5 * body1Height) + (srcollValue * 0.5) + 'px');
}

function hidePopUp() {
	var srcollValue = $(window).scrollTop();
	var containerHeight = sliderContainer.height();
	if (srcollValue > (containerHeight / 3)) {
		popUp.css("z-index", "-1");	
		buttonNext.css("z-index", "-1");
		buttonPrev.css("z-index", "-1");
	}
	else {
        popUp.css("z-index", "0");
		buttonNext.css("z-index", "0");
		buttonPrev.css("z-index", "0");
    }
}

function scrollUp() {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
}

setInterval(function(){
	setTimeout(function(){
		fadingText1Wrapper.fadeOut("slow");
		fadingText2Wrapper.fadeIn("slow");
	}, 5000);
		setTimeout(function(){
		fadingText2Wrapper.fadeOut("slow");
		fadingText1Wrapper.fadeIn("slow");
	}, 10000);
}, 10000);
/*jslint browser: true*/
/*global $, setTimeout, setInterval, clearInterval*/

var disabledButtonNext = true;
var disabledButtonPrev = true;
var interval;
var slider = $('#slider');
var buttonNext = $('.button_next');
var buttonPrev = $('.button_prev');
var popUp = $('.pop_up_big');

setTimeout(
  function() {
        jumpIn();
  }, 1500);
$('#slider .slider_section:last').insertBefore('#slider .slider_section:first');
slider.css('margin-left', '-100%');

function jumpIn() {
    popUp.animate({
        top: '80%',
        opacity: '1'
    }, 500, function (){
		disabledButtonNext = false;
		disabledButtonPrev = false;
	});
}

function fadeOut() {
    popUp.animate({
        opacity: '0'
    }, 500);
	setTimeout(
		function() {
        popUp.css('top', '90%');
  }, 500);		
}

function moverNext() {
	slider.animate({
		marginLeft: '-200%'
	}, 700, function () {
		$('#slider .slider_section:first').insertAfter('#slider .slider_section:last');
		slider.css('margin-left', '-100%');
	});
}

function moverPrev() {
	slider.animate({
		marginLeft: 0
	}, 700, function () {
		$('#slider .slider_section:last').insertBefore('#slider .slider_section:first');
		slider.css('margin-left', '-100%');
	});
}

function autoPlay() {
	interval = setInterval(function(){
	buttonNext.trigger("click");
	disabledButtonNext = true;
	disabledButtonPrev = true;
	}, 4000);
}

buttonNext.on('click', function () {
	if(disabledButtonNext == true) return;
	fadeOut();
	setTimeout(
        function () {
            moverNext();
        }, 500);
    setTimeout(
        function () {
            jumpIn();
        }, 1200);
	clearInterval(interval);
	autoPlay();
	disabledButtonNext = true;
	disabledButtonPrev = true;
});
buttonPrev.on('click', function () {
	if(disabledButtonPrev == true) return;
	fadeOut();
	setTimeout(
        function () {
            moverPrev();
        }, 700);
    setTimeout(
        function () {
            jumpIn();
        }, 1400);
	clearInterval(interval);
	autoPlay();
	disabledButtonNext = true;
	disabledButtonPrev = true;
});

autoPlay();
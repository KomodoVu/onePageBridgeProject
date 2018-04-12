/*jslint browser: true*/
/*global $, setTimeout, setInterval, clearInterval, interval*/

var slider = $('#slider');
var buttonNext = $('.button_next');
var buttonPrev = $('.button_prev');
var popUp = $('.pop_up_big');

function jumpIn() {
    popUp.animate({
        top: '90%',
        opacity: '1'
    }, 700, function () {
		buttonNext.on('click', completeAnimationNext);
		buttonPrev.on('click', completeAnimationPrev);
	});
}

function fadeOut() {
    popUp.animate({
        opacity: '0'
    }, 700);
	setTimeout(
  function() {
        popUp.css('top', '100%');
  }, 700);		
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

function completeAnimationNext () {
	buttonPrev.unbind();
	buttonNext.unbind();
	fadeOut();
	setTimeout(
        function () {
            moverNext();
        }, 700);
    setTimeout(
        function () {
            jumpIn();
        }, 1400);
	clearInterval(interval);
}

function completeAnimationPrev () {
	buttonPrev.unbind();
	buttonNext.unbind();
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
}


setTimeout(
  function() {
        jumpIn();
  }, 2000);
$('#slider .slider_section:last').insertBefore('#slider .slider_section:first');
slider.css('margin-left', '-100%');

setInterval(function () {buttonNext.trigger("click")}, 3000);
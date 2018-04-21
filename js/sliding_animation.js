/*jslint browser: true*/
/*global $, setTimeout, setInterval, clearInterval*/

var disabledButtonNext = true;
var disabledButtonPrev = true;
var interval;
var slider = $('#slider');
var buttonNext = $('.button_next');
var buttonPrev = $('.button_prev');
var popUp = $('.pop_up_big');
var indcator = $('.indicator');
var indcator1 = $('#indicator1');
var indcator2 = $('#indicator2');
var indcator3 = $('#indicator3');
var whatIndicator = 0;
var disableIndicator = false;

setTimeout(
  function() {
        jumpIn();
  }, 1500);
$('#slider .slider_section:last').insertBefore('#slider .slider_section:first');
slider.css('margin-left', '-100%');
indcator.eq(whatIndicator).addClass("active");

function nextActive(){
	if(whatIndicator == 2){
		indcator.removeClass("active");
		whatIndicator = 0;
		indcator.eq(whatIndicator).addClass("active");
	}
	else{
		indcator.removeClass("active");
		whatIndicator++;
		indcator.eq(whatIndicator).addClass("active");
	}
}

function prevActive(){
	if(whatIndicator == 0){
		indcator.removeClass("active");
		whatIndicator = 2;
		indcator.eq(whatIndicator).addClass("active");
	}
	else{
		indcator.removeClass("active");
		whatIndicator--;
		indcator.eq(whatIndicator).addClass("active");
	}
}

function fisrtToLast() {
	$('#slider .slider_section:last').insertBefore('#slider .slider_section:first');
	$('#slider .slider_section:last').insertAfter('#slider .slider_section:first');
	slider.animate({
		marginLeft: '-200%'
	}, 700);
	setTimeout(
		function () {
			$('#slider .slider_section:last').insertAfter('#slider .slider_section:first');
			slider.css('margin-left', '-100%');
	}, 800);
}

function lastToFirst() {
	$('#slider .slider_section:first').insertAfter('#slider .slider_section:last');
	$('#slider .slider_section:first').insertBefore('#slider .slider_section:last');
	slider.animate({
		marginLeft: 0
	}, 700);
	setTimeout(
		function () {
			$('#slider .slider_section:first').insertBefore('#slider .slider_section:last');
			slider.css('margin-left', '-100%');
	}, 800);
}

function jumpIn() {
    popUp.animate({
        top: '90vh',
        opacity: '1'
    }, 500, function (){
		disabledButtonNext = false;
		disabledButtonPrev = false;
		disableIndicator = false;
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
	}, 5000);
}

indcator1.on('click', function () {
	if(disableIndicator == true) return;
	disableIndicator = true;
	if (whatIndicator == 1) {
		buttonPrev.trigger("click");
	}
	else{
		if(whatIndicator == 2){
				fadeOut();
				setTimeout(
					function () {
						lastToFirst();
					}, 500);
				setTimeout(
					function () {
						jumpIn();
						indcator.removeClass("active");
						whatIndicator = 0;
						indcator1.addClass("active");
					}, 1200);
				clearInterval(interval);
				autoPlay();
		}
		else return;
	}
});

indcator2.on('click', function () {
	if(disableIndicator == true) return;
	disableIndicator = true;
	if (whatIndicator == 0) {
		buttonNext.trigger("click");
	}
	else{
		if(whatIndicator == 2){
			buttonPrev.trigger("click");
		}
		else return;
	}
});

indcator3.on('click', function () {
	if(disableIndicator == true) return;
	disableIndicator = true;
	if (whatIndicator == 1) {
		buttonNext.trigger("click");
	}
	else{
		if(whatIndicator == 0){
				fadeOut();
				setTimeout(
					function () {
						fisrtToLast();
					}, 500);
				setTimeout(
					function () {
						jumpIn();
						indcator.removeClass("active");
						whatIndicator = 2;
						indcator3.addClass("active");
					}, 1200);
				clearInterval(interval);
				autoPlay();
		}
		else return;
	}
});

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
			nextActive();
        }, 1200);
	clearInterval(interval);
	autoPlay();
	disabledButtonNext = true;
	disabledButtonPrev = true;
	disableIndicator = true;
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
			prevActive();
        }, 1400);
	clearInterval(interval);
	autoPlay();
	disabledButtonNext = true;
	disabledButtonPrev = true;
});

autoPlay();
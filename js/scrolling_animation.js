/*jslint browser: true*/
/*global $, window*/

var stickyNavigationBar = $('#sticky_navigation_bar_wrapper');
var sliderImg = $('.slider_img');

$(window).scroll(function() {      
	var srollValue1 = sliderImg.height();
    if ($(this).scrollTop() > srollValue1) {
		stickyNavigationBar.slideDown("fast");
	} 
	else {
        stickyNavigationBar.css("display", "none");
    }
});
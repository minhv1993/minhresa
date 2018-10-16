// Navigation Bar
function navCollapse(){
    if ($(".nav-bar").offset().top > 50) {
        $(".nav-bar").addClass("scrolled");
    } else {
        $(".nav-bar").removeClass("scrolled");
    }
}

$(window).scroll(navCollapse);
$(document).ready(navCollapse);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
// Full screen header image
jQuery(document).ready(function($){
    // Defining a function to set size for #hero 
    var $navMenu = $('#nav-bar');

    function toggleMenu(){
        $navMenu.toggleClass('active');
    }

    function hideMenu(){
        $navMenu.removeClass('active');
    }

    function navigate(){
        hideMenu();
    }

    function bindEventHandlers(){
        $('#menu-toggle').on('click', toggleMenu);
        $('main').on('click', hideMenu);
        $('.nav-item').on('click', navigate)
    }

    function hideSpinner(){
        $('#site-loading-container').hide();
        $('body').removeClass('site-loading');
    }

    function init(){
        bindEventHandlers();
        setTimeout(hideSpinner, 2000);
    }
    init();
});
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

// Full screen header image
jQuery(document).ready(function($){
    // Defining a function to set size for #hero 
    var $navMenu = $('#nav-menu');
    function fullscreen(){
        $('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }

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
        $(window).on('resize', fullscreen);
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
        fullscreen();
        setTimeout(hideSpinner, 2000);
    }
    init();
});
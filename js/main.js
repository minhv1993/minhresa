// Navigation Bar
function navCollapse(){
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(navCollapse);
$(document).ready(navCollapse);

// Full screen header image
jQuery(document).ready(function($){
// Defining a function to set size for #hero 
    function fullscreen(){
        $('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
    }

    function toggleMenu(){
        $('#nav-menu').toggleClass('active');
    }

    function hideMenu(){
        $('#nav-menu').removeClass('active');
    }
    
    fullscreen();

    // subscribe to events
    $(window).on('resize', fullscreen);
    $('#menu-toggle').on('click', toggleMenu);
    $('main').on('click', hideMenu);
});
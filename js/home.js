// Navigation Bar
function timelinePosition(){
    var scrollPos = $(window).scrollTop();
    var $timeline = $('#timeline-nav');
    var $window = $(window);
    var $story = $('#story');
    if(scrollPos > 700){
        $timeline.show();
    }else{
        $timeline.hide();
    }

    if (scrollPos >= $story.offset().top) {
        $timeline.css('height', '100%');
    } /*else if(scrollPos + $window.height() >= $story.offset().bottom){

    } */else {
        var height = $window.height() - ($story.offset().top - scrollPos);
        $timeline.css('height', height);
    }
}

$(window).scroll(timelinePosition);
$(document).ready(timelinePosition);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.tl-nav-link').bind('click', function(event) {
        var $anchor = $(this);
        var $parent = $anchor.parent();
        $parent.siblings().removeClass('active');
        $parent.addClass('active');
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
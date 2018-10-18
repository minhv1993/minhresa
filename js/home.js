// Navigation Bar
function timelineHandler(){
    var $window = $(window);
    var vpTop = $window.scrollTop();
    var vpHeight = $window.height();
    var vpBot = vpTop + vpHeight;
    var $timeline = $('#timeline-nav');
    var $story = $('#story');

    // Show & Hide the timeline
    if(vpTop + ($window.height()) >= $story.offset().top){
        $timeline.show();
    }else{
        $timeline.hide();
    }

    // Height of the timeline
    if (vpTop >= $story.offset().top) {
        $timeline.css('height', '100%');
    } /*else if(vpTop + $window.height() >= $story.offset().bottom){

    } */else {
        var height = vpHeight - ($story.offset().top - vpTop);
        $timeline.css('height', height);
    }

    // Focus on the current section
    $('.tl-section').each(function(index) {
        var $el = $(this);
        if(vpTop < $el.offset().top && vpBot > $el.offset().top + $el.height())
        {
            var selector = 'a.tl-nav-link[href="#{id}"]'.replace('{id}', $el.attr('id'));
            var $anchor = $(selector);
            $('a.tl-nav-link').removeClass('active')
            $anchor.addClass('active');
        }
    });
}

function scrollHandler(){
    timelineHandler();
}

$(window).scroll(scrollHandler);
$(document).ready(scrollHandler);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.tl-nav-link').bind('click', function(event) {
        var $anchor = $(this);
        $anchor.siblings().removeClass('active');
        $anchor.addClass('active');
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top - 1
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
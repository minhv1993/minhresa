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

    var paddingOffset = 110;

    if (scrollPos >= $story.offset().top) {
        $timeline.css('height', 'calc(100% - ' + paddingOffset + 'px)');
    } else {
        var height = $window.height() 
                    - ($story.offset().top 
                    - scrollPos)
                    - paddingOffset;
        $timeline.css('height', height);
    }
}

$(window).scroll(timelinePosition);
$(document).ready(timelinePosition);

// SMOOTH SCROLLING SECTIONS
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
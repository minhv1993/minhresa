$(function() {
    // Timeline Nav
    function updateTl(){
        var $window = $(window);
        var $timeline = $('#timeline-nav');
        var $story = $('#story');

        var vpTop = $window.scrollTop();
        var vpHeight = $window.height();
        var vpBot = vpTop + vpHeight;

        var storyTop = $story.offset().top;
        var storyBot = $story.offset().top + $story.height();

        // Show & Hide the timeline
        if(vpTop + vpHeight >= storyTop){
            $timeline.show();
        }else{
            $timeline.hide();
        }

        // Height of the timeline
        var svpTop = storyTop - vpTop;
        $timeline.css('top', (svpTop > 0 ? svpTop : 0) + 'px');

        var svpBot = vpBot - storyBot;
        $timeline.css('bottom', (svpBot > 0 ? svpBot : 0) + 'px');

        // Focus on the current section
        if(!window.isStoryClicked){
            $('.tl-section-container').each(function(index) {
                var $el = $(this);
                var elTop = $el.offset().top;
                var elBot = elTop + $el.height();
                var diffTop = vpTop >= elTop ? vpTop : elTop;
                var diffBot = vpBot <= elBot ? vpBot : elBot;
                var diffHeight = diffBot - diffTop;

                if(diffHeight > vpHeight * 3/5)
                {
                    var selector = 'a.tl-nav-link[href="#{id}"]'.replace('{id}', $el.attr('id'));
                    var $anchor = $(selector);
                    $('a.tl-nav-link').removeClass('active')
                    $anchor.addClass('active');
                }
            });
        }
    }
    
    function tlNavClicked(){
        var $anchor = $(this);
        window.isStoryClicked = true;
        $anchor.siblings().removeClass('active');
        $anchor.addClass('active');
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top - 1
        }, 1500, 'easeInOutExpo', function(){
            window.isStoryClicked = false;
        });
        event.preventDefault();
    }

    function bindEventHandlers(){
        $(window).scroll(updateTl);
        $('a.tl-nav-link').bind('click', tlNavClicked);
    }

    function init(){
        updateTl();
        bindEventHandlers();
    }
    
    $(document).ready(init);
});
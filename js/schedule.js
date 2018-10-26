$(function() {
    var initialized = false;
    function bindCalendarEvent(){
        $('.btn-add-to-cal').click(function(){
            var $elem = $(this);
            $elem.toggleClass('add-mode');
            
            window.setTimeout(function() {
                $elem.siblings().toggleClass('hidden');
            }, 250);
        });
    }

    function init() {
        if(!initialized && window.currentPage === '#schedule'){
            bindCalendarEvent();
            initialized = true;
        }
    }

    $(window).on('page-loaded', init);
});
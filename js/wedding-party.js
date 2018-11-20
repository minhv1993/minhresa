$(function() {
    var initialized = false;
    function bindEventHandlers(){
        $('.more-bio-toggle').click(function(){
            $(this).closest('.wp-peep').toggleClass('show-more');
        });
    }

    function init() {
        if(!initialized && window.currentPage === '#wedding-party'){
            bindEventHandlers();
            initialized = true;
        }
    }

    $(window).on('page-loaded', init);
});
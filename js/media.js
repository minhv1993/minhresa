$(function() {
    var initialized = false;
    function initMasonry(){
        var $masonryGrid = $('.masonry-grid').masonry({
            // options
            itemSelector: '.mg-item',
            columnWidth: '.mg-sizer',
            percentPosition: true
          });
          
        // layout Masonry after each image loads
        $masonryGrid.imagesLoaded().progress( function() {
            $masonryGrid.masonry('layout');
        });
    }

    function initLightbox(){
        baguetteBox.run('.masonry-grid', {
            noScrollbars: true,
            overlayBackgroundColor: 'rgba(255,255,255,0.8)',
            async: true
        });
    }

    function init() {
        if(!initialized && window.currentPage === '#media'){
            initMasonry();
            initLightbox();
            initialized = true;
        }
    }

    $(window).on('page-loaded', init);
});
$(function() {
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
});
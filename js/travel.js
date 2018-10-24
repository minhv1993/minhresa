$(function() {
    var initialized = false;
    function refreshMap(){
        $('#venues-airport-map').attr( 'src', function ( i, val ) { return val; });
    }

    function init() {
        if(!initialized && window.currentPage === '#travel'){
            refreshMap();
            initialized = true;
        }
    }

    $(window).on('page-loaded', init);
});
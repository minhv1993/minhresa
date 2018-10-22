// Full screen header image
jQuery(document).ready(function($){
    // Navigation Bar
    function navCollapse(){
        if ($(".nav-bar").offset().top > 50) {
            $(".nav-bar").addClass("scrolled");
        } else {
            $(".nav-bar").removeClass("scrolled");
        }
    }
    
    function pageScrollClicked(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    }

    function navItemClicked(){
        var $anchor = $(this);
        $('.page-container').hide();
        $($anchor.attr('href')).fadeIn(1500);
    }

    var $navBar = $('#nav-bar');

    function toggleMenu(){
        $navBar.toggleClass('active');
    }

    function hideMenu(){
        $navBar.removeClass('active');
    }

    function navigate(){
        window.currentPage = $(this).attr('href');
        $(window).trigger('page-loaded');
        hideMenu();
    }

    function bindEventHandlers(){
        $('#menu-toggle').on('click', toggleMenu);
        $('main').on('click', hideMenu);
        $('.nav-item').on('click', navigate);
        $(window).scroll(navCollapse);
        $('a.page-scroll').bind('click', pageScrollClicked);
        $('a.nav-item').bind('click', navItemClicked);
    }

    function hideSpinner(){
        $('#site-loading-container').hide();
        $('body').removeClass('site-loading');
    }

    var pages = [
        { id: '#home', url: '/views/home.php' },
        { id: '#schedule', url: '/views/schedule.php' },
        { id: '#wedding-party', url: '/views/wedding-party.php' },
        { id: '#registry', url: '/views/registry.php' },
        { id: '#travel', url: '/views/travel.php' },
        { id: '#rsvp', url: '/views/rsvp.php' },
        { id: '#media', url: '/views/media.php' }
    ];
    var pageLoaded = [];

    function handlePageLoaded(page){
        pageLoaded.push(page);
        if(page.id === window.currentPage){
            $(page.id).fadeIn();
            $(window).trigger('page-loaded', [page]);
        }
        if(pageLoaded.length === pages.length){
            bindEventHandlers();
            hideSpinner();
        }
    }

    function loadPages(){
        pages.forEach(function(page){
            $(page.id).load(window.location.origin + page.url, handlePageLoaded.bind(this, page));
        });
    }

    function init(){
        window.currentPage = window.location.hash || '#home';
        navCollapse();
        loadPages();
    }
    init();
});
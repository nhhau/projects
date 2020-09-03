(function($) {
    $(document).ready( function() {
        function site_init() {
            $('.video-popup a').magnificPopup({
                disableOn: 200,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                iframe: {
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: 'v=',
                            src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
                        },
                        vimeo: {
                            index: 'vimeo.com/',
                            id: '/',
                            src: '//player.vimeo.com/video/%id%?autoplay=1'
                        }
                    }
                }
            });
        }

        site_init();

        function slider_init() {
            $('.welcome_products .slider').slick({
                dots: true,
                arrows: false,
                fade: true,
            });

            $('.products .slider').slick({
                dots: true,
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    }, {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    }, {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });
        }

        slider_init();
    });
})(jQuery);
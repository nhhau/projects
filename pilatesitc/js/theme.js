(function($) {
    $(document).ready( function() {
        function site_init() {
            $('#site-header .main').sticky({
                topSpacing: 0,
                zIndex: 200
            });

            $('.video-popup').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade mfp-video',
                removalDelay: 160,
                preloader: false,
                disableOn: 480,
                fixedContentPos: false,
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: 'v=',
                            src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
                        }
                    },
                    srcAction: 'iframe_src',
                }
            });
        }
        
        site_init();

        function header_init() {
            var header_sticky = function() {
                var scrollPos = $(window).scrollTop(),
                headerHeight = $('#site-header').outerHeight();

                if( scrollPos > headerHeight ) {
                    $('#site-header').sticky({
                        topSpacing: 0,
                        zIndex: 300
                    }).addClass('sticky');
                } else {
                    $('#site-header').unstick().removeClass('sticky');
                }
            }

            header_sticky();

            $(window).scroll( function() {
                header_sticky();
            });

            $('#site-menu').on( 'show.bs.collapse', function() {
                $('#site-header').addClass('show-menu');
            });

            $('#site-menu').on( 'hidden.bs.collapse', function() {
                $('#site-header').removeClass('show-menu');
            });
        }

        header_init();

        function welcome_section() {
            var set_width = function() {
                var headerHeight = $('#site-header').outerHeight();

                $('#welcome').css({
                    paddingTop: headerHeight + 'px'
                });
            }

            set_width();

            $(window).resize( function(e) {
                set_width();
            });
        }

        if( $('#welcome').length ) {
            welcome_section();
        }

        function testimonials_section() {
            $('div.testimonials__slider .slider').slick({
                dots: false,
                arrows: true,
                fade: true,
                autoplay: true
            });
        }

        if( $('#testimonials').length ) {
            testimonials_section();
        }

        function course_grid() {
            var set_width = function() {
                $('div.course-grid .course-item').each( function() {
                    var $this = $(this),
                        btnHeight = $this.find('.course-item__btn').outerHeight();

                    btnHeight = btnHeight + 60 + 30;

                    $this.css({
                        paddingBottom: btnHeight + 'px'
                    });
                });
            }

            set_width();

            $(window).resize( function() {
                set_width();
            });
        }

        if( $('div.course-grid').length ) {
            course_grid();
        }
    });
})(jQuery);
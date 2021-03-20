(function($) {
    $(document).ready( function() {
        function header_init() {
            var scrollPos = $(window).scrollTop(),
                headerHeight = $('#site-header').outerHeight();

            if( scrollPos > headerHeight ) {
                $('#site-header').sticky({
                    topSpacing: 0,
                    zIndex: 500
                });
            } else {
                $('#site-header').unstick();
            }
        }

        function site_init() {
            header_init();

            $(window).scroll( function() {
                header_init();
            });
        }
        
        site_init();

        function section_one() {
            var set_width = function() {
                var window_width = $(window).width(),
                    container_width = $('.section-one .container').width(),
                    text_width = $('.section-one .section-one__text').outerWidth(),
                    margin = ((window_width - container_width) / 2) + text_width;

                $('.section-one .section-one__photo').css({
                    right: margin + 'px'
                });
            }

            set_width();

            $(window).resize( function() {
                set_width();
            });
        }

        if( $('.section-one').length ) {
            section_one();
        }

        function section_our_canvas() {
            $('div.our-canvas__slider').slick({
                arrows: true,
                dots: false,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '20%',
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            centerPadding: '10%',
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            centerPadding: '30px',
                        }
                    },
                ]
            });
        }

        if( $('#our-canvas').length ) {
            section_our_canvas();
        }

        function contact_template() {
            var set_width = function() {
                var window_width = $(window).width(),
                    container_width = $('.contact-template .container').outerWidth(),
                    margin = ((window_width - container_width) / 2) + 15;

                $('.contact-template__photo span.dot').css({
                    right: margin + 'px'
                })
            }

            set_width();

            $(window).resize( function() {
                set_width();
            });
        }

        if( $('.contact-template').length ) {
            contact_template();
        }
    });
})(jQuery);
(function($) {
    $(document).ready( function() {
        function header_init() {
            var scroll_pos = $(window).scrollTop(),
                header_height = $('#header').outerHeight();

            if( $('#welcome').length ) {
                welcome_height = $('#welcome').outerHeight();
                header_height = welcome_height - header_height;
            }

            if( scroll_pos > header_height ) {
                $('#header').sticky({
                    topSpacing: 0,
                    zIndex: 200
                });
            } else {
                $('#header').unstick();
            }
        }

        function site_init() {
            $('#menu button.toggle-submenu').on('click', function(e) {
                $(this).toggleClass('active').siblings('ul.sub-menu').toggle();
            });

            header_init();

            $(window).scroll( function() {
                header_init();
            });

            $('#welcome .welcome__slider').slick({
                dots: false,
                arrows: false,
                fade: true,
                autoplay: true,
                autoplaySpeed: 3000
            });

            $('#partners .partners__slider').slick({
                dots: false,
                arrows: true,
                slidesToShow: 7,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5,
                        }
                    }, {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        }
                    }, {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            });

            $('#insights .insights__slider').slick({
                dots: false,
                arrows: true,
                slidesToShow: 3,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        }
                    }, {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });

            $('#page-title .page-title__slider').slick({
                dots: false,
                arrows: false,
                fade: true,
                autoplay: true,
                autoplaySpeed: 3000
            });
        }
        
        site_init();
    });
})(jQuery);
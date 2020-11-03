(function($) {
    $(document).ready( function() {
        function site_init() {
            $('#site-header button.toogle-menu').on('click', function(e) {
                $(this).toggleClass('active');
                $('#megamenu').toggleClass('show');
            });

            $('#megamenu button.toggle-submenu').on('click', function(e) {
                $(this).toggleClass('active').siblings('ul.sub-menu').toggle();
            });
        }

        site_init();

        function slick_init() {
            $('#welcome .slideshow').slick({
                dots: false,
                arrows: false,
                fade: true,
                autoplay: true,
                autoplaySpeed: 5000,
                infinite: true
            });

            $('.classes-slider').slick({
                dots: false,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3
                        }
                    }, {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2
                        }
                    }, {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });

            $('.team-slider').slick({
                dots: false,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false
            });
        }

        slick_init();
    });
})(jQuery);
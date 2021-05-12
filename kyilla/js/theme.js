(function($) {
    $(document).ready( function() {
        function site_init() {
            $('div.news_slider').slick({
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: false,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            variableWidth: true
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            variableWidth: true
                        }
                    }
                ]
            });
        }
        
        site_init();

        function header_init() {
            var megamenu_init = function() {
                var window_width = $(window).width();

                $('div.megamenu').css({
                    width: window_width + 'px'
                });
            }

            megamenu_init();

            $(window).resize( function() {
                megamenu_init();
            });

            $('#header').sticky({
                topSpacing: 0,
                zIndex: 200
            });

            $('#header .header__primary button.toggle-menu, #sidemenu button.close').on('click', function(e) {
                if( $('#sidemenu').hasClass('show') ) {
                    $('#sidemenu').removeClass('show');
                    $('#header').fadeIn(400);
                } else {
                    $('#sidemenu').addClass('show');
                    $('#header').fadeOut(400);
                }
                
                e.preventDefault();
            });

            $('#sidemenu ul.menu.menu-primary > li.menu-item-has-children > a').on('click', function(e) {
                $(this).parent().toggleClass('active');
                $(this).siblings('ul.sub-menu').toggle();
            });
        }

        header_init();

        function welcome_section() {
            var set_height = function() {
                var window_height = $(window).height(),
                    header_height = $('#header').outerHeight();
                    bar_height = $('#welcome .welcome__bar').outerHeight();
                    height = window_height - header_height - bar_height;

                $('#welcome .welcome__primary').css({
                    height: height + 'px'
                });
            }

            $(window).resize( function(e) {
                set_height();
            });

            set_height();

            $('div.welcome__slideshow').slick({
                dots: false,
                arrows: false,
                fade: true
            });
        }

        if( $('#welcome').length ) {
            welcome_section();
        }
    });
})(jQuery);
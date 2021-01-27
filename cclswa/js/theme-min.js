(function($) {
    $(document).ready( function() {
        function site_init() {
            $('#site-menu ul.menu li button.toggle').on('click', function(e) {
                $(this).toggleClass('active').siblings('ul.sub-menu').toggle();
            });

            $('ul.feature-list .title').on('click', function(e) {
                var content = $(this).parent().find('div.content');
                
                if( content.length ) {
                    content.toggleClass('show');
                }

                e.preventDefault();
            });
        }

        site_init();

        function sidebar_init() {
            var set_width = function() {
                var window_width = $(window).width(),
                    container_width = $('.content-sidebar > div.container').outerWidth(),
                    sidebar_width = $('.content-sidebar > div.sidebar').outerWidth(),
                    margin = sidebar_width - ((window_width - container_width) / 2) + 60;

                $('.content-sidebar > div.container').css({
                    paddingRight: margin + 'px'
                });
            }

            set_width();

            $(window).resize( function() {
                set_width();
            });
        }

        sidebar_init();

        function slick_slider() {
            $('#welcome .slideshow').slick({
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
                dots: false,
                fade: true
            });

            $('div.testimonial-slider').slick({
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: true,
                dots: false,
                fade: true
            });
        }

        slick_slider();
    });
})(jQuery);
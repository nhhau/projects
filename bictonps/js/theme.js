(function($) {
    $(document).ready( function() {
        function site_init() {
        }
        
        site_init();

        function sidebar_init() {
            var set_width = function() {
                var window_width = $(window).width(),
                    content_width = $('.content-sidebar > div.content').outerWidth(),
                    sidebar_width = $('.content-sidebar > div.sidebar').outerWidth(),
                    margin = sidebar_width - ((window_width - content_width) / 2) + 60;

                if( margin < 15 ) {
                    margin = 15;
                }

                $('.content-sidebar > div.content').css({
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
                dots: true,
                fade: true
            });
        }

        slick_slider();
    });
})(jQuery);
(function($) {
    $(document).ready( function() {
        function header_init() {
            var scroll_pos = $(window).scrollTop(),
                header_height = $('#site-header').outerHeight();

            if( $('#welcome').length ) {
                welcome_height = $('#welcome').outerHeight();
                header_height = welcome_height - header_height;
            }

            if( scroll_pos > header_height ) {
                $('#site-header').sticky({
                    topSpacing: 0,
                    zIndex: 200
                });
            } else {
                $('#site-header').unstick();
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
                fade: true
            });
        }
        
        site_init();
    });
})(jQuery);
(function($) {
    $(document).ready( function() {
        function header_init() {
            var scrollPos = $(window).scrollTop(),
                headerHeight = $('#header').outerHeight();

            if( scrollPos > headerHeight ) {
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

            $('#menu').on('show.bs.collapse', function() {
                $('#header').addClass('show-menu');
            });

            $('#menu').on('hidden.bs.collapse', function() {
                $('#header').removeClass('show-menu');
            });

            header_init();

            $(window).scroll( function() {
                header_init();
            });
        }
        
        site_init();
    });
})(jQuery);
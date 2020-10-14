(function($) {
    $(document).ready( function() {
        function site_init() {
            $('#site-menu button.toggle').on('click', function(e) {
                $(this).toggleClass('active').siblings('ul.sub-menu').toggle();
            });

            $('#site-header button.toggle-search').on('click', function(e) {
                $('#site-header').toggleClass('show-search');
                
                setTimeout( function() {
                    $('#site-header .search form input[type="search"]').focus();
                }, 300);
            });
        }

        site_init();

        function slick_init() {
        }

        slick_init();
    });
})(jQuery);
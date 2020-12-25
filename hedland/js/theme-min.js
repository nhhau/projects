(function($) {
    $(document).ready( function() {
        function site_init() {
            $('#site-menu ul.menu li button.toggle').on('click', function(e) {
                $(this).toggleClass('active').siblings('ul.sub-menu').toggle();
            });
        }

        site_init();
    });
})(jQuery);

(function($) {
    $(document).ready( function() {
        function site_init() {
            $('#menu button.toggle-submenu').on('click', function(e) {
                $(this).toggleClass('active').siblings('ul.sub-menu').toggle();
                e.preventDefault();
            });

            $('.post-item .title a, .post-item .dots-more').hover( function(e) {
                $(this).parents('.post-item').addClass('on-hover');
            }, function() {
                $(this).parents('.post-item').removeClass('on-hover');
            });
        }
        
        site_init();
    });
})(jQuery);
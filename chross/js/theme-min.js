(function($) {
    $(document).ready( function() {
        function site_init() {
            $('#site-header .main').sticky({
                topSpacing: 0,
                zIndex: 200
            });
        }
        
        site_init();
    });
})(jQuery);
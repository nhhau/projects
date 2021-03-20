(function($) {
    $(document).ready( function() {
        function site_init() {
            $('section a').click( function(e) {
                var target = $(this).attr('href');
                var check_url = target.match(/#([^\/]+)$/i);

                if( check_url[0] ) {
                    var go_position = $(target).offset().top - 0;

                    $('html,body').animate({
                        scrollTop: go_position
                    }, 400);
                    
                    e.preventDefault();
                }
            });
        }
        
        site_init();
    });
})(jQuery);
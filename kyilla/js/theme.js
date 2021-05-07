(function($) {
    $(document).ready( function() {
        function header_init() {
            var scroll_pos = $(window).scrollTop(),
                header_height = $('#header').outerHeight();

            if( $('#welcome').length ) {
                welcome_height = $('#welcome').outerHeight();
                header_height = welcome_height - header_height;
            }

            if( scroll_pos > header_height ) {
                $('#header').sticky({
                    topSpacing: 0,
                    zIndex: 200
                });
            } else {
                $('#header').unstick();
            }
        }

        function site_init() {
            header_init();
            
            $(window).scroll( function() {
                header_init();
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
        
        site_init();
    });
})(jQuery);
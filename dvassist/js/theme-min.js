(function($) {
    $(document).ready( function() {
        function site() {
            $('.chosen-select').chosen({
                disable_search: true
            });

            $('#site-header .topbar').sticky({
                topSpacing: 0,
                zIndex: 500
            });

            // $('#welcome .welcome__links .main .container > ul.menu li').hover( function(e) {
            //     var target = $(this).find('button').attr('data-target');

            //     if( target ) {
            //         $(target).collapse('toggle');
            //     }
            // }, function(e) {
            //     var target = $(e.target);
                
            //     if( target ) {
            //         var submenu = $(target).parents('div.submenu');

            //         if( !submenu.length ) {
            //             $(target).collapse('toggle');
            //         }
            //     }
            // });

            // $('#welcome div.collapse').hover( function() {
            //     var target = $(this).attr('id');
                
            //     if( target ) {
            //         $('#welcome .welcome__links ul.menu li button[data-target="#' + target + '"]').parent().addClass('active');
            //     }
            // }, function() {
                
            // });
        }
        
        site();

        function megamenu() {
            $('div.toggle-megamenu button, #megamenu button.close').on('click', function(e) {
                $('#megamenu').toggleClass('show');

                e.preventDefault();
            });
            
            $('#megamenu ul.menu > li.menu-item-has-children > a').on( 'click', function(e) {
                $('#megamenu ul.menu > li').removeClass('current-menu-item');
                $('#megamenu ul.sub-menu').removeClass('show');
    
                $(this).parent().addClass('current-menu-item');
                $(this).next('ul.sub-menu').addClass('show');
                
                e.preventDefault();
            });
        }

        megamenu();

        function welcome() {
            $('#welcome .collapse').on('show.bs.collapse', function() {
                var target = $(this).attr('id');

                $('#welcome .welcome__links .main .heading').fadeOut(200);
                $('#welcome .welcome__links ul.menu li button[data-target="#' + target + '"]').parent().addClass('active');
            });

            $('#welcome .collapse').on('hide.bs.collapse', function() {
                $('#welcome .welcome__links .main .heading').fadeIn(200);
                $('#welcome .welcome__links ul.menu li').removeClass('active');
            });
        }

        welcome();
    });
})(jQuery)

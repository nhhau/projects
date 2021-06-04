(function($) {
    $(document).ready( function() {
        function makeMeTwoDigits(n) {
            return (n < 10 ? "0" : "") + n;
        }

        function header_init() {
            var scrollPos = $(window).scrollTop(),
                headerHeight = $('#header').outerHeight();

            if( $('#welcome').length ) {
                headerHeight = $('#welcome').outerHeight();
            }

            if( scrollPos > headerHeight ) {
                $('#header').sticky({
                    topSpacing: 0,
                    zIndex: 300
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

            new bootstrap.ScrollSpy( document.body, {
                target: '#menu'
            });
            
            $('#menu').on('show.bs.collapse', function(e) {
                $('#header').addClass('show-menu');
            });

            $('#menu').on('hidden.bs.collapse', function(e) {
                $('#header').removeClass('show-menu');
            });

            $('ul.menu li a[href*="#"]').click(function(event) {
                if( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                    && location.hostname == this.hostname ) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    
                    if( target.length ) {
                        event.preventDefault();

                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 400);
                    }
                }
            });
        }
        
        site_init();

        function countdown_js() {
            var finalDate = moment.tz("2022-01-04 23:59", "EST");
            
            $('div.countdown-wrap').countdown(finalDate.toDate()).on('update.countdown', function(event) {                
                $('div.countdown-wrap .countdown-item span.seconds').html( makeMeTwoDigits(event.offset.seconds) );
                $('div.countdown-wrap .countdown-item span.minutes').html( makeMeTwoDigits(event.offset.minutes) );
                $('div.countdown-wrap .countdown-item span.hours').html( makeMeTwoDigits(event.offset.hours) );
                $('div.countdown-wrap .countdown-item span.days').html( makeMeTwoDigits(event.offset.totalDays) );
            });
        }

        if( $('div.countdown-wrap').length ) {
            countdown_js();
        }
    });
})(jQuery);
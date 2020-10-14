(function($) {
    $(document).ready( function() {
        function site_init() {
        }

        site_init();

        function section_init() {
            

            $('#menu a[href*="#"]').on('click', function(e) {
                var target = $(this).attr('href'),
                    pos = $(target).offset().top;

                if( $(window).width() < 1440 ) {
                    pos = pos - 77;

                    $('#menu').collapse('hide');
                }

                $('html,body').animate({
                    scrollTop: pos
                }, 300);
                
                e.preventDefault();
            });
        }

        section_init();

        function welcome_section() {
            var slider = $('#welcome .slider');

            slider.on('init', function(event, slick) {
                $('#site-content > section').waypoint( function(direction) {
                    if( direction == 'up' ) {
                        return;
                    }
                    
                    var section_id = this.element.id;
    
                    if( section_id ) {
                        $('nav#menu a').removeClass('active');
                        $('nav#menu a[href="#' + section_id + '"]').addClass('active');
                    }
                }, {
                    offset: '50%'
                });

                $('#site-content > section').waypoint( function(direction) {
                    if( direction == 'down' ) {
                        return;
                    }

                    var section_id = this.element.id;
    
                    if( section_id ) {
                        $('nav#menu a').removeClass('active');
                        $('nav#menu a[href="#' + section_id + '"]').addClass('active');
                    }
                }, {
                    offset: '-50%'
                });
            });

            slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                if( nextSlide == 4 ) {
                    console.log('last slide');
                }
            });
            
            slider.slick({
                autoplay: false,
                dots: false,
                arrows: false,
                infinite: false,
                fade: true,
                speed: 0
            });
            
            // slider.on('mousewheel', function(e) {
            //     if( e.deltaY > 0 ) {
            //         slider.slick('slickPrev');
            //     } else {
            //         slider.slick('slickNext');
            //     }

            //     e.preventDefault();
            //     console.log(e.deltaX, e.deltaY, e.deltaFactor);
            // });
        }

        welcome_section();

        function products_section() {
            $('#products div.item .title > span, #products div.item a.toggle').on('click', function(e) {
                $('#products div.item').removeClass('active');
                $(this).parents('div.item').addClass('active');
                e.preventDefault();
            });

            $('#products div.item button.close').on('click', function(e) {
                $('#products div.item').removeClass('active');
                e.preventDefault();
            });
        }

        products_section();
    });
})(jQuery);
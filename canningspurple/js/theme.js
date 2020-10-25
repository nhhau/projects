(function($) {
    $(document).ready( function() {
        function site_init() {
            $('#site-header button.toggle-search').on('click', function(e) {
                $('#site-header').toggleClass('show-search');

                setTimeout( function() {
                    $('#site-header .search form input[type=search]').focus();
                }, 300);
            });
        }

        site_init();

        function megamenu() {
            var set_width = function() {
                var container_width = $('#site-header>div.container').width(),
                    window_width = $(window).width(),
                    margin = (window_width - container_width) / 2;

                $('#site-menu div.mega-menu.lv-1').css({
                    left: '-' + margin + 'px',
                    right: '-' + margin + 'px'
                })
            }

            set_width();

            $(window).resize( function() {
                set_width();
            });
        }

        megamenu();

        function slick_init() {
            $('#welcome div.slider').slick({
                dots: true,
                arrows: false,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });

            $('section.section-slider.slider-right div.slider').slick({
                dots: true,
                arrows: true,
                variableWidth: true
            });

            $('section.section-slider.slider-left div.slider').slick({
                dots: true,
                arrows: true,
                variableWidth: true,
                rtl: true
            });
        }

        slick_init();

        function section_slider() {
            var set_width =  function() {
                var window_width = $(window).width(),
                    container_width = $('section.section-slider > div.section-inner > div.container').width(),
                    margin = (window_width - container_width) / 2;

                $('section.section-slider.slider-right div.background').css({
                    right: '-' + margin + 'px'
                });

                $('section.section-slider.slider-left div.background').css({
                    left: '-' + margin + 'px'
                });
            }

            $(window).resize( function() {
                set_width();
            });

            set_width();
        }

        section_slider();
    });
})(jQuery);
(function($) {
    $(document).ready( function() {
        function site_init() {
            var button_primary = function() {
                $('.button-primary').each( function(i, item) {
                    var span_ele = $(item).find('span');

                    if( span_ele.length ) {
                        var width = span_ele.outerWidth();

                        span_ele.css({
                            width: (width+2) + 'px'
                        });
                    }
                });
            }

            button_primary();

            $(window).resize( function() {
            });
        }
        
        site_init();

        function fullscreen_menu() {
            $('#header .toggle-menu').on('click', function(e) {
                $('#fullscreen-menu').addClass('show');
                $('body').addClass('show-menu');

                e.preventDefault();
            });

            $('#fullscreen-menu .fullscreen-menu__main ul.menu > li.menu-item-has-children > a').on('click', function(e) {
                $(this).parents('ul').addClass('onclick').children('li').removeClass('active');
                $(this).parent().addClass('active');

                e.preventDefault();
            });

            $('#fullscreen-menu .fullscreen-menu__top button.close').on('click', function(e) {
                $('#fullscreen-menu').removeClass('show');
                $('body').removeClass('show-menu');

                $('#fullscreen-menu .fullscreen-menu__main ul.menu').removeClass('onclick');
                $('#fullscreen-menu .fullscreen-menu__main ul.menu > li').removeClass('active');

                e.preventDefault();
            });
        }

        if( $('#fullscreen-menu').length ) {
            fullscreen_menu();
        }

        function section_logo_collections() {
            var $slider = $('div.logo-collections__slider').slick({
                dots: false,
                arrows: true,
                autoplay: false,
                adaptiveHeight: true
            });

            $('div.logo-collections__grid div.item').each( function(i, item) {
                var slide = $(item).clone();

                $slider.slick( 'slickAdd', slide );
            });
        }
        
        if( $('#logo-collections').length ) {
            section_logo_collections();
        }

        function section_testimonials() {
            $('div.testimonials__slider').slick({
                arrows: false,
                dots: false,
                fade: true,
                autoplay: true,
                autoplaySpeed: 3000
            });
        }
        
        if( $('#testimonials').length ) {
            section_testimonials();
        }

        function case_study_section() {
            $('.case-study__slider').slick({
                arrows: true,
                dots: true,
                autoplay: false,
                infinite: false,
                fade: true,
                dotsClass: 'slick-dots container',
                customPaging: function(slider, i) { 
                    return '<button>' + $(slider.$slides[i]).attr('data-title') + '</button>';
                },
            });

            $('.case-study__slider').on( 'beforeChange', function(event, slick, currentSlide, nextSlide) {
                var style = $('.case-study__slider .slick-slide[data-slick-index="' + nextSlide + '"]').attr('data-style');

                if( style ) {
                    $('.case-study__slider').removeClass('light dark').addClass(style);
                }

                var go_position = $('#case-study').offset().top;
                $('html,body').animate({
                    scrollTop: go_position
                }, 400);
            });
        }
        
        if( $('#case-study').length ) {
            case_study_section();
        }

        function cs_main_section() {
            var set_width = function() {
                var window_width = $(window).width(),
                    container_width = $('#cs-main div.container').outerWidth(),
                    margin = (window_width - container_width) / 2;

                $('#cs-main .cs-main__nav').css({
                    left: '-' + margin + 'px'
                });
            }

            set_width();

            $(window).resize( function() {
                set_width();
            });

            $('#cs-main .cs-main__nav button.toggle').click( function(e) {
                $('#cs-main .cs-main__nav').toggleClass('show');
                e.preventDefault();
            });
        }

        if( $('#cs-main').length ) {
            cs_main_section();
        }

        function cs_extra_section() {
            $('.cs-extra__slider').slick({
                autoplay: false,
                arrows: false,
                dots: false,
                variableWidth: true,
                infinite: false,
                draggable: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                        }
                    }
                ]
            });
        }

        if( $('#cs-extra').length ) {
            cs_extra_section();
        }
    });
})(jQuery);
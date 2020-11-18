(function($) {
    $(document).ready( function() {
        function site_init() {
            $('#site-header button.toggle-search').on('click', function(e) {
                $('#site-header').toggleClass('show-search');

                setTimeout( function() {
                    $('#site-header .search form input[type=search]').focus();
                }, 300);
            });

            $('.video-popup, .play-video').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade mfp-video',
                removalDelay: 160,
                preloader: false,
                disableOn: 480,
                fixedContentPos: false,
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: 'v=',
                            src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
                        }
                    },
                    srcAction: 'iframe_src',
                }
            });
        }

        site_init();

        function megamenu() {
            var set_width = function() {
                var container_width = $('#site-header>div.container').width(),
                    window_width = $(window).width(),
                    margin = (window_width - container_width) / 2;
                
                if( $(window).width() >= 992 ) {
                    $('#site-menu div.mega-menu.lv-1').css({
                        left: '-' + margin + 'px',
                        right: '-' + margin + 'px'
                    });
                } else {
                    $('#site-menu div.mega-menu.lv-1, #site-menu div.mega-menu.lv-2').css({
                        left: 'auto',
                        right: 'auto'
                    });
                }
            }

            set_width();

            $(window).resize( function() {
                set_width();
            });

            $('#site-menu').on('show.bs.collapse', function() {
                $('#site-header').addClass('show-menu');
            });

            $('#site-menu').on('hide.bs.collapse', function() {
                $('#site-header').removeClass('show-menu');
            });

            $('#site-menu div.mega-menu.lv-1 > div > ul > li').hover( function() {
                var mega_menu = $(this).find('div.mega-menu');

                $('#site-menu div.mega-menu.lv-1 ul li').removeClass('active');

                if( mega_menu.length ) {
                    mega_menu.parent().addClass('active');
                }
            });

            $('#site-menu ul.menu li button.toggle').on('click', function(e) {
                $(this).toggleClass('active').siblings('div.mega-menu').toggle();
                e.preventDefault();
            });
        }

        megamenu();

        function slick_init() {
            $('#welcome div.slider').slick({
                dots: true,
                arrows: false,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            adaptiveHeight: true
                        }
                    }
                ]
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
                    container_width = $('section.section-slider > div.section-inner > div.container').outerWidth(),
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
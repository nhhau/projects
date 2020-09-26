(function($) {
    $(document).ready( function() {
        var arrow_svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 12H3M14 5L21 12L14 5ZM21 12L14 19L21 12Z" stroke="#212529" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        
        function site_init() {
            $('.video-popup, .toggle-video').magnificPopup({
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

        function header_init() {
            var header_sticky = function() {
                var allow_sticky = false,
                    is_sticky = false,
                    space = $('#site-header').outerHeight(),
                    current_pos = $(window).scrollTop();

                if( $('#welcome').length ) {
                    space = $('#welcome').outerHeight();
                }

                if( $('#site-header-sticky-wrapper').length ) {
                    is_sticky = true;
                }
                
                if( current_pos > space ) {
                    allow_sticky = true;
                } else {
                    allow_sticky = false;
                }

                if( allow_sticky ) {
                    if( !is_sticky ) {
                        $('#site-header').sticky({
                            topSpacing: 0,
                            zIndex: 200
                        });
                    }
                } else {
                    $('#site-header').unstick();
                }
            }

            header_sticky();

            $(window).scroll( function() {
                header_sticky();
            });

            $('#menu').on('show.bs.collapse', function() {
                $('#site-header').addClass('open-menu');
            });
            
            $('#menu').on('hidden.bs.collapse', function() {
                $('#site-header').removeClass('open-menu');
            });
        }

        header_init();

        function slick_init() {
            function slick_eq_height(){
                $('div.slick-eq-height').each( function() {
                    var $slickSlider = $(this);
                    $slickSlider.find('.slick-slide').height('auto');
             
                    var slickTrack = $slickSlider.find('.slick-track');
                    var slickTrackHeight = $(slickTrack).height();
                    
                    $slickSlider.find('.slick-slide').css('height', slickTrackHeight + 'px');
                });
            }

            $('div.slick-eq-height').on('setPosition', function() {
                slick_eq_height();
            });
            
            $(window).on('resize', function(e) {
                slick_eq_height();
            });

            $('div.post-slider').slick({
                dots: false,
                arrows: true,
                variableWidth: true,
                prevArrow: '<button type="button" class="slick-prev">' + arrow_svg + '</button>',
                nextArrow: '<button type="button" class="slick-next">' + arrow_svg + '</button>',
                centerMode: true,
                infinite: true
            });

            $('div.logo-slider').slick({
                dots: false,
                arrows: false,
                variableWidth: true,
                centerMode: true,
                infinite: true,
                autoplay: true
            });
        }

        slick_init();

        function sections_init() {
            var pad = function(str, max) {
                str = $.trim( str.toString() );
                
                return str.length < max ? pad("0" + str, max) : str;
            }

            $('#site-content > section').each( function() {
                var $section = $(this),
                    $id = $section.attr('id');

                console.log( $id );

                if( $id ) {
                    $section.waypoint({
                        handler: function(direction) {
                            heading_inview( $section );

                            if( $id == 'statis' ) {
                                statis_inview();
                            } else if( $id == 'about' ) {
                                about_inview();
                            }
    
                            this.destroy();
                        },
                        offset: '75%'
                    });
                }
            });

            var heading_inview = function( section ) {
                var heading = section.find('div.heading');

                if( heading ) {
                    anime({
                        targets: heading[0],
                        opacity: '1',
                        duration: 1000,
                        easing: 'linear'
                    });
                }
            }

            var statis_inview = function() {
                $('#statis div.item').each( function($i) {
                    var $item = $(this),
                        $number = $item.find('span.number'),
                        delay = 300 * ($i+1);

                    anime({
                        targets: $item[0],
                        opacity: '1',
                        delay: delay,
                        easing: 'linear',
                        begin: function( anim ) {
                            if( $number ) {
                                var number_from = $number.attr('data-from'),
                                    number_to = $number.attr('data-to'),
                                    number_obj = { prop1: number_from };

                                anime({
                                    targets: number_obj,
                                    prop1: number_to,
                                    easing: 'linear',
                                    round: 1,
                                    delay: 100,
                                    duration: 2000,
                                    update: function() {
                                        $number.html( pad( number_obj.prop1, 2 ) );
                                    }
                                });
                            }
                        }
                    });
                });
            }

            var about_inview = function() {
                var about_text = $('#about div.about-text');

                anime({
                    targets: about_text[0],
                    keyframes: [
                        {
                            opacity: 0,
                            translateY: '50%'
                        }, {
                            opacity: 1,
                            translateY: '0'
                        }
                    ],
                    duration: 1000,
                    easing: 'linear'
                });
            }
        }

        sections_init();

        function services_section() {
            var isPause,
                tick,
                percentTime;
            var time = 2;
            var accordion = $('#services div.accordion');
            var collapse = $('#services div.collapse');
            var slideshow = $('#services div.slideshow');

            slideshow.slick({
                dots: false,
                arrows: false,
                fade: true,
                variableWidth: false,
                infinite: false,
                autoplay: false,
                speed: 300,
                swipe: false,
                touchMove: false
            });

            collapse.each( function(index) {
                var $this = $(this);

                $this.on('show.bs.collapse', function() {
                    resetProgressbar();
                    accordion.find('div.card').removeClass('active');
                    $this.parents('div.card').addClass('active');
                    slideshow.slick( 'slickGoTo', index );
                    startProgressbar();
                });
            });

            accordion.on({
                mouseenter: function() {
                    isPause = true;
                },
                mouseleave: function() {
                    isPause = false;
                }
            });

            function startProgressbar() {
                resetProgressbar();
                percentTime = 0;
                isPause = false;
                tick = setInterval(interval, 20);
            }
            
            function interval() {
                if( isPause === false ) {
                    percentTime += 1 / (time+0.1);

                    accordion.find('.active span.progress').css({
                        width: percentTime+"%"
                    });

                    if( percentTime >= 100 ) {
                        var next_collapse = accordion.find('.card.active').next().find('div.collapse');

                        if( !next_collapse.length ) {
                            next_collapse = accordion.find('.card:first-child div.collapse');
                        }

                        next_collapse.collapse('toggle');
                        startProgressbar();
                    }
                }
            }
            
            function resetProgressbar() {
                accordion.find('span.progress').css({
                    width: 0+'%' 
                });

                clearTimeout(tick);
            }
            
            startProgressbar();
        }

        services_section();

        function planes_animation() {
            $('div.plane').each( function() {
                var $this = $(this);
                var $path_solid = $this.find('svg path.solid-line');
                var $path_dashed = $this.find('svg path.dashed-line');
                var $plane = $this.find('img');
                var $duration = 1000;

                if( $this.hasClass('plane-1') ) {
                    $duration = 2000
                }

                if( $path_solid.length && $path_dashed.length && $plane.length ) {
                    var plane_path = anime.path( $path_solid[0] );
                    var path_anime = anime({
                        targets: $path_solid[0],
                        strokeDashoffset: [anime.setDashoffset, 0],
                        easing: 'linear',
                        duration: $duration,
                        delay: 0,
                        direction: 'alternate',
                        autoplay: false,
                        loop: false
                    });
                    var plane_anime = anime.timeline({
                        delay: 0,
                        duration: $duration,
                        loop: false,
                        easing: 'linear'
                    });
                    
                    $this.waypoint({
                        handler: function(direction) {
                            var keyframes = [
                                {
                                    opacity: 0
                                }, {
                                    opacity: 1
                                }
                            ];

                            if( $this.hasClass('plane-1') ) {
                                keyframes = [
                                    {
                                        opacity: 0,
                                        left: '-51px'
                                    }, {
                                        opacity: 1,
                                        left: '-25.5px'
                                    }
                                ];
                            }

                            plane_anime.add({
                                targets: $plane[0],
                                duration: 300,
                                keyframes: keyframes
                            }).add({
                                targets: $plane[0],
                                translateX: plane_path('x'),
                                translateY: plane_path('y'),
                                rotate: plane_path('angle'),
                                begin: function( anim ) {
                                    path_anime.play();
                                }
                            });

                            this.destroy();
                        },
                        offset: '82%'
                    });
                }
            });
        }

        planes_animation();
    });
})(jQuery);

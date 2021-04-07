(function($) {
    $(document).ready( function() {
        function header_init() {
            var scroll_pos = $(window).scrollTop(),
                header_height = $('#site-header').outerHeight();

            if( $('#welcome').length ) {
                welcome_height = $('#welcome').outerHeight();
                header_height = welcome_height - header_height;
            }

            if( scroll_pos > header_height ) {
                $('#site-header').sticky({
                    topSpacing: 0,
                    zIndex: 200
                });
            } else {
                $('#site-header').unstick();
            }
        }

        function site_init() {
            $('#site-menu').on('show.bs.collapse', function () {
                $('#site-header').addClass('open-menu');
            });

            $('#site-menu').on('hidden.bs.collapse', function () {
                $('#site-header').removeClass('open-menu');
            });

            header_init();

            $(window).scroll( function() {
                header_init();
            });
        }
        
        site_init();

        function welcome_section() {
            var isPause,
                tick,
                percentTime;
            var time = 2;
            var slider = $('#welcome .welcome__slider');

            slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                resetProgressbar();
                
                $('#welcome .welcome__progress li').removeClass('active');
                $('#welcome .welcome__progress li:eq(' +nextSlide+ ')').addClass('active');

                startProgressbar();
            });

            slider.slick({
                dots: false,
                arrows: false,
                fade: true,
                autoplay: false,
                draggable: false,
                swipe: false,
                touchMove: false
            });

            $('#welcome').on({
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
                    $('#welcome .welcome__progress li.active span.progress-bar').css({
                        width: percentTime+"%"
                    });

                    if( percentTime >= 100 ) {
                        slider.slick('slickNext');
                        startProgressbar();
                    }
                }
            }
            
            function resetProgressbar() {
                $('#welcome .welcome__progress li.active span.progress-bar').css({
                    width: 0+'%' 
                });

                clearTimeout(tick);
            }
            
            startProgressbar();
        }

        if( $('#welcome').length ) {
            welcome_section();
        }

        function animate_init() {
            // welcome section
            $('#welcome .welcome__text h1').css( 'opacity', 0 );
            $('#welcome .welcome__text ul.menu li').css( 'opacity', 0 );

            $('#welcome').waypoint( function() {
                $('#welcome .welcome__text h1').addClass('animate__animated animate__fadeIn');
                $('#welcome .welcome__text ul.menu li').addClass('animate__animated animate__fadeIn');

                this.destroy();
            }, {
                offset: '75%'
            });

            // features section
            $('#features h2').css( 'opacity', 0 );
            $('#features .feature-item').css( 'opacity', 0 );

            $('#features').waypoint( function() {
                $('#features h2').addClass('animate__animated animate__fadeInDown');
                $('#features .feature-item').addClass('animate__animated animate__fadeIn');

                this.destroy();
            }, {
                offset: '75%'
            });

            // how-works section
            $('#how-works .how-works__heading').css( 'opacity', 0 );
            $('#chainpay-flow .chainpay-flow__item').css( 'opacity', 0 );

            $('#how-works').waypoint( function() {
                $('#how-works .how-works__heading').addClass('animate__animated animate__fadeIn');
                $('#chainpay-flow .chainpay-flow__item').addClass('animate__animated animate__fadeIn');

                this.destroy();
            }, {
                offset: '75%'
            });

            $('#how-works').waypoint( function() {
                $('#chainpay-flow .chainpay-flow--chainpay img').addClass('animate__animated animate__tada');

                this.destroy();
            }, {
                offset: '25%'
            });

            // integrated-platforms section
            $('#integrated-platforms').waypoint( function() {
                $('#integrated-platforms ul.platforms li').addClass('animate__animated animate__zoomIn');

                this.destroy();
            }, {
                offset: '75%'
            });

            // introduce section
            $('#introduce .introduce__text').css( 'opacity', 0 );
            $('#introduce .introduce__photo img').css( 'opacity', 0 );

            $('#introduce').waypoint( function() {
                $('#introduce .introduce__text').addClass('animate__animated animate__fadeIn');
                $('#introduce .introduce__photo img').addClass('animate__animated animate__fadeIn');

                this.destroy();
            }, {
                offset: '75%'
            });

            // support-crypto section
            $('#support-crypto ul.menu li').css( 'opacity', 0 );
            
            $('#support-crypto').waypoint( function() {
                $('#support-crypto ul.menu li').addClass('animate__animated animate__fadeIn');

                this.destroy();
            }, {
                offset: '75%'
            });
        }

        animate_init();
    });
})(jQuery);
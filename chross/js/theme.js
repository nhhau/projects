(function($) {
    $(document).ready( function() {
        function slickEqualHeight(){
            $slickSlider = $('.slider-equal-height');
            $slickSlider.find('.slick-slide').height('auto');
            
            var slickTrack = $slickSlider.find('.slick-track');
            var slickTrackHeight = $(slickTrack).height();
         
            $slickSlider.find('.slick-slide').css('height', slickTrackHeight + 'px');

            var windowWidth = $(window).width();
            var dotsWidth = $slickSlider.find('ul.slick-dots').outerWidth();

            $('#testimonials .testimonial-slider button.slick-arrow.slick-prev').css({
                right: (dotsWidth - 17) + 'px'
            });
        }
        
        function site_init() {
            $('#site-header .main').sticky({
                topSpacing: 0,
                zIndex: 200
            });

            $('.video-popup').magnificPopup({
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

            $(window).on('resize', function(e) {
                slickEqualHeight();
            });
        }
        
        site_init();

        function header_init() {
            
        }

        header_init();

        function welcome_section() {
            $('#welcome .welcome__slider').slick({
                dots: false,
                arrows: false,
                fade: true
            });

            $('#welcome .welcome__video').on('click', function(e) {
                var video_url = $(this).attr('data-video');
                
                if( video_url ) {
                    $.magnificPopup.open({
                        items: {
                            src: video_url
                        },
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
                    }, 0);
                }

                e.preventDefault();
            });

            $('#welcome .welcome__scroll a').click( function(e) {
                var pos = $('#expertise').offset().top;

                $('html,body').animate({
                    scrollTop: pos
                }, 400);
                
                e.preventDefault();
            });
        }

        if( $('#welcome').length ) {
            welcome_section();
        }

        function team_section() {
            var set_width =  function() {
                var windowWidth = $(window).width(),
                    containerWidth = $('#expertise div.container').width(),
                    boxTwoHeight = $('#expertise .expertise-box.expertise-box--two').outerHeight(),
                    twoPhotoHeight = $('#expertise .expertise-section--two .col-md-6 .row').outerHeight(),
                    margin = (windowWidth - containerWidth) / 2;

                if( windowWidth <= 768 ) {
                    $('#expertise .expertise-section--two .col-md-6 .row').css({
                        marginLeft: '-' + margin + 'px',
                        marginRight: '-' + margin + 'px',
                    });

                    $('#expertise .expertise-photo.expertise-photo--one').css({
                        left: margin + 'px',
                        bottom: boxTwoHeight + 'px'
                    });

                    $('#expertise .expertise-photo.expertise-photo--two').css({
                        top: '-' + boxTwoHeight + 'px',
                        bottom: twoPhotoHeight + 'px'
                    });
                } else {
                    $('#expertise .expertise-section--two .col-md-6 .row').css({
                        marginLeft: 0,
                        marginRight: 0
                    });

                    $('#expertise .expertise-photo.expertise-photo--one').css({
                        left: '50%'
                    });

                    $('#expertise .expertise-photo.expertise-photo--two').css({
                        top: 0,
                        bottom: 0
                    });
                }
            }

            set_width();

            $(window).resize( function() {
                set_width();
            })

            $('div.team-slider').slick({
                dots: false,
                arrows: false,
                fade: true,
                autoplay: false,
                draggable: false,
                swipe: false,
                touchMove: false
            });

            $('#team .team-details .team-details__toggle').on('click', function(e) {
                var parent = $(this).parent(),
                    details_text = parent.find('.team-details__text');

                if( parent.hasClass('team-details--chris') ) {
                    $('div.team-slider').slick('slickGoTo', 1);
                } else if( parent.hasClass('team-details--oscar') ) {
                    $('div.team-slider').slick('slickGoTo', 2);
                }

                if( details_text && $(window).width() < 992 ) {
                    $('#team-modal .team-details').html( parent.html() );

                    setTimeout( function() {
                        $('#team-modal').modal('toggle');
                    }, 600);
                } else {
                    $('#team .team-details .team-details__item').removeClass('active');
                    parent.addClass('active');
                }

                e.preventDefault();
            });

            $('#team-modal').on('hide.bs.modal', function(e) {
                $('#team .team-details .team-details__item').removeClass('active');
                $('div.team-slider').slick('slickGoTo', 0);
            });
        }

        if( $('#team').length ) {
            team_section();
        }

        function testimonials_section() {
            $('div.testimonial-slider').slick({
                dots: true,
                arrows: true,
                fade: true,
                autoplay: true
            });

            $('div.testimonial-slider').on('setPosition', function() {
                slickEqualHeight();
            });
        }

        if( $('#testimonials').length ) {
            testimonials_section();
        }
    });
})(jQuery);
(function($) {
    $(document).ready( function() {
        function site_init() {

        }

        site_init();

        function slick_slider() {
            $('#news .logo-slider .slider').slick({
                dots: false,
                arrows: false,
                fade: false,
                variableWidth: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
            });
        }

        slick_slider();

        function vehicle_slider() {
            var isPause,
                tick,
                percentTime;
            var time = 2;
            var secondary_slider = $('#vehicle .secondary-slider');

            function set_margin() {
                var window_width = $(window).width(),
                    container_width = $('#vehicle > div.container').width(),
                    margin = ( window_width - container_width ) / 2;

                $('#vehicle .secondary-slider div.col-image').css({
                    marginRight: '-' + margin + 'px',
                });
            }

            secondary_slider.on('init', function(event, slick, direction) {
                set_margin();
                
                if( !$('#vehicle .secondary-slider .progress').length ) {
                    $('#vehicle .secondary-slider').append( '<div class="progress"><span></span></div>' );
                }
            });

            secondary_slider.slick({
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                draggable: false,
                asNavFor: '#vehicle .primary-slider'
            });

            function startProgressbar() {
                resetProgressbar();
                percentTime = 0;
                isPause = false;
                tick = setInterval(interval, 40);
            }
            
            function interval() {
                if( isPause === false ) {
                    percentTime += 1 / (time+0.1);
                    var new_percentTime = percentTime.toFixed(0);
                    var slide_count = secondary_slider.slick('getSlick').slideCount;

                    $('#vehicle .secondary-slider .progress > span').css({
                        width: percentTime+"%"
                    });

                    var point = 100 / parseFloat( slide_count );
                    var new_point = point.toFixed(0);
                    
                    for( var $i = 1; $i <= slide_count; $i++ ) {
                        if( new_percentTime == ( new_point * $i ) ) {
                            secondary_slider.slick('slickNext');
                        }
                    }
                    
                    if( percentTime >= 100 ) {
                        // secondary_slider.slick('slickNext');
                        startProgressbar();
                    }
                }
            }
            
            function resetProgressbar() {
                $('#vehicle .secondary-slider .progress > span').css({
                    width: 0+'%' 
                });

                clearTimeout(tick);
            }

            startProgressbar();

            $('#vehicle').on({
                mouseenter: function() {
                    isPause = true;
                },
                mouseleave: function() {
                    isPause = false;
                }
            });
            
            $('#vehicle .primary-slider').slick({
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                focusOnSelect: true,
                infinite: false,
                draggable: false,
                speed: 1000,
                asNavFor: '#vehicle .secondary-slider'
            });

            $('#vehicle .image-slider').slick({
                autoplay: false,
                arrows: true,
                dots: true,
            });

            $(window).resize( function() {
                set_margin();
            });
        }

        vehicle_slider();

        function technologies_section() {
            function set_margin() {
                var window_width = $(window).width(),
                    container_width = $('#technologies > div.container').width(),
                    margin = ( window_width - container_width ) / 2;

                $('#technologies div.col-image').css({
                    marginLeft: '-' + margin + 'px',
                    paddingLeft: margin + 'px',
                });
            }

            $(window).resize( function() {
                set_margin();
            });

            set_margin();
        }

        technologies_section();
    });
})(jQuery);

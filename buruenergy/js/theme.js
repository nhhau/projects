(function($) {
    $(document).ready( function() {
        function header_init() {
            var scrollPos = $(window).scrollTop(),
                headerHeight = $('#site-header').outerHeight();

            if( scrollPos > headerHeight ) {
                $('#site-header').sticky({
                    topSpacing: 0,
                    zIndex: 300
                });
            } else {
                $('#site-header').unstick();
            }
        }

        function site_init() {
            header_init();
            
            $(window).scroll( function() {
                header_init();
            });

            $('#side-menu ul.menu li a').click( function(e) {
                var target = $(this).attr('href');
                var check_url = target.match(/#([^\/]+)$/i);

                if( check_url[0] && $(target).length ) {
                    var go_position = $(target).offset().top - 0;

                    $('#side-menu').modal('toggle');
                    
                    $('html,body').animate({
                        scrollTop: go_position
                    }, 400);
                    
                    e.preventDefault();
                }
            });
        }
        
        site_init();

        function animate_init() {
            $('#welcome .welcome__primary img, #welcome .welcome__primary h1, #welcome .welcome__secondary ul.menu > li').css('opacity', 0);
            $('#welcome').waypoint( function() {
                $('#welcome .welcome__primary img').addClass('animate__fadeIn');
                $('#welcome .welcome__primary h1').addClass('animate__fadeInUp');
                $('#welcome .welcome__secondary ul.menu > li').addClass('animate__fadeInUp');

                this.destroy();
            }, {
                offset: '70%'
            });

            $('#ec-letter .row > div').css('opacity', 0);
            $('#ec-letter').waypoint( function() {
                $('#ec-letter .row > div:nth-child(1)').addClass('animate__fadeInLeft');
                $('#ec-letter .row > div:nth-child(2)').addClass('animate__fadeInRight');

                this.destroy();
            }, {
                offset: '70%'
            });

            $('#review-operations .review-operations__text').css('opacity', 0);
            $('#review-operations').waypoint( function() {
                $('#review-operations .review-operations__text').addClass('animate__fadeIn');

                this.destroy();
            }, {
                offset: '70%'
            });

            $('#quick-links .row > div').css('opacity', 0);
            $('#quick-links').waypoint( function() {
                $('#quick-links .row > div').addClass('animate__fadeIn');

                this.destroy();
            }, {
                offset: '70%'
            });

            $('#directors-report .directors-report__photo, #directors-report .directors-report__text').css('opacity', 0);
            $('#directors-report').waypoint( function() {
                $('#directors-report .directors-report__photo').addClass('animate__fadeIn');
                $('#directors-report .directors-report__text').addClass('animate__fadeInLeft');

                this.destroy();
            }, {
                offset: '70%'
            });

            $('#downloads .downloads__list h2, #downloads .downloads__list h3, #downloads .downloads__list ul.menu').css('opacity', 0);
            $('#downloads .downloads__list').waypoint( function() {
                $('#downloads .downloads__list h2').addClass('animate__fadeInDown');
                $('#downloads .downloads__list h3').addClass('animate__fadeIn');
                $('#downloads .downloads__list ul.menu').addClass('animate__fadeInUp');
                
                this.destroy();
            }, {
                offset: '70%'
            });

            $('#site-footer a.logo').css('opacity', 0);
            $('#site-footer').waypoint( function() {
                $('#site-footer a.logo').addClass('animate__fadeIn');

                this.destroy();
            }, {
                offset: 'bottom-in-view'
            });
        }

        animate_init();

        function side_menu() {
            $('#side-menu').modal({
                show: false,
                backdrop: false,
                keyboard: false,
            });

            $('#side-menu').on('show.bs.modal', function(e) {
                if( $('#welcome .welcome__secondary').length && $('#site-header-sticky-wrapper').length == 0 ) {
                    var welcome_secondary_height = $('#welcome .welcome__secondary').outerHeight();

                    $('#side-menu').css({
                        height: 'auto',
                        bottom: welcome_secondary_height + 'px'
                    });
                } else {
                    $('#side-menu').css({
                        height: '100%',
                        bottom: 'auto'
                    });
                }
            });
        }

        side_menu();

        function welcome_section() {
            var set_height = function() {
                var window_height = $(window).height(),
                    secondary_height = $('#welcome .welcome__secondary').outerHeight(),
                    primary_height = window_height - secondary_height;

                $('#welcome .welcome__primary').css({
                    minHeight: primary_height + 'px'
                });
            }

            set_height();

            $(window).resize( function() {
                set_height();
            });
        }

        welcome_section();

        function quick_links_section() {
            var set_height = function() {
                var max_height = 0;

                $('#quick-links .box-link .btn-arrow').each( function() {
                    if( $(this).outerHeight() > max_height ) {
                        max_height = $(this).outerHeight();
                    }
                });

                $('#quick-links .box-link .btn-arrow').css('height', max_height + 'px');
            }

            set_height();

            $(window).resize( function() {
                set_height();
            });
        }

        quick_links_section();

        function directors_report_section() {
            var set_width = function() {
                var window_width = $(window).width(),
                    container_width = $('#directors-report .container').outerWidth(),
                    photo_width = $('#directors-report .directors-report__photo').outerWidth(),
                    photo_height = $('#directors-report .directors-report__photo').outerHeight(),
                    margin = photo_width - ((window_width - container_width) / 2);

                $('#directors-report .container').css({
                    paddingRight: (margin + 100) + 'px'
                });

                $('#directors-report').css({
                    minHeight: (photo_height + 140 + 140) + 'px'
                });
            }

            set_width();
            
            $(window).resize( function() {
                set_width();
            });
        }

        directors_report_section()
    });
})(jQuery);
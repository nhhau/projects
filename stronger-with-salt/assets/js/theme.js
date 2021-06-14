(function($) {
    $(document).ready( function() {
        function siteInit() {
            $('#header').sticky({
                zIndex: 500
            });
        }
        
        siteInit();

        function sectionWelcome() {
            var setWidth = function() {
                var welcomeTextHeight = $('#welcome .welcome__text').outerHeight();

                $('#welcome .welcome__slideshow').css({
                    height: welcomeTextHeight + 'px'
                });
            }

            setWidth();

            $(window).resize( function() {
                setWidth();
            });

            $('div.welcome__slideshow').slick({
                dots: false,
                arrows: false
            });

            new Typed('div.welcome__text .title .title__l2', {
                strings: ['Stronger with salt', 'Here for the community', 'Part of the Pilbara', 'Doing the right thing', 'Proven by the research'],
                typeSpeed: 60,
                startDelay: 10,
                backSpeed: 10,
                showCursor: false,
                loop: true
            });
        }

        if( $('#welcome').length ) {
            sectionWelcome();
        }

        function sectionPostsL1() {
            var setWidth = function() {
                var windowWidth = $(window).width(),
                    containerWidth = $('.posts-l1 div.container').width()
                    margin = (windowWidth - containerWidth - 70) / 2;

                $('.posts-l1 .posts-l1__bg').css({
                    left: margin + 'px'
                });
            }

            var setHeight = function() {
                var introHeight = 0,
                    postHeight = 0;

                $('.posts-l1 .cat-intro').each( function() {
                    if( $(this).height() > introHeight ) {
                        introHeight = $(this).height();
                    }
                });

                $('.posts-l1 .loop-post').each( function() {
                    if( $(this).outerHeight() > postHeight ) {
                        postHeight = $(this).outerHeight();
                    }
                });

                $('.posts-l1 .cat-intro').css({
                    height: introHeight + 'px'
                });
                
                $('.posts-l1 .loop-post').css({
                    height: postHeight + 'px'
                });
            }

            setWidth();
            setHeight();

            $(window).resize( function() {
                setWidth();
                // setHeight();
            });
        }

        if( $('.posts-l1').length ) {
            sectionPostsL1();
        }
    });
})(jQuery);
console.log('hello')
       
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 50) {
            	console.log('scrolled')
                $('.menu-wrapper').fadeIn(500).css("display","inline");
            } else {
                $('.menu-wrapper').fadeOut(500);
            }
        var inview = $('.block:in-viewport').attr('id');
      console.log(inview)
      $('.menu').removeClass('active');    
      $('.menu[href="#' + inview + '"]').addClass('active');    
        });
    });



var userFeed = new Instafeed({
    get: 'user',
    userId: 329779851,
    accessToken: '329779851.467ede5.1ae2ce28946541a98a9f056685fd8d8c',
    template: '<figure><a class="fancybox" rel="group" href="{{image}}"><img src="{{image}}" /></a></figure>',
    resolution: 'standard_resolution',
    limit: 20
});
userFeed.run();

    $(document).ready(function() {
        $(".fancybox").fancybox();
    });

// $ ('#hamburger').click(function() {
//     console.log('hello')
//     $('.main-menu').toggleClass('open');
// })
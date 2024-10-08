(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();

    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        });
        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .menu_wrapp').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        }); 
        // nice select
        $('select').niceSelect();

        $('.owl-carousel.slider3').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            dots: true,
            nav: false,
            // animateOut: 'fadeOut',
            // animateIn: 'fadeIn',
            smartSpeed:3000,
        });
        $('.owl-carousel.slider2').owlCarousel({
            loop: true,
            items: 3,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: true,
            nav: true,
             navText: [
                    '<i class="far fa-angle-left"></i>', 
                    '<i class="far fa-angle-right"></i>'
                ],
            responsive:{
                0:{
                    items: 1,
                },
                576:{
                    items: 2,
                },
                992:{
                    items: 3
                },
                1200:{
                    items: 3
                },
            }
        }); 
        $('.owl-carousel.slider4').owlCarousel({
            loop: true,
            items: 5,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: false,
            nav: true,
             navText: [
                    '<i class="far fa-angle-left"></i>', 
                    '<i class="far fa-angle-right"></i>'
                ],
            responsive:{
                0:{
                    items: 1,
                },
                576:{
                    items: 2,
                },
                992:{
                    items: 3,
                },
                1200:{
                    items: 5,
                },
            }
        });
         $('.owl-carousel.slider44').owlCarousel({
            loop: true,
            items: 4,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: false,
            nav: true,
            stagePadding:1,
             navText: [
                    '<i class="far fa-angle-left"></i>', 
                    '<i class="far fa-angle-right"></i>'
                ],
            responsive:{
                0:{
                    items: 1,
                },
                576:{
                    items: 2,
                },
                992:{
                    items: 3,
                },
                1200:{
                    items: 4,
                },
            }
        });
        $('.owl-carousel.slider5').owlCarousel({
            loop: true,
            items: 6,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: false,
            nav: true,
             navText: [
                    '<i class="far fa-angle-left"></i>', 
                    '<i class="far fa-angle-right"></i>'
                ],
            responsive:{
                0:{
                    items: 4,
                },
                576:{
                    items: 4,
                },
                992:{
                    items: 6,
                },
                1200:{
                    items: 6,
                },
            }
        }); 
        $('.owl-carousel.slider6').owlCarousel({
            loop: true,
            items: 4,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: true,
            nav: true,
             navText: [
                    '<i class="far fa-angle-left"></i>', 
                    '<i class="far fa-angle-right"></i>'
                ],
            responsive:{
                0:{
                    items: 1,
                },
                576:{
                    items: 2,
                },
                992:{
                    items: 3,
                },
                1200:{
                    items: 4,
                },
            }
        }); 
        $('.owl-carousel.slider7').owlCarousel({
            loop: true,
            items: 3,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: true,
            // nav: false,
            //  navText: [
            //         '<i class="far fa-angle-left"></i>', 
            //         '<i class="far fa-angle-right"></i>'
            //     ],
            responsive:{
                0:{
                    items: 1,
                },
                576:{
                    items: 2,
                },
                992:{
                    items: 3,
                },
                1200:{
                    items: 3,
                },
            }
        });
         $('.owl-carousel.slider1').owlCarousel({
            loop: true,
            items: 4,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: false,
            nav: true,
             navText: [
                    '<i class="far fa-angle-left"></i>', 
                    '<i class="far fa-angle-right"></i>'
                ],
            responsive:{
                0:{
                    items: 1,
                },
                576:{
                    items: 2,
                },
                992:{
                    items: 4,
                },
                1200:{
                    items: 4,
                },
            }
        });
        //11. Video Popup Initialize
        function videoPopupInit() {
            $('.play-video').magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                          index: 'youtube.com/', 

                          id: 'v=',
                          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                        },
                    },

                  srcAction: 'iframe_src',
                }
            });
        }
        videoPopupInit();
    });

})(jQuery);



        $(".buttont").on("click", function() {

          var $button = $(this);
          var oldValue = $button.parent().find("input").val();
          $button.blur();
          if ($button.hasClass("inc")) {
              var newVal = parseFloat(oldValue) + 1;
            } else {
           // Don't allow decrementing below zero
            if (oldValue > 0) {
              var newVal = parseFloat(oldValue) - 1;
            } else {
              newVal = 0;
            }
          }

          $button.parent().find("input").val(newVal);

        });

        $(document).ready(function() {
          const minus = $('.quantity__minus');
          const plus = $('.quantity__plus');
          const input = $('.quantity__input');
          minus.click(function(e) {
            e.preventDefault();
            var value = input.val();
            if (value > 1) {
              value--;
            }
            input.val(value);
          });
          
          plus.click(function(e) {
            e.preventDefault();
            var value = input.val();
            value++;
            input.val(value);
          })
        });
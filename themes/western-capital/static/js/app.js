
  
        $(document).ready(function() {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll > 50) {
                    $(".header-1").addClass('scrolled-down').addClass('header-shadow').removeClass('scrolled-top');

                };
                if (scroll < 50) {
                    $(".header-1").addClass('scrolled-top').removeClass('scrolled-down').removeClass('header-shadow');

                };
                if (scroll > 50) {
                    $(".header-2").addClass('header-shadow');

                };
                if (scroll < 50) {
                    $(".header-2").removeClass('header-shadow');

                }
                
            })
        });
   

  
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        });
   
  
        $('.testimonial-slide').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
   
  
        $('.meet-team').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
   
  
        AOS.init();
   
  
        jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 5,
                time: 1000
            });
        });
   
   
  
        $(document).ready(function() {


            $(".dropdown-toggle").mouseenter(function() {
                $('.dropdown-menu').addClass("show-dropdown");
            });
            $(".dropdown-menu").mouseleave(function(e) {
                var value = $(".dropdown-menu").length;
                if ($(e.target).closest(".dropdown-menu").length === 1) {
                    $('.dropdown-menu').removeClass("show-dropdown");

                }
            });
        });
   
  
        $(document).ready(function() {
            $(".navbar-toggler").click(function() {
                $('.navbar').toggleClass("bg-white");
                $('.header-1 .scrolltop').toggleClass("d-none");
                $('.header-1 .scrolldown').toggleClass("d-block");
                $('.fa-bars').toggleClass("text-dark");
                $('.navbar-toggler').toggleClass("filter-invert");
            });
        });
        $(document).ready(function() {
            $('.address-2').hide();
            $(".address-link-2").click(function() {
                $('.address-2').show();
            });
            $(".address-link-1").click(function() {
                $('.address-2').hide();
            });
        });
   
        $(document).ready(function() {
            
            $(".carousel-control-next").click(function() {
                $('.fadeInRight').fadeIn().fadeOut().fadeIn();
            });
            $(".carousel-control-prev").click(function() {
                $('.fade-out').removeClass('animate__animated').fadeOut().fadeIn();
            });
        });
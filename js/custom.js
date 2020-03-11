/*======================================
                SERVICE
======================================*/

$(function () {
    // animate or scroll
    new WOW().init();
});

/*======================================
                WORK
======================================*/

$('#work').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true
    }
});

/*======================================
                TEAM
======================================*/

$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
});

/*======================================
                TESTIMONIAL
======================================*/

$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*======================================
                STATS
======================================*/

$(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*======================================
                CLIENTS
======================================*/

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    });
});

/*======================================
                NAVIGATION
======================================*/


$(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //  hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //  add nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth scrolling

$(function ($) {
    $("a.nav-link").click(function (event) {
        event.preventDefault();

        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});

// Close mobile menu on click
$(function () {

    $("a.nav-link").on("click touch", function () {

        $(".navbar-dark .navbar-toggler").click();
    });
});








//

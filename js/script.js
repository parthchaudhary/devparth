$(document).ready(function () {
    // nav toggel
    $(".dp-nav-toggle").click(function () {
        $(".dp-navigation").addClass("dp-navigation-open");
    });
    $(".dp-nav-toggle-close, .dp-nav-links a").click(function () {
        $(".dp-navigation").removeClass("dp-navigation-open");
    });

    // contact form model
    $(".contact-link").click(function (e) {
        e.preventDefault();
        $("body").addClass("dp-contact-open");
    });
    $(".dp-contact-close").click(function (e) {
        e.preventDefault();
        $("body").removeClass("dp-contact-open");
    });

    // About detail form model
    $(".about-link").click(function (e) {
        e.preventDefault();
        $("body").addClass("dp-about-more-open");
    });
    $(".dp-about-more-close").click(function (e) {
        e.preventDefault();
        $("body").removeClass("dp-about-more-open");
    });

    // testimonial slider
    $(".dp-testimonials-slider").slick({
        arrows: false,
        dots: true,
        autoplay: true
    });

    // On before slide change
    $('.dp-testimonials-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".dp-testimonials").removeClass("dp-stripe-animate");
    });

    $('.dp-testimonials-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $(".dp-testimonials").addClass("dp-stripe-animate");
    });

    // dp-tabination
    var tabVal;
    var contentVal;

    $(".tab-link").click(function () {
        console.log('click');
        tabVal = $(this).attr('data-tab');
        contentVal = '#' + tabVal;
        console.log(tabVal);
        console.log(tabVal);
        $(".tab-link").removeClass('active-tab');
        $(this).addClass('active-tab');
        $(".tab-content").removeClass("active-content");
        $(contentVal).addClass("active-content")
    });

    var c, currentScrollTop = 0,
        navbar = $('nav');

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var scroll = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.removeClass("dp-darkHeader");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.addClass("dp-darkHeader");
        }
        c = currentScrollTop;

        if (scroll <= 100) {
            $("nav").removeClass("dp-darkHeader");
            console.log('yes');

        }
    });

    // equal height
    equalheight('.dp-experiment-item');
});


// equal height js 
equalheight = function (container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function () {
    // equal height
    equalheight('.dp-experiment-item');

    // dp-pre-loader
    $("#dp-loader").delay(1100).slideUp();
});


$(window).resize(function () {
    equalheight('.dp-experiment-item');
});

// smooth scroll
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {
                window.location.hash = hash;
            });
        }
    });
});

// header class on scroll
// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();

//     if (scroll >= 20) {
//         $("nav").addClass("dp-darkHeader");
//     } else {
//         $("nav").removeClass("dp-darkHeader");
//     }
// });


// dp-particle-js
/* ---- particles.js config ---- */
particlesJS("dp-particles-js", {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 789.1476416322727
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 83.91608391608392,
                "size": 1,
                "duration": 3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
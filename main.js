let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.nav-bar');


menu.onclick = function() {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll =
    function() {
        menu.classList.remove('fa-times')
        navbar.classList.remove('active')
    }

document.querySelector('#search-icon').onclick = function() {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = function() {
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    loop: true,
    autoplay: {
        delay: 5000
    }
});

var appendNumber = 4;
var prependNumber = 1;
document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function(e) {
        e.preventDefault();
        swiper.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
    });
document
    .querySelector(".prepend-slide")
    .addEventListener("click", function(e) {
        e.preventDefault();
        swiper.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
        );
    });
document
    .querySelector(".append-slide")
    .addEventListener("click", function(e) {
        e.preventDefault();
        swiper.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
    });
document
    .querySelector(".append-2-slides")
    .addEventListener("click", function(e) {
        e.preventDefault();
        swiper.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        ]);
    });
var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    loop: true,
    breakPoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,

        },
    }
    autoplay: {
        delay: 5000
    }
});
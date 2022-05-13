let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".nav-bar");

menu.onclick = function() {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};
window.onscroll = function() {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
};

document.querySelector("#search-icon").onclick = function() {
    document.querySelector("#search-form").classList.toggle("active");
};
document.querySelector("#close").onclick = function() {
    document.querySelector("#search-form").classList.remove("active");
};

new Swiper(".home-slider", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".home-slider .swiper-pagination",
        type: "fraction",
    },
    loop: true,
    autoplay: {
        delay: 5000,
    },
});
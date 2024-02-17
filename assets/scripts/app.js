// menu
const navMenu = document.querySelector("#nav-menu"),
    closeMenu = document.querySelector("#nav-close"),
    openMenu = document.querySelector("#nav-open")
    ;

if (openMenu) {
    openMenu.addEventListener("click", () => {
        navMenu.classList.add("nav__menu--show");
    });
}

if (closeMenu) {
    closeMenu.addEventListener("click", () => {
        navMenu.classList.remove("nav__menu--show");
    });
}

// link
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        if (navMenu.classList.contains("nav__menu--show"))
            navMenu.classList.remove("nav__menu--show");
    });
});

// swiper settings
const swiperHome = new Swiper('.home__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",
    autoplay: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            centeredSlides: "auto"
        },
        1152: {
            slidesPerView: "auto",
            centeredSlides: "auto",
            spaceBetween: -64
        }
    }
});

// scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("#header");

    this.scrollY >= 50 ? header.classList.add("active") : header.classList.remove("active");
});

// scroll reveal
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500
});

sr.reveal(".home__swiper, .home__footer");
sr.reveal(".home__circle", { scale: 1.5, delay: 300 });
sr.reveal(".home__subcircle", { scale: 1.5, delay: 500 });
sr.reveal(".home__title", { scale: 1, origin: "bottom", delay: 1200 });
sr.reveal(".swiper-button-prev, .swiper-button-next", { origin: "bottom" });

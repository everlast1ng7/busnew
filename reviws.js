//learn-gallery-slider

var swiper = new Swiper(".learnGallerySwiper", {
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: ".learn-gallery_swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".slider_learn-gallery__arrow-next",
        prevEl: ".slider_learn-gallery__arrow-prev",
    },
});

//mask phone

document.addEventListener("DOMContentLoaded", function() {
    Inputmask().mask(document.querySelectorAll(".input_form-phone"));
  });
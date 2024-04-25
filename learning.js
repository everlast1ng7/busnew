//progress bar learning

const progressBarPartners = document.querySelector('.progress-bar-partners');
const scrollableContentPartners = document.querySelector('.scrollable-content-partners');

const BLOCK_WIDTH = 500;
const BLOCKS_COUNT = 9;
const blockWidthInPersent = 90 / BLOCKS_COUNT;
const DEFAULT_OPACITY = 0.5;
const ACTIVE_OPACITY = 1;

const boxesPartners = Array.from(scrollableContentPartners.children);

scrollableContentPartners.addEventListener('scroll', function() {
    const winScroll = scrollableContentPartners.scrollLeft;
    const width = scrollableContentPartners.scrollWidth - scrollableContentPartners.clientWidth;
    const scrolled = (winScroll / width) * 100;
    const childrenIndex = Math.floor(scrolled / blockWidthInPersent)
    document.getElementById("myBar-partners").style.width = scrolled + "%";
    const activeChildren = boxesPartners[childrenIndex];
    if (activeChildren) {
        boxesPartners.forEach((children) => {
            if (activeChildren === children) {
                children.style.opacity = ACTIVE_OPACITY;
            } else if (children) {
                children.style.opacity = DEFAULT_OPACITY;
            };
        });
    };
});

function wheelHandler (e) {
    e.preventDefault();
    e.stopPropagation();
    scrollableContentPartners.scrollLeft += e.deltaY;
}

scrollableContentPartners.addEventListener('mouseenter', (e) => {
    document.body.style.overflowY = 'hidden';
    document.addEventListener('wheel', wheelHandler)
})

scrollableContentPartners.addEventListener('mouseleave', (e) => {
    document.body.style.overflowY = null;
    document.removeEventListener('wheel', wheelHandler)
})

//popup

const popupBtn = document.querySelectorAll('.btn-popup');
const popUp = document.querySelector('.popup');
const overlay = document.querySelector('.popup-overlay');
const myBody = document.querySelector('body');
const popupXmark = document.querySelector('.popup-xmark');

const hiddenField = document.querySelector('#hiddenField');

popupBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      popUp.style.display = "block";
      overlay.style.display = "block";
      myBody.style.position = 'sticky';

      hiddenField.value = btn.getAttribute('data-button');
      console.log(hiddenField.value);
    });
})

popupXmark.addEventListener('click', (e) => {
    popUp.style.display = "none";
    overlay.style.display = "none";
    myBody.style.position = 'static';
});

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

//team-slider

var swiper = new Swiper(".Swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination-team",
      clickable: true,
      renderBullet: function (index, className) {
        // return '<div class="' + className + '">' + (index + 1) + "</div>";
        return `<div class="${className}"><img class="team_avatar-img" src="assets/team/${index}.webp"/></div>`;
      },
    },
    navigation: {
      nextEl: ".slider_team__arrow-next",
      prevEl: ".slider_team__arrow-prev",
    },
});

//reviews

var swiper = new Swiper(".reviewsSwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination-reviews",
      clickable: true,
      renderBullet: function (index, className) {
        // return '<div class="' + className + '">' + (index + 1) + "</div>";
        return `<div class="${className}"><img class="team_avatar-img" src="assets/reviews/${index}.webp"/></div>`;
      },
    },
    navigation: {
      nextEl: ".slider_reviews__arrow-next",
      prevEl: ".slider_reviews__arrow-prev",
    },
  });

// accordeon

const xmark = document.querySelectorAll('.xmark');
const names = document.querySelectorAll('.name');

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    console.log(this.getElementsByClassName('xmark'));
    const xmarkArray = Array.from(this.getElementsByClassName('xmark'));
    console.log(xmarkArray[0]);
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      xmarkArray[0].style.transform = 'rotate(45deg)';
      panel.style.maxHeight = panel.scrollHeight + "px";
      // xmarkArray[0].classList.add('xmarkActive');
    } else {
      panel.style.maxHeight = null;
      xmarkArray[0].style.transform = 'rotate(0deg)';
      // xmarkArray[0].classList.add('xmarkDeactive');
    }
  });
}


//mask phone

document.addEventListener("DOMContentLoaded", function() {
  Inputmask().mask(document.querySelectorAll(".input_form-phone"));
});
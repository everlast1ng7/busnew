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

//progress bar

const progressBarcourses = document.querySelector('.progress-bar-courses');
const scrollableContentcourses = document.querySelector('.scrollable-content-courses');

const BLOCK_WIDTH = 400;
const BLOCKS_COUNT = 9;
const blockWidthInPersent = 90 / BLOCKS_COUNT;
const DEFAULT_OPACITY = 0.5;
const ACTIVE_OPACITY = 1;

const boxescourses = Array.from(scrollableContentcourses.children);

scrollableContentcourses.addEventListener('scroll', function() {
    const winScroll = scrollableContentcourses.scrollLeft;
    const width = scrollableContentcourses.scrollWidth - scrollableContentcourses.clientWidth;
    const scrolled = (winScroll / width) * 100;
    const childrenIndex = Math.floor(scrolled / blockWidthInPersent)
    document.getElementById("myBar-courses").style.width = scrolled + "%";
    const activeChildren = boxescourses[childrenIndex];
    if (activeChildren) {
        boxescourses.forEach((children) => {
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
    scrollableContentcourses.scrollLeft += e.deltaY;
}

scrollableContentcourses.addEventListener('mouseenter', (e) => {
    document.body.style.overflowY = 'hidden';
    document.addEventListener('wheel', wheelHandler)
})

scrollableContentcourses.addEventListener('mouseleave', (e) => {
    document.body.style.overflowY = 'auto';
    document.removeEventListener('wheel', wheelHandler)
})

//keys-slider

var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".keys-swiper-pagination",
        type: "fraction",
    },
    navigation: {
      nextEl: ".slider_keys__arrow-next",
      prevEl: ".slider_keys__arrow-prev",
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

//mask phone

document.addEventListener("DOMContentLoaded", function() {
  Inputmask().mask(document.querySelectorAll(".input_form-phone"));
});
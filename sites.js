// show keys-site

const keys_table_btn = document.querySelector('.keys_table-button');

keys_table_btn.addEventListener('click', (e) => {
    var hiddenSiteKeys = document.querySelectorAll('.our_works__container__key-none');
    for (var i = 0; i < hiddenSiteKeys.length; i++) {
        hiddenSiteKeys[i].style.display = 'block';
        keys_table_btn.style.display = 'none';
    }
});

//show figma-key

const bg_btns_figma = document.querySelectorAll('.our_works__container__key-bg');
const open_window_figma = document.querySelector('.open_window-figma');
const popup_xmark_key_figma = document.querySelector('.popup-xmark-key-figma');
const open_window_figma__image = document.querySelector('.open_window-figma__image img');

const myBody = document.querySelector('.myBody');

const bg_btns_figma_mobile = document.querySelectorAll('.our_works__container__key-bg-mobile')

bg_btns_figma.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        open_window_figma.style.display = "flex";
        myBody.style.overflowY = 'hidden';
        open_window_figma__image.src = `assets/keys-figma/key-figma-${index}.webp`;
    })
})

bg_btns_figma_mobile.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        open_window_figma.style.display = "flex";
        myBody.style.overflowY = 'hidden';
        open_window_figma__image.src = `assets/keys-figma-mobile/key-figma-${index}.webp`;
    })
})

open_window_figma.addEventListener('click', (e) => {
    open_window_figma.style.display = "none";
    myBody.style.overflowY = 'auto';
})

popup_xmark_key_figma.addEventListener('click', (e) => {
    open_window_figma.style.display = "none";
    myBody.style.overflowY = 'auto';
})

//progress bar

const progressBarsites = document.querySelector('.progress-bar-sites');
const scrollableContentsites = document.querySelector('.scrollable-content-sites');

const BLOCK_WIDTH = 450;
const BLOCKS_COUNT = 12;
const blockWidthInPersent = 90 / BLOCKS_COUNT;
const DEFAULT_OPACITY = 0.5;
const ACTIVE_OPACITY = 1;

const boxessites = Array.from(scrollableContentsites.children);

scrollableContentsites.addEventListener('scroll', function() {
    const winScroll = scrollableContentsites.scrollLeft;
    const width = scrollableContentsites.scrollWidth - scrollableContentsites.clientWidth;
    const scrolled = (winScroll / width) * 100;
    const childrenIndex = Math.floor(scrolled / blockWidthInPersent)
    document.getElementById("myBar-sites").style.width = scrolled + "%";
    const activeChildren = boxessites[childrenIndex];
    if (activeChildren) {
        boxessites.forEach((children) => {
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
    scrollableContentsites.scrollLeft += e.deltaY;
}

scrollableContentsites.addEventListener('mouseenter', (e) => {
    document.body.style.overflowY = 'hidden';
    document.addEventListener('wheel', wheelHandler)
})

scrollableContentsites.addEventListener('mouseleave', (e) => {
    document.body.style.overflowY = 'auto';
    document.removeEventListener('wheel', wheelHandler)
})

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

//keys-slider-mobile

var swiper = new Swiper(".keysSwiper", {
pagination: {
    el: ".sites-swiper-pagination",
    type: "fraction",
},
});

//mask phone

document.addEventListener("DOMContentLoaded", function() {
    Inputmask().mask(document.querySelectorAll(".input_form-phone"));
  });
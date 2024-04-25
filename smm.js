const progressBarsmm = document.querySelector('.progress-bar-smm');
const scrollableContentsmm = document.querySelector('.scrollable-content-smm');

const BLOCK_WIDTH = 500;
const BLOCKS_COUNT = 10;
const blockWidthInPersent = 90 / BLOCKS_COUNT;
const DEFAULT_OPACITY = 0.5;
const ACTIVE_OPACITY = 1;

const boxessmm = Array.from(scrollableContentsmm.children);

scrollableContentsmm.addEventListener('scroll', function() {
    const winScroll = scrollableContentsmm.scrollLeft;
    const width = scrollableContentsmm.scrollWidth - scrollableContentsmm.clientWidth;
    const scrolled = (winScroll / width) * 100;
    const childrenIndex = Math.floor(scrolled / blockWidthInPersent)
    document.getElementById("myBar-smm").style.width = scrolled + "%";
    const activeChildren = boxessmm[childrenIndex];
    if (activeChildren) {
        boxessmm.forEach((children) => {
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
    scrollableContentsmm.scrollLeft += e.deltaY;
}

scrollableContentsmm.addEventListener('mouseenter', (e) => {
    document.body.style.overflowY = 'hidden';
    document.addEventListener('wheel', wheelHandler)
})

scrollableContentsmm.addEventListener('mouseleave', (e) => {
    document.body.style.overflowY = 'auto';
    document.removeEventListener('wheel', wheelHandler)
})

// show result-table

const result_table_btn = document.querySelector('.result_table-button');

result_table_btn.addEventListener('click', (e) => {
    var hiddenResulTableBlocks = document.querySelectorAll('.result_table__duo-block-none');
    for (var i = 0; i < hiddenResulTableBlocks.length; i++) {
        hiddenResulTableBlocks[i].style.display = 'block';
        result_table_btn.style.display = 'none';
    }
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
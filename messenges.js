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
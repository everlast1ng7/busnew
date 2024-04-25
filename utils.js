// burger menu

const burger = document.querySelector('.burger');
const burger_navigation = document.querySelector('.burger_navigation');
const body = document.querySelector('.body');

burger.addEventListener('click', (e) => {
    burger_navigation.classList.toggle('active');
    burger.classList.toggle('open');
})

function toggleMenu() {
    burger_navigation.classList.remove('active');
    burger.classList.toggle('open');
}

//popup

const popupBtn = document.querySelectorAll('.btn-popup');
const popUp = document.querySelector('.popup');
const overlay = document.querySelector('.popup-overlay');
const myBody = document.querySelector('body');
const popupXmark = document.querySelector('.popup-xmark');
const sendMail = document.querySelectorAll('.btn-mail');

const hiddenField = document.querySelector('#hiddenField');

const send_success = document.querySelector('.send_success');

function createElement(el, classEl, textEl){
  const element = document.createElement(el);
  element.className = classEl;
  element.textContent = textEl;
  return element;
}

function appendElement(targetNode, el){
  targetNode.append(el);
}

function hideModal(container){
  container.classList.remove('succes_send-show');
  setTimeout(() => {
      container.remove();
  }, 1000)
}

function showModal(root, text, status = 'success'){
  const container = document.createElement('div');
  container.className = `send-container ${status === 'success' ? 'succes_send-container' : 'error_send-container'}`;

  const description = createElement('p', 'succes_send-text', text);
  const closeModal = createElement('div', 'succes_send-xmark');

  appendElement(container, description);
  appendElement(container, closeModal);

  setTimeout(() => {
      container.classList.add('succes_send-show');
  }, 100)

  closeModal.addEventListener('click', (e) => {
      hideModal(container);
  })

  root.append(container);
  setTimeout(() => {
      if(root.querySelector('.send-container')){
          hideModal(container);
      }
  }, 2000)
} 

popupBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      popUp.style.display = "block";
      overlay.style.display = "block";
      myBody.style.position = 'sticky';

      hiddenField.value = btn.getAttribute('data-button');
      console.log(hiddenField.value);
    });
})

const popup_btn = document.querySelector('.popup-btn');

popup_btn.addEventListener('click', (e) => {
    popUp.style.display = "none";
    overlay.style.display = "none";
    myBody.style.position = 'static';
})

sendMail.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      let inputs = btn.parentNode.querySelectorAll('input');
      let data = {
        name: inputs[0].value.trim(),
        phone: inputs[1].value,
        hf: hiddenField.value
    };

    const phoneValue = data.phone.replaceAll("_", "").replaceAll("-", "");
    if (!data.name || !phoneValue || phoneValue.length < 11) {
        showModal(document.querySelector('body'), 'Заполните поля корректно', 'error');
        return;
    }

    showModal(document.querySelector('body'), 'Заявка успешно отправлена');

    const query = new URLSearchParams(data).toString();

    fetch('sendEmail.php?'+query, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
      })
      .then(response => response.json())
      .then(result => {console.log(result)})
      .catch(error => {
          console.error('Error:', error);
      }); 
    });
})


popupXmark.addEventListener('click', (e) => {
    popUp.style.display = "none";
    overlay.style.display = "none";
    myBody.style.position = 'static';
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
      panel.style.maxHeight = null;
      xmarkArray[0].style.transform = 'rotate(0deg)';
      // xmarkArray[0].classList.add('xmarkDeactive');
    } else {
      xmarkArray[0].style.transform = 'rotate(45deg)';
      panel.style.maxHeight = panel.scrollHeight + "px";
      // xmarkArray[0].classList.add('xmarkActive');
    }
  });
}


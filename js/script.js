// страница вопрос-ответ - оживление карточек

let faqMoreBtns = document.querySelectorAll('.faq-questions__layout-element button');
let faqDetailedAnswer = document.querySelector('.faq-detailed-wrapper__text');
let closeBtns = document.querySelectorAll('.close-button');

for (let faqMoreBtn of faqMoreBtns) {
  faqMoreBtn.addEventListener('click', function () {
    faqDetailedAnswer.classList.remove('faq-detailed-block-hidden');
  })
}

for (let closeBtn of closeBtns) {
  closeBtn.addEventListener('click', function () {
    try {
      faqDetailedAnswer.classList.add('faq-detailed-block-hidden');
    } catch (error) {
      if (closeBtn.parentNode.classList.contains('popup-email-us')) {
        closeBtn.parentNode.parentElement.classList.add('popup-email-us-hide');
        document.querySelector('body').style.overflowY = "auto";
      }
    }
  })
}

// карточки сотрудников на странице "о компании"

let teamCards = document.querySelectorAll('.about-team__gallery-element')
for (let teamCard of teamCards) {
  teamCard.addEventListener('click', function () {
    this.classList.toggle('flop')
  })
}

// проверим, все ли поля в форме "перезвоните нам" заполнены

let callbackFormBtn = document.querySelector('.callback-form__button');
let callbackFormInputs = document.querySelectorAll('.callback-form__list-element input');

for (let callbackFormInput of callbackFormInputs) {
  callbackFormBtn.addEventListener('click', function (evt) {
    // evt.preventDefault();
    if (callbackFormInput.value <= 1) {
      callbackFormInput.style.boxShadow = 'inset 0px 0px 3px 1px red';
    } else {
      callbackFormInput.style.boxShadow = 'none';
    }
  })
}

// мобильное меню

function showMobileMenu() {
  let burgerBtn = document.querySelector('.hamburger');
  let mobileMenu = document.querySelector('.mobile-menu');
  let footerContacts = document.querySelector('.main-footer__wrapper');

  burgerBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('mobile-menu__slide-in');
  if (mobileMenu.classList.contains('mobile-menu__slide-in')) {
    document.querySelector('body').style.overflowY = "hidden";
    document.querySelector('main').style.display = "none";
    document.querySelector('.main-footer__wrapper').style.display = "none";
  } else {
    document.querySelector('body').style.overflowY = "visible";
    document.querySelector('main').style.display = "block";
    document.querySelector('.main-footer__wrapper').style.display = "block";
  }
}

function dropDownMenu() {
  let arrow = document.querySelector('.dropdown-arrow');
  let dropDownMenu = document.querySelector('.mobile-menu__nav-element_dropdown__hide');

  arrow.classList.toggle('dropdown-arrow__up');
  dropDownMenu.classList.toggle('mobile-menu__nav-element_dropdown__show')
}

//функция скрывает мобильное меню при изменении разрешения
function hideMobileMenu(x) {
  let burgerBtn = document.querySelector('.hamburger');
  let mobileMenu = document.querySelector('.mobile-menu');
  let footerContacts = document.querySelector('.main-footer__wrapper');

  if (x.matches) {
    burgerBtn.classList.remove('is-active');
    mobileMenu.classList.remove('mobile-menu__slide-in');
    document.querySelector('body').style.overflowY = "visible";
    document.querySelector('main').style.display = "block";
    document.querySelector('.main-footer__wrapper').style.display = "block";
  }
}

let x = window.matchMedia('(min-width: 681px)')
hideMobileMenu(x)
x.addListener(hideMobileMenu)

// подсветим ссылку текущей страницы

let currentPage = location.href;
let menuItems = document.querySelectorAll('.main-header__nav-list_element a');

for (menuItem of menuItems) {
  if (menuItem.href === currentPage) {
    menuItem.id = 'active';
  }
}

// показать/скрыть пароль

let passwordToggle = document.querySelector('#passwordToggle');
let passwordToggleRepeat = document.querySelector('#passwordToggleRepeat');
let loginPasswordToggle = document.querySelector('#loginPasswordToggle');

let userPassword = document.querySelector('#user-password');
let userPasswordRepeat = document.querySelector('#user-password-repeat');
let loginPassword = document.querySelector('#loginPasswordToggle');

function showPassword() {
  if (userPassword.type === 'password') {
    passwordToggle.classList.add('view');
    userPassword.type = 'text';
  } else {
    passwordToggle.classList.remove('view');
    userPassword.type = 'password';
  }
};

function showPasswordRepeat() {
  if (userPasswordRepeat.type === 'password') {
    passwordToggleRepeat.classList.add('view');
    userPasswordRepeat.type = 'text';
  } else {
    passwordToggleRepeat.classList.remove('view');
    userPasswordRepeat.type = 'password';
  }
};

// показать / скрыть пароль на странице входа

function showLoginPassword() {
  if (userPassword.type === 'password') {
    loginPasswordToggle.classList.add('view');
    userPassword.type = 'text';
  } else {
    loginPasswordToggle.classList.remove('view');
    userPassword.type = 'password';
  }
}

// отключим кнопку отправить/зарегистрироваться, если не чекнут чекбокс с соглашением

let checkBox = document.querySelector('.checkbox-wrap input[name="confirm-yes"]');
let submitBtn = document.querySelectorAll('input[type="submit"]');

function checkPropButton() {
  for (let i = 0; i < submitBtn.length; i++) {
    if (checkBox.checked === false) {
      submitBtn[i].disabled = true;
      submitBtn[i].classList.add('too-many-symbols__button');
    } else {
      submitBtn[i].disabled = false;
      submitBtn[i].classList.remove('too-many-symbols__button');
    }
  }
};

// получим имя загруженного файла

function getFileName(evt) {
  console.log('загружен файл');

  let fileName = document.querySelector('input[type=file]').files[0].name;
  let fileLabel = document.querySelector('#formFileLabel');

  fileLabel.innerHTML = fileName;
}

// попап

function showPopUp() {
  let popUp = document.querySelector('.popup-email-us__wrapper');

  popUp.classList.remove('popup-email-us-hide');
  if (!popUp.classList.contains('popup-email-us-hide')) {
    document.querySelector('body').style.overflowY = "hidden";
  } else {
    document.querySelector('body').style.overflowY = "scroll";
  }
}

// теги на странице вопрос-ответ

function sort() {
  let cloudTags = document.querySelectorAll('.faq-welcome__tags-list_element'); //buttons
  let cardTags = document.querySelectorAll('.faq-questions__layout-element > .faq-tag'); //cards

  function filter(tag, cards) {
    cards.forEach((card) => {
      let isCardFiltered = !cards.value === tag.value;
      if (isCardFiltered) {
        console.log(tag.innerHTML);
        card.classList.toggle('hide');
      } else {
        console.log('else');
        card.classList.remove('hide');
      }
    });
  };

  cloudTags.forEach((cloudTag) => {
    cloudTag.addEventListener('click', function () {
      let currentTag = cloudTag.innerHTML;
      filter(currentTag, cardTags);
    });
  });
}

sort();

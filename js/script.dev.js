"use strict";

// страница вопрос-ответ - оживление карточек
var faqMoreBtns = document.querySelectorAll('.faq-questions__layout-element button');
var faqDetailedAnswer = document.querySelector('.faq-detailed-wrapper__text');
var closeBtns = document.querySelectorAll('.close-button');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = faqMoreBtns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var faqMoreBtn = _step.value;
    faqMoreBtn.addEventListener('click', function () {
      faqDetailedAnswer.classList.remove('faq-detailed-block-hidden');
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  var _loop = function _loop() {
    var closeBtn = _step2.value;
    closeBtn.addEventListener('click', function () {
      try {
        faqDetailedAnswer.classList.add('faq-detailed-block-hidden');
      } catch (error) {
        if (closeBtn.parentNode.classList.contains('popup-email-us')) {
          closeBtn.parentNode.parentElement.classList.add('popup-email-us-hide');
          document.querySelector('body').style.overflowY = "auto";
        }
      }
    });
  };

  for (var _iterator2 = closeBtns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    _loop();
  } // карточки сотрудников на странице "о компании"

} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var teamCards = document.querySelectorAll('.about-team__gallery-element');
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = teamCards[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var teamCard = _step3.value;
    teamCard.addEventListener('click', function () {
      this.classList.toggle('flop');
    });
  } // проверим, все ли поля в форме "перезвоните нам" заполнены

} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
      _iterator3["return"]();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var callbackFormBtn = document.querySelector('.callback-form__button');
var callbackFormInputs = document.querySelectorAll('.callback-form__list-element input');
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  var _loop2 = function _loop2() {
    var callbackFormInput = _step4.value;
    callbackFormBtn.addEventListener('click', function (evt) {
      // evt.preventDefault();
      if (callbackFormInput.value <= 1) {
        callbackFormInput.style.boxShadow = 'inset 0px 0px 3px 1px red';
      } else {
        callbackFormInput.style.boxShadow = 'none';
      }
    });
  };

  for (var _iterator4 = callbackFormInputs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    _loop2();
  } // мобильное меню

} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
      _iterator4["return"]();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

function showMobileMenu() {
  var burgerBtn = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  var footerContacts = document.querySelector('.main-footer__wrapper');
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
  var arrow = document.querySelector('.dropdown-arrow');
  var dropDownMenu = document.querySelector('.mobile-menu__nav-element_dropdown__hide');
  arrow.classList.toggle('dropdown-arrow__up');
  dropDownMenu.classList.toggle('mobile-menu__nav-element_dropdown__show');
} //функция скрывает мобильное меню при изменении разрешения


function hideMobileMenu(x) {
  var burgerBtn = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  var footerContacts = document.querySelector('.main-footer__wrapper');

  if (x.matches) {
    burgerBtn.classList.remove('is-active');
    mobileMenu.classList.remove('mobile-menu__slide-in');
    document.querySelector('body').style.overflowY = "visible";
    document.querySelector('main').style.display = "block";
    document.querySelector('.main-footer__wrapper').style.display = "block";
  }
}

var x = window.matchMedia('(min-width: 681px)');
hideMobileMenu(x);
x.addListener(hideMobileMenu); // подсветим ссылку текущей страницы

var currentPage = location.href;
var menuItems = document.querySelectorAll('.main-header__nav-list_element a');
var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
  for (var _iterator5 = menuItems[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
    menuItem = _step5.value;

    if (menuItem.href === currentPage) {
      menuItem.id = 'active';
    }
  } // показать/скрыть пароль

} catch (err) {
  _didIteratorError5 = true;
  _iteratorError5 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
      _iterator5["return"]();
    }
  } finally {
    if (_didIteratorError5) {
      throw _iteratorError5;
    }
  }
}

var passwordToggle = document.querySelector('#passwordToggle');
var passwordToggleRepeat = document.querySelector('#passwordToggleRepeat');
var loginPasswordToggle = document.querySelector('#loginPasswordToggle');
var userPassword = document.querySelector('#user-password');
var userPasswordRepeat = document.querySelector('#user-password-repeat');
var loginPassword = document.querySelector('#loginPasswordToggle');

function showPassword() {
  if (userPassword.type === 'password') {
    passwordToggle.classList.add('view');
    userPassword.type = 'text';
  } else {
    passwordToggle.classList.remove('view');
    userPassword.type = 'password';
  }
}

;

function showPasswordRepeat() {
  if (userPasswordRepeat.type === 'password') {
    passwordToggleRepeat.classList.add('view');
    userPasswordRepeat.type = 'text';
  } else {
    passwordToggleRepeat.classList.remove('view');
    userPasswordRepeat.type = 'password';
  }
}

; // показать / скрыть пароль на странице входа

function showLoginPassword() {
  if (userPassword.type === 'password') {
    loginPasswordToggle.classList.add('view');
    userPassword.type = 'text';
  } else {
    loginPasswordToggle.classList.remove('view');
    userPassword.type = 'password';
  }
} // отключим кнопку отправить/зарегистрироваться, если не чекнут чекбокс с соглашением


var checkBox = document.querySelector('.checkbox-wrap input[name="confirm-yes"]');
var submitBtn = document.querySelector('input[type="submit"]');

function checkPropButton() {
  var requiredInputs = document.querySelectorAll('input:required');

  for (var i = 0; i < requiredInputs.length; i++) {
    if (checkBox.checked || requiredInputs[i].value !== '') {
      submitBtn.disabled = false;
      submitBtn.classList.remove('too-many-symbols__button');
      requiredInputs[i].style.background = 'var(--beige)';
    } else {
      submitBtn.disabled = true;
      submitBtn.classList.add('too-many-symbols__button');
      requiredInputs[i].style.background = 'rgba(245, 92, 92, 0.2)';
    }
  }
}

; // получим имя загруженного файла

function getFileName(evt) {
  console.log('загружен файл');
  var fileName = document.querySelector('input[type=file]').files[0].name;
  var fileLabel = document.querySelector('#formFileLabel');
  fileLabel.innerHTML = fileName;
} // попап


function showPopUp() {
  var popUp = document.querySelector('.popup-email-us__wrapper');
  popUp.classList.remove('popup-email-us-hide');

  if (!popUp.classList.contains('popup-email-us-hide')) {
    document.querySelector('body').style.overflowY = "hidden";
  } else {
    document.querySelector('body').style.overflowY = "scroll";
  }
} // теги на странице вопрос-ответ


function sort() {
  var cloudTags = document.querySelectorAll('.faq-welcome__tags-list_element');
  var cardTags = document.querySelectorAll('.faq-questions__layout-element > .faq-tag');

  function filter(tag, cards) {
    cards.forEach(function (card) {
      var isCardFiltered = !card.classList.contains(tag) ? card.parentNode.classList.add('hide') : card.parentNode.classList.remove('hide');
    });
  }

  ;
  cloudTags.forEach(function (cloudTag) {
    cloudTag.addEventListener('click', function () {
      var currentTag = cloudTag.dataset.filter;
      filter(currentTag, cardTags);
    });
  });
}

sort();
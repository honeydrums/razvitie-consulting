let faqMoreBtns = document.querySelectorAll('.faq-questions__layout-element button');
let faqDetailedAnswer = document.querySelector('.faq-detailed-wrapper__text');
let closeBtns = document.querySelectorAll('.close-button');

for (let faqMoreBtn of faqMoreBtns) {
    faqMoreBtn.addEventListener('click', function() {
        faqDetailedAnswer.classList.remove('faq-detailed-block-hidden');
    })
}

for (let closeBtn of closeBtns) {
    closeBtn.addEventListener('click', function() {
        faqDetailedAnswer.classList.add('faq-detailed-block-hidden');
    })
}

let teamCards = document.querySelectorAll('.about-team__gallery-element')
for (let teamCard of teamCards) {
    teamCard.addEventListener('click', function() {
        this.classList.toggle('flop')
    })
}

// проверим, все ли поля в форме "перезвоните нам" заполнены
let callbackFormBtn = document.querySelector('.callback-form__button');
let callbackFormInputs = document.querySelectorAll('.callback-form__list-element input');

for (let callbackFormInput of callbackFormInputs) {
    callbackFormBtn.addEventListener('click', function(evt) {
        // evt.preventDefault();
        if (callbackFormInput.value <= 1) {
            console.log('пусто');
            callbackFormInput.style.boxShadow = 'inset 0px 0px 3px 1px red';
        } else {
            console.log('не пусто');
            callbackFormInput.style.boxShadow = 'none';
        }
    })
}

// мобильное меню
let burgerBtn = document.querySelector('.main-header__nav-trigger');
let loginRow = document.querySelector('.main-header__bottom-wrapper');
let headerNav = document.querySelector('.main-header__nav');

burgerBtn.addEventListener('click', function() {
    console.log('клик');
    burgerBtn.classList.toggle('main-header__nav-trigger-show');
    loginRow.classList.toggle('main-header__bottom-wrapper-mobile');
    headerNav.classList.toggle('main-header__nav-mobile');
})

function hideMobileMenu(x) { //функция скрывает мобильное меню при изменении разрешения
    if(x.matches) {
        burgerBtn.classList.remove('main-header__nav-trigger-show');
        loginRow.classList.remove('main-header__bottom-wrapper-mobile');
        headerNav.classList.remove('main-header__nav-mobile');
    }
}

let x = window.matchMedia('(min-width: 700px)')
hideMobileMenu(x)
x.addListener(hideMobileMenu)

// текущая страница

let currentPage = location.href;
let menuItems = document.querySelectorAll('.main-header__nav-list_element a');

for (menuItem of menuItems) {
    if(menuItem.href === currentPage) {
        menuItem.id = 'active';
    }
}

// показать/скрыть пароль 

let passwordToggle = document.querySelector('#passwordToggle');
let passwordToggleRepeat = document.querySelector('#passwordToggleRepeat');

let userPassword = document.querySelector('#user-password');
let userPasswordRepeat = document.querySelector('#user-password-repeat');

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
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
        loginRow.classList.remove('main-header__bottom-wrapper-mobile');
        headerNav.classList.remove('main-header__nav-mobile');
    }
}

let x = window.matchMedia('(min-width: 700px)')
hideMobileMenu(x)
x.addListener(hideMobileMenu)
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
let footer = document.querySelector('.main-footer__wrapper');
let allPage = document.body;

burgerBtn.addEventListener('click', function() {
    console.log('клик');
    burgerBtn.classList.toggle('main-header__nav-trigger-show');
    loginRow.classList.toggle('main-header__bottom-wrapper-mobile');
    headerNav.classList.toggle('main-header__nav-mobile');
    footer.classList.toggle('footer-sticky');
    allPage.classList.toggle('cancel-scroll');
});



//функция скрывает мобильное меню при изменении разрешения
function hideMobileMenu(x) {
    if(x.matches) {
        burgerBtn.classList.remove('main-header__nav-trigger-show');
        loginRow.classList.remove('main-header__bottom-wrapper-mobile');
        headerNav.classList.remove('main-header__nav-mobile');
        footer.classList.remove('footer-sticky');
        allPage.classList.remove('cancel-scroll');
    }
}

let x = window.matchMedia('(min-width: 681px)')
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
let submitBtn = document.querySelector('input[type="submit"]');

function checkPropButton() {
    if (checkBox.checked === false) {
        submitBtn.disabled = true;
        submitBtn.classList.add('too-many-symbols__button');
        console.log('nope');
    } else {
        submitBtn.disabled = false;
        submitBtn.classList.remove('too-many-symbols__button');
        console.log('yep');
    }
};

// счётчик символов в textarea 
// let commentTextarea = document.querySelector('#formmessage'); //найдём textarea
// let textareaQuantity = document.querySelector('.textarea-quantity');

// commentTextarea.oninput = function() { // функция, следящая за вводом текста в textarea
//     textareaQuantity.innerHTML = this.value.length;
// }
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
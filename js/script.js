let faqMoreBtns = document.querySelectorAll('.faq-questions__layout-element button');
let faqDetailedAnswer = document.querySelector('.faq-detailed-wrapper__text');
let closeBtns = document.querySelectorAll('.close-button');

for (var faqMoreBtn of faqMoreBtns) {
    faqMoreBtn.addEventListener('click', function() {
        console.log('работает');
        faqDetailedAnswer.classList.remove('faq-detailed-block-hidden');
    })
}

for (var closeBtn of closeBtns) {
    closeBtn.addEventListener('click', function() {
        faqDetailedAnswer.classList.add('faq-detailed-block-hidden');
        console.log('закрывси');
    })
}
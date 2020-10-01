let commentTextarea = document.querySelector('#formmessage'); //найдём textarea
let textareaQuantity = document.querySelector('.textarea-quantity');
let textareaCounter = document.querySelector('.textarea-counter');
let formButton = document.querySelector('input[type="submit"]');

commentTextarea.oninput = function() { // функция, следящая за вводом текста в textarea
    textareaQuantity.innerHTML = this.value.length; // счётчик количества введённых символов
    if (this.value.length > 500) { // условие, если больше 500 символов в поле ввода
        formButton.disabled = true; // отключим кнопку и возможность отправки данных
        formButton.classList.add('too-many-symbols__button');
        this.classList.add('too-many-symbols__textarea'); // добавим рамку и красный цвет текста
        textareaCounter.style.color = 'red'; // и поменяем цвет текста в счётчике
    } else {
        formButton.disabled = false; // а если меньше, то разблочим кнопку
        formButton.classList.remove('too-many-symbols__button');
        this.classList.remove('too-many-symbols__textarea'); // удалим рамку и красный цвет текста
        textareaCounter.style.color = ''; // а так же цвет счётчика
    }
}

//     /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/; регулярка на проверку номера телефона
/*Напиши скрипт, который бы при потере фокуса на инпуте, проверял его 
содержимое на правильное количество символов. Сколько символов должно быть в 
инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным. */

const input = document.querySelector('#validation-input');
console.log(+input.dataset.length);

input.addEventListener('input', inputSymbol);

function inputSymbol(event) {
    input.textContent = event.currentTarget.value;
    // console.log(input.textContent.length)
    if (input.textContent.length < input.dataset.length) {
        input.classList.add('.invalid');
    }
}

// input.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
//     if (+input.dataset.length > 6) {
//         input.classList.add('.valid');
//     } else {
//         input.classList.add('.invalid');
//     }
// }
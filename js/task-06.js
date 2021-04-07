/*Напиши скрипт, который бы при потере фокуса на инпуте, проверял его 
содержимое на правильное количество символов. Сколько символов должно быть в 
инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным. */

const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (input.value.length >= +input.dataset.length) {
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
}

// const input = document.querySelector('#validation-input');
// input.addEventListener('focus', onInputFocus);
// input.addEventListener('blur', onInputBlur);
// function onInputFocus(event) {
//   //   console.log('focus');
// }
// function onInputBlur(event) {
//   // console.dir(event.currentTarget);
//   // console.log('blur');
//     console.log(event.currentTarget.value.length);
    
//     if (
//       event.currentTarget.value.length >= +event.currentTarget.getAttribute('data-length')) {
//     input.classList.add('valid');
//   } else {
//     input.classList.add('invalid');
//   }
// }
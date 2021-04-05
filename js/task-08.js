/*Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает 
кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 
параметр amount - число. Функция создает столько div, 
сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes. */

const input = document.querySelector('input');
const createElemBtn = document.querySelector('[data-action="render"]');
const deleteElemBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('boxes');

console.log(input);

console.log(createElemBtn);
console.log(deleteElemBtn);

createElemBtn.addEventListener('click', createElement);

function createElement() {
    
    console.log(input.value);
    // do {
    //     const createBox = document.createElement('div');
    //     createBox.classList.add('box');
    //     boxes.append(createBox);

    // } while (input.value);
}
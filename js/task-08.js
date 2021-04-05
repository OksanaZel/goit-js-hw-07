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
const boxes = document.querySelector('#boxes');

createElemBtn.addEventListener('click', createBoxes);

function createBoxes() {
    const min = 0;
    const max = 256;
    let red = Math.floor(Math.random() * (max - min) + min);
    let green = Math.floor(Math.random() * (max - min) + min);
    let blue = Math.floor(Math.random() * (max - min) + min);
    const size = 30;

    for (let i = 0; i < input.value; i +=1) {
        const box = document.createElement('div');

        box.classList.add('box');
        box.style.width = `${size+i*10}px`;
        box.style.height = `${size+i*10}px`;
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        box.style.marginRight = "10px";
        box.style.marginTop = "10px";
        boxes.append(box);
    } 
}

deleteElemBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    boxes.innerHTML = '';
    input.value = '';
}
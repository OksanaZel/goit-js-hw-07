/*Счетчик состоит из спана и кнопок, которые должны увеличивать 
и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */

const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let currentCounterValue = Number(counterValue.textContent);

const decrement = () => {
    currentCounterValue += Number(decrementBtn.textContent);
    counterValue.textContent = currentCounterValue;
}

const increment = () => {
    currentCounterValue += Number(incrementBtn.textContent);
    counterValue.textContent = currentCounterValue;
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);




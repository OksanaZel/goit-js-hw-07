/*Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. Если инпут пустой,
 в спане должна отображаться строка 'незнакомец'. */

const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', userName);
const defaultValue = refs.output.textContent;

function userName(event) {
    console.log(event);
    refs.output.textContent = event.currentTarget.value;

    if (!refs.output.textContent) {
        refs.output.textContent = defaultValue;
    }
}





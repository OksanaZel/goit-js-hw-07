/*В HTML есть список категорий ul#categories.
Напиши скрипт, который выполнит следующие операции.
Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль 
текст заголовка элемента (тега h2) и количество элементов в категории 
(всех вложенных в него элементов li).
Например для первой категории получится:

Категория: Животные
Количество элементов: 4 */


const categories = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории.`);

const itemsOfCategories = categories.querySelectorAll('.item');

itemsOfCategories.forEach(item => {
    const itemTitle = item.firstElementChild;
    console.log(`Категория: ${itemTitle.textContent}`);

    const categoriesSubList = item.lastElementChild;
    const subListItem = categoriesSubList.querySelectorAll('li');
    console.log(`Количество элементов: ${subListItem.length}`);
})

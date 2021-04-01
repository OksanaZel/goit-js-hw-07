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


const categoriesList = document.querySelector('#categories');
console.log(`В списке ${categoriesList.children.length} категории.`);

const itemOfCategoriesList = categoriesList.querySelectorAll('.item');

for (let i = 0; i < itemOfCategoriesList.length; i += 1) {
    const itemTitle = itemOfCategoriesList[i].firstElementChild;
    console.log(`Категория: ${itemTitle.textContent}`);

    const categoriesSubList = itemOfCategoriesList[i].lastElementChild;
    const subListItem = categoriesSubList.querySelectorAll('li');
    console.log(`Количество элементов: ${subListItem.length}`);
}
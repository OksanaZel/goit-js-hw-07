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


// const categoriesList = document.querySelector('#categories');
// console.log(`В списке ${categoriesList.children.length} категории.`);

// const itemOfCategoriesList = categoriesList.querySelectorAll('.item')
// console.log(itemOfCategoriesList);
// console.log(itemOfCategoriesList.children);

// for (let i = 0; i < itemOfCategoriesList.length; i += 1) {
//     const titleItem = itemOfCategoriesList.firstChild[i].textContent;
//     console.log(titleItem);
    
// }


// for (let i = 0; i < categoriesList.children.length; i += 1) {
    
//     const itemsTitle = document.querySelectorAll('h2');
//     const itemTitle = itemsTitle[i].textContent;
//     const itemsSubList = document.querySelectorAll('.items > ul > li');
//     console.log(`Категория: ${itemTitle}`);
//     console.log(`Количество элементов: ${itemsSubList.length}`)

    

// }

// console.log(`Категория: ${itemTitle.textContent}`);
// console.log(itemTitle);
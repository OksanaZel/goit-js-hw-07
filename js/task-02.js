/*В HTML есть пустой список ul#ingredients.
В JS есть массив строк.
Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию 
в список ul.ingredients. Для создания DOM-узлов используй document.createElement(). */

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')
console.log(ingredientsList);

const ingredientsEl = (ingredient) => {
  const itemOfIngredientsList = document.createElement('li');
  itemOfIngredientsList.classList.add('ingredients-list__item');
  itemOfIngredientsList.textContent = `${ingredient}`;
  
  return ingredientsList.appendChild(itemOfIngredientsList);
}

ingredients.map(ingredientsEl);

/* ====== Второй вариант ====== */
// ingredients.map(ingredient => {
//     const itemOfIngredientsList = document.createElement('li');
//     itemOfIngredientsList.classList.add('ingredients-list__item');
//     itemOfIngredientsList.textContent = `${ingredient}`;
//     ingredientsList.appendChild(itemOfIngredientsList);
// })



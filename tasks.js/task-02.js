const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((elem) => {
  const item = document.createElement("li");

  item.textContent = elem;

  ingredientsList.appendChild(item);
});
console.log(ingredientsList);

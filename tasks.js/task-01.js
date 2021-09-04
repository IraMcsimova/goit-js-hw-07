const items = document.querySelectorAll("#categories .item");

console.log(`В списке ${items.length} категории`);

const itemsArray = [...items];

itemsArray.map((elem) => {
  const itemsName = elem.querySelector(".item > h2");

  console.log(`Категория: ${itemsName.textContent}`);

  const itemsElem = elem.querySelectorAll([".item > ul > li"]);

  console.log(`Количество элементов:${itemsElem.length}`);
});

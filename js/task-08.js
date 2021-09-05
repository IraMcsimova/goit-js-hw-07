const input = document.querySelector("input");
// console.log(input.textContent);
const renderButton = document.querySelector('[data-action="render"]');
// console.log(renderButton);
const destroyButton = document.querySelector('[ data-action="destroy"]');
// console.log(destroyButton);
const newBoxes = document.querySelector("#boxes");
// console.log(newBoxes);
// let box = document.createElement("div");
// newBoxes.appendChild(box);
// console.log(newBoxes);

input.addEventListener("input", createBoxes);

function createBoxes(amount) {
  //   console.log(amount.target.value);
  renderButton.addEventListener("click", () => {
    let box = "";
    for (let i = 0; i < amount.target.value; i += 1) {
      box = document.createElement("div");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor =
        "#" +
        (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();

      newBoxes.appendChild(box);
    }
  });
}

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  newBoxes.innerHTML = "";
  input.value = "";
}

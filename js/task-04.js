const counterValue = document.querySelector("#value");
const decButton = document.querySelector("[data-action='decrement']");
const incButton = document.querySelector("[data-action='increment']");

function getCounter() {
  let value = 0;
  function decrement() {
    return (value -= 1);
  }
  function increment() {
    return (value += 1);
  }

  return { decrement, increment };
}

const count = getCounter();

decButton.addEventListener("click", () => {
  let result = count.decrement();
  counterValue.textContent = result;
});

incButton.addEventListener("click", () => {
  let result = count.increment();
  counterValue.textContent = result;
});

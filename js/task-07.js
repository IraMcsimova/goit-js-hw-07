const sizeController = document.querySelector("[id='font-size-control']");

const text = document.querySelector("[ id='text']");

sizeController.addEventListener("input", letterSizeChange);

function letterSizeChange(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}

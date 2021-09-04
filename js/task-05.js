const textInput = document.querySelector("#name-input");
console.log(textInput);
const textOutput = document.querySelector("#name-output");
console.log(textOutput);
textInput.addEventListener("input", (event) => {
  //   event.preventDefault();
  console.log(event.target.value);

  if (event.target.value != 0) {
    textOutput.textContent = `${event.target.value}`;
  } else {
    textOutput.textContent;
  }
});

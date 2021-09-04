const textInput = document.getElementById("validation-input");
const lettersQuantity = textInput.dataset.length;

textInput.addEventListener("blur", checkLettersQuantity);

function checkLettersQuantity(event) {
  const lettersQuantity = textInput.dataset.length;

  if (event.currentTarget.value.length === Number(lettersQuantity)) {
    textInput.classList = "valid";
  } else {
    textInput.classList = "invalid";
  }
}

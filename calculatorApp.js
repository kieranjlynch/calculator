// //variables
const clearButton = document.querySelector(".clear");
const plusminusButton = document.querySelector(".plusminus");
const percentButton = document.querySelector(".percent");
const divideButton = document.querySelector(".button--divide");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const multiplyButton = document.querySelector(".button--multiply");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const minusButton = document.querySelector(".button--minus");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const additionButton = document.querySelector(".button--plus");
const zeroButton = document.querySelector(".zero");
const decimalButton = document.querySelector(".decimal");
const equalsButton = document.querySelector(".button--equals");
const calcDisplay = document.querySelector(".wrapper__display");
const numbersArr = [
  clearButton, plusminusButton, percentButton, divideButton, sevenButton, 
  eightButton, nineButton, multiplyButton, fourButton, fiveButton, sixButton,
  minusButton, oneButton, twoButton, threeButton, additionButton, zeroButton, 
  decimalButton, equalsButton
]

const percentClicked = percentButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = percentButton.innerHTML
});

const divideClicked = divideButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = divideButton.innerHTML
});

const sevenClicked = sevenButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = sevenButton.innerHTML
});

const eightClicked = eightButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = eightButton.innerHTML
});

const nineClicked = nineButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = nineButton.innerHTML
});

const multiplyClicked = multiplyButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = multiplyButton.innerHTML
});

const fourClicked = fourButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = fourButton.innerHTML
});

const fiveClicked = fiveButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = fiveButton.innerHTML
});

const sixClicked = sixButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = sixButton.innerHTML
});

const minusClicked = minusButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = minusButton.innerHTML
});

const oneClicked = oneButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = oneButton.innerHTML
});

const twoClicked = twoButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = twoButton.innerHTML
});

const threeClicked = threeButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = threeButton.innerHTML
});

const additionClicked = additionButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = additionButton.innerHTML
});

const zeroClicked = zeroButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = zeroButton.innerHTML
});

const equalsClicked = equalsButton.addEventListener("click", (e) => {
  calcDisplay.innerHTML = equalsButton.innerHTML
});






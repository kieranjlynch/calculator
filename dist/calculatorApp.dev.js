"use strict";

// //variables
var clearButton = document.querySelector(".clear");
var plusminusButton = document.querySelector(".plusminus");
var percentButton = document.querySelector(".percent");
var divideButton = document.querySelector(".button--divide");
var sevenButton = document.querySelector(".seven");
var eightButton = document.querySelector(".eight");
var nineButton = document.querySelector(".nine");
var multiplyButton = document.querySelector(".button--multiply");
var fourButton = document.querySelector(".four");
var fiveButton = document.querySelector(".five");
var sixButton = document.querySelector(".six");
var minusButton = document.querySelector(".button--minus");
var oneButton = document.querySelector(".one");
var twoButton = document.querySelector(".two");
var threeButton = document.querySelector(".three");
var additionButton = document.querySelector(".button--plus");
var zeroButton = document.querySelector(".zero");
var decimalButton = document.querySelector(".decimal");
var equalsButton = document.querySelector(".button--equals");
var calcDisplay = document.querySelector(".wrapper__display");
var numbersArr = [clearButton, plusminusButton, percentButton, divideButton, sevenButton, eightButton, nineButton, multiplyButton, fourButton, fiveButton, sixButton, minusButton, oneButton, twoButton, threeButton, additionButton, zeroButton, decimalButton, equalsButton];
console.log(numbersArr);
var clearClicked = clearButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = "";
});
var percentClicked = percentButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = percentButton.innerHTML;
});
var divideClicked = divideButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = divideButton.innerHTML;
});
var sevenClicked = sevenButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = sevenButton.innerHTML;
});
var eightClicked = eightButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = eightButton.innerHTML;
});
var nineClicked = nineButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = nineButton.innerHTML;
});
var multiplyClicked = multiplyButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = multiplyButton.innerHTML;
});
var fourClicked = fourButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = fourButton.innerHTML;
});
var fiveClicked = fiveButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = fiveButton.innerHTML;
});
var sixClicked = sixButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = sixButton.innerHTML;
});
var minusClicked = minusButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = minusButton.innerHTML;
});
var oneClicked = oneButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = oneButton.innerHTML;
});
var twoClicked = twoButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = twoButton.innerHTML;
});
var threeClicked = threeButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = threeButton.innerHTML;
});
var additionClicked = additionButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = additionButton.innerHTML;
});
var zeroClicked = zeroButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = zeroButton.innerHTML;
});
var equalsClicked = equalsButton.addEventListener("click", function (e) {
  calcDisplay.innerHTML = equalsButton.innerHTML;
});
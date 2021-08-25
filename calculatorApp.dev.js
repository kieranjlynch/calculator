"use strict";

//global variables
var calculator = document.querySelector(".calculator");
var btns = calculator.querySelector(".calculator__buttons");
var display = calculator.querySelector(".calculator__display");
var firstNumber = "";
var operator = "";
btns.addEventListener("click", function (event) {
  if (!event.target.closest("button")) return; //local variables

  var key = event.target;
  var keyValue = key.textContent;
  var displayValue = display.textContent;
  var type = key.dataset.type;
  var previousKeyType = calculator.dataset.previousKeyType; //checks whether the button pressed is a number

  if (type === "number") {
    if (displayValue === "0" || previousKeyType === "operator") {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  } //checks whether the button pressed is an operator


  if (type === "operator") {
    firstNumber = displayValue;
    operator = key.dataset.operator;
  } //checks whether the button pressed is equals


  if (type === "equal") {
    var secondNumber = displayValue;
    display.textContent = calculate(firstNumber, operator, secondNumber);
  } // resets the display back to zero


  if (type === "clear") {
    display.textContent = "0";
  }

  calculator.dataset.previousKeyType = type;
}); // Performs the calculation

function calculate(firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  if (operator === "plus") return firstNumber + secondNumber;
  if (operator === "minus") return firstNumber - secondNumber;
  if (operator === "multiply") return firstNumber * secondNumber;
  if (operator === "divide") return firstNumber / secondNumber;
}
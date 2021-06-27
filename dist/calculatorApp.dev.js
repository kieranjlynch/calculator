"use strict";

//global variables
var calculator = document.querySelector('.calculator');
var btns = calculator.querySelector('.calculator__buttons');
var display = calculator.querySelector('.calculator__display');
btns.addEventListener('click', function (event) {
  if (!event.target.closest('button')) return;
  var key = event.target;
  var keyValue = key.textContent;
  var displayValue = display.textContent;
  var type = key.dataset.type;
  var previousKeyType = calculator.dataset.previousKeyType; //checks whether the button pressed is a number

  if (type === 'number') {
    if (displayValue === '0' || previousKeyType === 'operator') {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  } //checks whether the button pressed is an operator


  if (type === 'operator') {
    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;
  } // Perform the calculation


  if (type === 'equal') {
    var firstNumber = calculator.dataset.firstNumber;
    var secondNumber = displayValue;
    var operator = calculator.dataset.operator;
    display.textContent = calculate(firstNumber, operator, secondNumber);
  }

  if (type === 'clear') {
    display.textContent = '0';
    delete calculator.dataset.firstNumber;
    delete calculator.dataset.operator;
  }

  calculator.dataset.previousKeyType = type;
});

function calculate(firstNumber, operator, secondNumber) {
  firstNumber = Int(firstNumber);
  secondNumber = secondNumber;
  if (operator === 'plus') return firstNumber + secondNumber;
  if (operator === 'minus') return firstNumber - secondNumber;
  if (operator === 'times') return firstNumber * secondNumber;
  if (operator === 'divide') return firstNumber / secondNumber;
}
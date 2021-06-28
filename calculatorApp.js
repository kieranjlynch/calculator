//global variables
const calculator = document.querySelector(".calculator");
const btns = calculator.querySelector(".calculator__buttons");
const display = calculator.querySelector(".calculator__display");
let firstNumber = "";
let operator = "";

btns.addEventListener("click", event => {
  if (!event.target.closest("button")) return

  //local variables
  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  //checks whether the button pressed is a number
  if (type === "number") {
    if (
      displayValue === "0" ||
      previousKeyType === "operator"
    ) {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

   //checks whether the button pressed is an operator
  if (type === "operator") {
    firstNumber = displayValue;
    operator = key;
    console.log(operator);
  }

  //checks whether the button pressed is equals
  if (type === "equal") {
    console.log(firstNumber);
    const secondNumber = displayValue;
    console.log(secondNumber);
    operator = key.dataset.operator;
    console.log(key);
    console.log(operator);
    display.textContent = calculate(firstNumber, operator, secondNumber);
    console.log(calculate(firstNumber, operator, secondNumber));
  }
// resets the display back to zero
  if (type === "clear") {
    display.textContent = "0";
  }
  calculator.dataset.previousKeyType = type;
})
     // Performs the calculation

function calculate (firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  if (operator === "plus") return firstNumber + secondNumber;
  if (operator === "minus") return firstNumber - secondNumber;
  if (operator === "times") return firstNumber * secondNumber;
  if (operator === "divide") return firstNumber / secondNumber;
}
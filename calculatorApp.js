//global variables
const calculator = document.querySelector('.calculator');
const btns = calculator.querySelector('.calculator__buttons');
const display = calculator.querySelector('.calculator__display');

btns.addEventListener('click', event => {
  if (!event.target.closest('button')) return

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  //checks whether the button pressed is a number
  if (type === 'number') {
    if (
      displayValue === '0' ||
      previousKeyType === 'operator'
    ) {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

   //checks whether the button pressed is an operator
  if (type === 'operator') {
    calculator.dataset.firstNumber = displayValue
    calculator.dataset.operator = key.dataset.key
  }

      // Perform the calculation
  if (type === 'equal') {
    const firstNumber = calculator.dataset.firstNumber;
    const secondNumber = displayValue;
    const operator = calculator.dataset.operator;
    display.textContent = calculate(firstNumber, operator, secondNumber);
  }

  if (type === 'clear') {
    display.textContent = '0';
    delete calculator.dataset.firstNumber;
    delete calculator.dataset.operator;
  }

  calculator.dataset.previousKeyType = type;
})

function calculate (firstNumber, operator, secondNumber) {
  firstNumber = Int(firstNumber);
  secondNumber = (secondNumber);
  if (operator === 'plus') return firstNumber + secondNumber;
  if (operator === 'minus') return firstNumber - secondNumber;
  if (operator === 'times') return firstNumber * secondNumber;
  if (operator === 'divide') return firstNumber / secondNumber;
}
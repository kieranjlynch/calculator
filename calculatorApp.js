//declared a var equal to the div containing all the buttons 
const wrapperBtns = document.querySelector(".wrapper__buttons")

// var which targets the div for the display
const display = document.querySelector(".wrapper__display")

// added an eventlistener to the btnClicked variable, 
wrapperBtns.addEventListener("click", event => {
  //used event.target to get the info about what value is being clicked
const btnClicked = event.target
const clickedValue = btnClicked.textContent
const displayedValue = display.textContent

// inputs the displayed value into the display div
display.textContent = clickedValue

// if displayed value is zero, replace it with the button value, if it's a number
if (displayedValue == 0) {
display.textContent = clickedValue
} else {
  //concatenate the values
  display.textContent = displayedValue + clickedValue
}



})

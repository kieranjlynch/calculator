// //declared a var equal to the div containing all the buttons 
const wrapperBtns = document.querySelector(".wrapper__buttons")

// added an eventlistener to the btnClicked variable, in the arrow function i used event.target to get the info about what value is being clicked
wrapperBtns.addEventListener("click", event => {
const btnClicked = event.target
const clickedValue = btnClicked.textContent
})

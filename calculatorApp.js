//declared a const equal to the div containing all the buttons 
const btnClicked = document.querySelector(".wrapper__buttons");

// added an eventlistener to the btnClicked variable, 
// if the click matches a class of button, then the value of the button is saved in sessionStorage
btnClicked.addEventListener("click", e => {
 if (e.target.matches("button")) {
   "button".value = sessionStorage.setItem("buttonValue", "button".value);
 }
});
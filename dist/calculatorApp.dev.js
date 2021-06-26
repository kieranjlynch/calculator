"use strict";

// //declared a var equal to the div containing all the buttons 
var wrapperBtns = document.querySelector(".wrapper__buttons"); // added an eventlistener to the btnClicked variable, in the arrow function i used event.target to get the info about what value is being clicked

wrapperBtns.addEventListener("click", function (event) {
  var btnClicked = event.target;
  var clickedValue = btnClicked.textContent;
});
"use strict";

//declared a var equal to the div containing all the buttons 
var wrapperBtns = document.querySelector(".wrapper__buttons"); // var which targets the div for the display

var display = document.querySelector(".wrapper__display"); // added an eventlistener to the btnClicked variable, 

wrapperBtns.addEventListener("click", function (event) {
  //used event.target to get the info about what value is being clicked
  var btnClicked = event.target;
  var clickedValue = btnClicked.textContent;
  var displayedValue = display.textContent; // inputs the displayed value into the display div

  display.textContent = clickedValue; // if displayed value is zero, replace it with the button value, if it's a number

  if (displayedValue == 0) {
    display.textContent = clickedValue;
  } else {
    //concatenate the values
    display.textContent = displayedValue + clickedValue;
  }
});
"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

//declared a global var equal to the div containing all the buttons 
var wrapperBtns = document.querySelector(".wrapper__buttons"); // declared a global var which targets the div for the display

var display = document.querySelector(".wrapper__display"); // added an eventlistener to the btnClicked variable, 

wrapperBtns.addEventListener("click", function (event) {
  //used event.target to get the info about what value is being clicked
  var btnClicked = event.target; //set the value of clickedValue to be equal to the button being clicked

  var clickedValue = btnClicked.textContent;
  var displayedValue = display.textContent; //var to replace btnClicked.dataset.type

  var type = btnClicked.dataset.type;
  var previousBtnType = wrapperBtns.dataset.previousBtnType; // inputs the displayed value into the display div

  display.textContent = clickedValue; // checks if the button is a number

  if (type == "number") {
    // if displayed value is zero, replace it with the button value, if it's a number
    if (displayedValue == 0) {
      display.textContent = clickedValue;
    } // else if to refresh the display if the previous btn was an operator
    else if (previousBtnType == "operator") {
        display.textContent = clickedValue;
      } else {
        //concatenate the values
        display.textContent = displayedValue + clickedValue;
      }
  } // checks if the button is an operator
  // checks if the button being clicked has a custom atttribute "dataset" in the html


  if (type = (_readOnlyError("type"), "operator")) {
    console.log(btnClicked);
    document.dataset.previousBtnType = "operator";
  }
});
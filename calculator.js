//By: Christopher Lee Copyright 2019
var num1 = 0;
var num2 = 0;
var operator = 0;
var isEmpty = true;
var hasDecimal = false;
var numOfDecimalPoints = 0;

//reset values for page load
window.onload = function() {
  num1 = 0;
  num2 = 0;
  operator = 0;
  isEmpty = true;
  numOfDecimalPoints = 0;
  $(display).html("_");
}

//get numbers pressed and display them
function getDisplay(e) {
  //get first number
  if (hasDecimal == true) {
    numOfDecimalPoints = numOfDecimalPoints - 1;
  }
  if (operator == 0) {
    num1 = parseInt((num1 * 10) + parseInt(e));
    if (isEmpty) { //overwrite empty "_"
      $(display).html(num1);
      isEmpty = false;
    } else { //append if value is not empty
      $(display).append(document.createTextNode(e))
    }
  }
  //for the second number
  else {
    num2 = parseInt((num2 * 10) + parseInt(e));
    if (isEmpty) { //overwrite empty "_"
      $(display).html(num2);
      isEmpty = false;
    } else { //append if value is not empty
      $(display).append(document.createTextNode(e));
    }
  }
}
//get the operator used from the user
function getOperator(f) {
  operator = parseInt(f);
  isEmpty = true;
  num1 = convertNum(num1);
  hasDecimal = false;
}
//display decimal and indicate number will be a decimal
function getDecimal() {
  hasDecimal = true;
  $(display).append(document.createTextNode("."));
}

//clear the display and reset stored values
function clearDisplay() {
  num1 = 0;
  num2 = 0;
  operator = 0;
  isEmpty = true;
  $(display).html("_");
  numOfDecimalPoints = 0;
}
//convert whole number to decimals
function convertNum(num) {
  num = num * Math.pow(10, numOfDecimalPoints);
  numOfDecimalPoints = 0;
  return num;
}
//perform the operation and out put it to display
function equals() {
  num2 = convertNum(num2);
  if (operator != 0) {
    var result = 0;
    //check which operator was used 0 = none 1 = add 2 =  subtract 3 = multiply 4 = divide
    switch (operator) {
      case 1:
        result = num1 + num2;
        if (Number.isInteger(result)) {
          $(display).html(result);
        } else {
          $(display).html(parseFloat(result.toFixed(7)));
        }
        break;
      case 2:
        result = num1 - num2;
        if (Number.isInteger(result)) {
          $(display).html(result);
        } else {
          $(display).html(parseFloat(result.toFixed(7)));
        }
        break;
      case 3:
        result = num1 * num2;
        if (Number.isInteger(result)) {
          $(display).html(result);
        } else {
          $(display).html(parseFloat(result.toFixed(7)));
        }
        break;
      case 4:
        result = num1 / num2;
        if (Number.isInteger(result)) {
          $(display).html(result);
        } else {
          $(display).html(parseFloat(result.toFixed(7)));
        }
        break;
      default:
        $(display).html("_");
        break;
    }
  }
}

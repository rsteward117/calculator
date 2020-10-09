//wire the buttons to js code and make them do something.
//create a variable that takes 2 user inputs.

//setting up the anwer screen
let display = document.getElementById("display");
display.textContent = "0";

const numButton = document.querySelectorAll(".number");
const opButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.getElementById('clear');
const delButton = document.getElementById('del');
//basic Math functions

function add(a,b){
 return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}
function divied(a,b){
    return a/b;
}

function operate(firstnum, secondnum){
}

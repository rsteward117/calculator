//calls the display
let display = document.getElementById('display');

//global variables
let displayValue = null;
let theResult;
let StoredNumber = [];
let previousNumber = [];
let operator = "";


//My button selectors
const numButton = document.querySelectorAll(".number");
const opButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.getElementById('clear');
const delButton = document.getElementById('del');

delButton.addEventListener('click', () => {
display.textContent = displayValue.slice(-1);
StoredNumber.pop();
});
numButton.forEach((button) => {
button.addEventListener('click', () => {
 displayValue = button.value;
    StoredNumber.push(displayValue);
    display.textContent = StoredNumber.join('');
    });              
});

opButton.forEach((button) => {
button.addEventListener('click', () => {
 operator = button.value;
theCalculation();
    });
});

//basic Math functions
function add(a, b){
 return a + b;
}

function subtract(a , b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}
function divied(a , b){
    return a / b;
}
//assign the operator functions to do something.
function operate(a, b)
{
switch(operator){
    case "add":
        return add(a, b);
        break;
        
    case "-":
        return subtract(a, b);
        break;
        
    case "*":
        return multiply(a, b);
        break;
        
    case "/":
        return divied(a, b);
        break;
}
}




clear.addEventListener('click', () => {
    display.textContent = "0";
    displayValue = null;
    StoredNumber = [];
    previousNumber = [];
});
equalButton.addEventListener('click', theCalculation);

function theCalculation (){
displayValue = +StoredNumber.join('');
// the plus infront of the storednumber make sure that whatever value that's inside is read as a number.
previousNumber.push(displayValue);
StoredNumber = [];
theResult = previousNumber.reduce((a, b) => operate(a, b, operator ));
display.textContent = theResult;


}
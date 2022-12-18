let equation = []; //Used to update the string equation
let stringEquation = 0; //Used for the calculations and display
let resetEquation = 0; //Used to reset equations

function buttonPress(buttonID){ //Whenever a number is pressed
    check(resetEquation)
    equation.push(buttonID)
    stringEquation = equation.join("")
    input.value = stringEquation
}

function deleteNumber(){ //Remove a number or operator when pressed
    check(resetEquation)
    equation.pop()
    stringEquation = equation.join("")
    input.value = stringEquation
}

function equateFunction(){ //Execute the function
    check(resetEquation)
    let tempNumber = eval(stringEquation)
    input.value = tempNumber
    equation = [];
    stringEquation = equation.join("");
    resetEquation++
}

function check(){ //Check to see if the user input any new information
    check2(resetEquation)
    stringEquation = input.value;
    equation = stringEquation.split("");
}

function check2(checkVariable){
    if(checkVariable > 0){
        resetEquation = 0
        input.value = ""
        stringEquation = ""
        equation = []
    }
}
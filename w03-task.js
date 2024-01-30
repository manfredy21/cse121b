// Function Declaration: Addition Feature
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Function Expression: Subtraction Feature
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Arrow Functions: Multiplication Feature
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Division Feature: Using a Function Declaration
function divide(dividend, divisor) {
    if (divisor !== 0) {
        return dividend / divisor;
    } else {
        return "Cannot divide by zero!";
    }
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// Selection Structures
document.getElementById("getTotal").addEventListener("click", function() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let isMember = document.getElementById("member").checked;
    let total;
    if (isMember) {
        total = subtotal * 0.8; // 20% discount for members
    } else {
        total = subtotal;
    }
    document.getElementById("total").textContent = `$ ${total.toFixed(2)}`;
});

// Array Methods - Functional Programming
window.addEventListener("DOMContentLoaded", function() {
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    document.getElementById("array").textContent = numbersArray.join(", ");
    document.getElementById("odds").textContent = numbersArray.filter(number => number % 2 !== 0).join(", ");
    document.getElementById("evens").textContent = numbersArray.filter(number => number % 2 === 0).join(", ");
    document.getElementById("sumOfArray").textContent = numbersArray.reduce((sum, number) => sum + number);
    document.getElementById("multiplied").textContent = numbersArray.map(number => number * 2).join(", ");
    document.getElementById("sumOfMultiplied").textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
});
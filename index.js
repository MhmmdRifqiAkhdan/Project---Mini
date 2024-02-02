let displayValue = '0';
let operator = '';
let firstOperand = null;
let waitingForSecondOperand = false;

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator && !waitingForSecondOperand) {
        calculate();
    }
    operator = op;
    firstOperand = parseFloat(displayValue);
    waitingForSecondOperand = true;
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function calculate() {
    let result;
    const secondOperand = parseFloat(displayValue);
    if (isNaN(firstOperand) || isNaN(secondOperand)) return;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    displayValue = result.toString();
    operator = '';
    firstOperand = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

updateDisplay();

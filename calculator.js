function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Nice try! Dividing by zero is undefined.");
        return "Nice try! Dividing by zero is undefined."; // Avoid division by zero
    }
    return a / b;
}

let firstNumber = null;
let secondNumber = null;
let currentOperator = null;

function roundResult(number) {
    return Math.round(number * 10000) / 10000;
}

function operate(operator, a, b) {
    let result;
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            return null;
    }
    return roundResult(result);
}


const display = document.getElementById('display');
let displayValue = '';

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', (e) => {
        displayValue += e.target.textContent;
        console.log("Current Display Value:", displayValue);
        display.textContent = displayValue;
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', (e) => {
        if (firstNumber === null) {
            firstNumber = parseFloat(displayValue);
        } else {
            secondNumber = parseFloat(displayValue);
            const result = operate(currentOperator, firstNumber, secondNumber);
            display.textContent = result;
            firstNumber = result;
        }
        currentOperator = e.target.textContent;
        displayValue = '';
    });
});


document.getElementById('equals').addEventListener('click', () => {
    if (firstNumber !== null && currentOperator !== null && displayValue !== '') {
        secondNumber = parseFloat(displayValue);
        const result = operate(currentOperator, firstNumber, secondNumber);
        display.textContent = result;
        firstNumber = result;
        displayValue = '';
        currentOperator = null;
    }
});


document.getElementById('clear').addEventListener('click', () => {
    displayValue = '';
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    display.textContent = '0';
});
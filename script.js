const buttons = document.querySelectorAll('.button')
const calcArea = document.querySelector('.calc-area')
const operatorButtons = document.querySelectorAll('.operator-button')
const equalButton = document.querySelector('.equal-button')
const clearButton = document.querySelector('.clear-button')
const deleteButton = document.querySelector('.del-button')

let firstNumber = ''
let secondNumber = ''
let currentOperator = ''

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (calcArea.innerText === "0" || calcArea.innerText === "ERROR") {
            calcArea.innerText = button.innerText;
        } else {
            calcArea.innerText += button.innerText;
        }

        if (currentOperator === '') {
            firstNumber = calcArea.innerText; 
        } else {
            if (currentOperator !== '') {
                secondNumber = calcArea.innerText.slice(firstNumber.length + 1);
            }
        }
    });
});

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (currentOperator === '') {
            currentOperator = operator.value;
            opSign = operator.innerText;
            calcArea.innerText += opSign;
        }
    });
});

equalButton.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber !== '' && currentOperator !== '') {
        const result = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
        if (!isNaN(result)) {
            calcArea.innerText = result;
            firstNumber = result;
            secondNumber = '';
            currentOperator = '';
        } else {
            calcArea.innerText = 'ERROR';
            firstNumber = '';
            secondNumber = '';
            currentOperator = '';
        }
    }
});

clearButton.addEventListener('click', () => {
    calcArea.innerText = '0';
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
});

deleteButton.addEventListener('click', () => {
    if (calcArea.innerText !== '0' && calcArea.innerText !== 'ERROR') {
        const deletedChar = calcArea.innerText.slice(-1);
        calcArea.innerText = calcArea.innerText.slice(0, -1);

        if (calcArea.innerText === '') {
            calcArea.innerText = '0';
            firstNumber = '';
            secondNumber = '';
            currentOperator = '';
        } else if (currentOperator === '') {
            firstNumber = calcArea.innerText;
        } else if (deletedChar === currentOperator) {
            currentOperator = '';
        } else {
            secondNumber = calcArea.innerText.slice(firstNumber.length + 1);
        }
    }
});

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
        return 'ERROR';
    } else {
        return a / b;
    }
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Invalid operator';
    }
}
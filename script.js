const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('data-equals')
const deleteButton = document.querySelector('data-delete')
const allClearsButton = document.querySelector('data-all-clear')










function add(a, b) {
    return a + b
  }
  
function subtract(a, b) {
    return a - b
  }
  
function multiply(a, b) {
    return a * b
  }
  
function divide(a, b) {
    return a / b
  }
  
function operate(operator, a, b) {
    switch (operator) {
    case '+':
        return add(a, b)
    case '-':
        return subtract(a, b)
    case '×':
        return multiply(a, b)
    case '÷':
        if (b === 0) return 'ERROR'
        else return divide(a, b)
    default:
        return
    }
  }
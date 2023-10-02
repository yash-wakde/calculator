
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearsButton = document.querySelector('[data-all-clear]')
const calcArea = document.querySelector('[data-calc-area]')

numberButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        if(calcArea.textContent === '0' || calcArea.textContent === 'ERROR'){
        calcArea.textContent = button.innerText
        }
        else{
        calcArea.textContent += button.innerText
        }
    })
})

operationButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        calcArea.textContent += button.innerText
    })
})

equalsButton.addEventListener('click', operate())


allClearsButton.addEventListener('click', ()=>{
    calcArea.textContent = '0'
})

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
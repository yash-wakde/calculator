
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearsButton = document.querySelector('[data-all-clear]')
const calcArea = document.querySelector('[data-calc-area]')

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText === '.') {
      const operand = calcArea.textContent.split(/[-+×÷]/).pop();
      if (operand.includes('.')) {
        return;
      }
    }
    if (calcArea.textContent === '0' || calcArea.textContent === 'ERROR') {
      calcArea.textContent = button.innerText;
    } else {
      calcArea.textContent += button.innerText;
    }
  });
});

function performCalculation() {
  const expression = calcArea.textContent;
  const parts = expression.split(/([+\-×÷])/);
  const [operand1, operator, operand2] = parts;

  if (operand1 && operator && operand2) {
    const result = operate(operator, parseFloat(operand1), parseFloat(operand2));
    if (result === 'ERROR') {
      calcArea.textContent = result;
    } else {
      if (Number.isInteger(result)) {
        calcArea.textContent = result;
      } else {
        calcArea.textContent = result.toFixed(3);
      }
    }
  }
}

equalsButton.addEventListener('click', performCalculation);

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!calcArea.textContent.includes('+') && !calcArea.textContent.includes('-') && !calcArea.textContent.includes('×') && !calcArea.textContent.includes('÷')) {
      calcArea.textContent += button.innerText;
    } else {
      performCalculation();
      calcArea.textContent += button.innerText;
    }
  });
});

allClearsButton.addEventListener('click', ()=>{
    calcArea.textContent = '0'
})

deleteButton.addEventListener('click', () => {
  calcArea.textContent = calcArea.textContent.slice(0, -1);
  if (calcArea.textContent === '') {
    calcArea.textContent = '0';
  }
});

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
const buttons = document.querySelectorAll('.button')
const calcArea = document.querySelector('.calc-area')
const operatorButtons = document.querySelectorAll('.operator-button')

let firstNumber = ''
let secondNumber = ''
let currentOperator = ''

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if (calcArea.innerText === "0") {
            calcArea.innerText = button.innerText;
        } else {
            calcArea.innerText += button.innerText;
        }
    })
})


operatorButtons.forEach((operator)=>{
    operator.addEventListener('click', ()=>{
        currentOperator = operator.innerText
        calcArea.innerText += currentOperator
    })
})







let a = ''
let b = ''

function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return (a/b)
}

function operate(operator,a,b){
    switch (operator){
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            if(b == 0){
                return 'ERROR'
            }
            else{
                return divide(a,b)
            }         
        default:
            return 'Invalid operator'
    }
}


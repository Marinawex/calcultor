
 let firstOperand = 0
 let currentOperator = null
 let secondOperand = 0
 let res = 0
 let curValue = ''


 const digits = document.querySelectorAll('.nums');

 digits.forEach(digit => {
    digit.addEventListener('click', ev =>{ev.stopPropagation; ev.preventDefault; console.log('clikr')})
});

const operators = document.querySelectorAll('.operator')

operators.forEach(operator => {
    operator.addEventListener('click', ev =>{console.log('clikd')})
});

const eq = document.querySelector('#eq')
eq.addEventListener('click',ev =>{console.log('hory')})



// const newDiv = document.createElement('div')
// newDiv.style.width = '200px'
// newDiv.style.height =  '200px'
// newDiv.style.backgroundColor = 'green'
// document.body.append(newDiv)

// let seven = document.getElementById('b7')


// val = function(){
//     return document.textContent
// }

// let curValue = seven.addEventListener('click',val)


// let screen = document.querySelector('#res')

// screen.innerHTML = 'hey'

// let seven = document.querySelector('#b7')

// let digit = document.querySelectorAll('.numbers ')


// const display = document.addEventListener ('click' , (ev) => {validation(ev.target.innerHTML)})


// const validation = (val) => {
//     if (val === '7'){
//         curValue += val
//     }
// }





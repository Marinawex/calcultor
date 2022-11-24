const calc = {
  curValue: "",
  firstOperand: "",
  curOperator: "",
  secondOperand: "",
  result: "",
  output: "",
  seintificMode: false,
  haveDot: false,
};

//buttons
const digits = document.querySelectorAll(".nums");
const operators = document.querySelectorAll(".operator");
const point = document.querySelector("#point");
const eq = document.querySelector("#eq");
const reset = document.querySelector("#reset");
const back = document.querySelector("#back");
const display = document.querySelector("#res");
const powerOfTwo = document.querySelector("#x2");
const squareRoot = document.querySelector("#S-root");
const power = document.querySelector("#power");
const root = document.querySelector("#root");
const mod = document.querySelector("#mod");
const pi = document.querySelector("#pi");

//events
digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    if (calc.firstOperand && calc.curOperator) {
      calc.secondOperand += digit.innerHTML;
    } else if (calc.firstOperand) {
      calc.firstOperand += digit.innerHTML;
    } else {
      calc.firstOperand = digit.innerHTML;
    }
    if (calc.seintificMode) {
        calc.curValue += digit.innerHTML;
    }

    console.log(calc);
    display.innerHTML = calc.firstOperand;

    // if (CurIsOperand && calc.curValue) {
    //   calc.curValue += digit.innerHTML;

    //   console.log(calc);
    // } else {
    //   calc.curValue = digit.innerHTML;
    //   console.log(calc);
    // }
    // if (CurIsOperator && calc.firstOperand) {
    //   calc.secondOperand += digit.innerHTML;
    //   console.log(calc);
    //   calc.curValue = calc.secondOperand;
    //   console.log(calc);
    // }
    // if (CurIsOperator && calc.firstOperand && calc.secondOperand){
    //     calculete()
    //     calc.firstOperand =calc.result;

    // }
    // displayScreen();
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (!calc.firstOperand) {
      return;
    } else if (!calc.secondOperand) {
      calc.curOperator = operator.innerHTML;
    }
    if (calc.curOperator && calc.secondOperand && !calc.seintificMode) {
      calculete();
      calc.firstOperand = calc.result;
      calc.secondOperand = "";
      calc.curOperator = operator.innerHTML;
    } else if (calc.seintificMode) {
      calc.curOperator = operator.innerHTML;
    }
    if (calc.seintificMode){
        calc.curValue += operator.innerHTML;
    }
    console.log(calc);
    display.innerHTML = calc.curOperator;

    // if (!calc.curValue) {
    //   return;
    // }
    // if (CurIsOperand && calc.curValue) {
    //   calc.firstOperand = calc.curValue;
    //   calc.curOperator = operator.innerHTML;
    //   console.log(calc);
    // }
    // if (calc.curValue) {
    //   calc.curValue = operator.innerHTML;
    //   console.log(calc);
    // }
    // if (calc.secondOperand) {
    //   calculete();
    //   calc.firstOperand = calc.result;
    //   calc.secondOperand = "";
    //   calc.curValue = operator.innerHTML;
    // }
    // if (canCalculate) {
    //     calculete()
    //     calc.firstOperand = calc.result;
    //     calc.secondOperand = "";
    //     calc.curValue = operator.innerHTML;
    //     calc.curOperator = operator.innerHTML;
    //     console.log()

    // }

    // displayScreen();
  });
});
// operators.forEach((operator) => {

//         operator.addEventListener('click', () => {
//             if (calc.secondOperand){
//                 calculete()
//                 calc.firstOperand = calc.result;
//                 console.log(calc)
//                 calc.curValue = operator.innerHTML;
//                 calc.curOperator = operator.innerHTML;
//                 calc.secondOperand = "";
//             }

//         })

// })

eq.addEventListener("click", evalButton);
reset.addEventListener("click", resetButton);
back.addEventListener("click", backButton);

//helper functions
function CurIsOperand() {
  if (
    calc.curValue === "0" ||
    calc.curValue === "1" ||
    calc.curValue === "2" ||
    calc.curValue === "3" ||
    calc.curValue === "4" ||
    calc.curValue === "5" ||
    calc.curValue === "6" ||
    calc.curValue === "7" ||
    calc.curValue === "8" ||
    calc.curValue === "9"
  ) {
    return true;
  }
}

function CurIsOperator() {
  if (
    calc.curValue === "+" ||
    calc.curValue === "-" ||
    calc.curValue === "x" ||
    calc.curValue === "/"
  ) {
    return true;
  }
}
function canCalculate() {
  if (calc.firstOperand && calc.curOperator && calc.secondOperand) {
    return true;
  }
}

function logHistory() {
  const historyBox = document.querySelector("#display-log");
  historyBox.innerHTML += `\n${calc.output}`;
}
function clearHistory() {
  const historyBox = document.querySelector("#display-log");
  historyBox.innerHTML = "";
}

//calc functions

function calculete() {
  calc.output = `${calc.firstOperand} ${calc.curOperator} ${calc.secondOperand}`;
  if (canCalculate) {
    switch (calc.curOperator) {
      case "+":
        calc.result = String(sum(calc.firstOperand, calc.secondOperand));
        break;
      case "-":
        calc.result = String(sub(calc.firstOperand, calc.secondOperand));
        break;
      case "x":
        calc.result = String(multi(calc.firstOperand, calc.secondOperand));
        break;
      case "/":
        calc.result = String(divide(calc.firstOperand, calc.secondOperand));
        break;
    }
    calc.output += ` = ${calc.result}`;
    logHistory();
    display.innerHTML = calc.result;
  }
}

function multi(num, num2) {
  return parseFloat(num) * parseFloat(num2);
}
function divide(num, num2) {
  return parseFloat(num) / parseFloat(num2);
}
function sum(num, num2) {
  return parseFloat(num) + parseFloat(num2);
}
function sub(num, num2) {
  return parseFloat(num) - parseFloat(num2);
}

//buttons functions

function evalButton() {
  calculete();
  calc.curValue = "";
  calc.curOperator = "";
  calc.firstOperand = "";
  calc.secondOperand = "";
  calc.result = "";
  calc.output = "";
  clearDisplay();
}

function resetButton() {
  calc.curValue = "";
  calc.curOperator = "";
  calc.firstOperand = "";
  calc.secondOperand = "";
  calc.result = "";
  calc.output = "";
  clearDisplay();
  clearHistory();
}

function backButton() {
  if (calc.curValue.length > 1) {
    calc.curValue = calc.curValue.slice(0, -1);
  } else {
    calc.curValue = "";
  }
  //   if (CurIsOperator && calc.curOperator) {
  //     calc.curOperator = "";
  //     calc.curValue = "";
  //   }
  if (calc.secondOperand) {
    calc.secondOperand = calc.secondOperand.slice(0, -1);
  } else {
    calc.secondOperand = "";
  }
}

function displayScreen() {
  display.innerHTML = calc.secondOperand;
 
}

function clearDisplay() {
  display.innerHTML = "";
}

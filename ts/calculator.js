var calc = {
    curValue: "",
    firstOperand: "",
    curOperator: "",
    secondOperand: "",
    result: ""
};
//buttons
var digits = document.querySelectorAll(".nums");
var operators = document.querySelectorAll(".operator");
var eq = document.querySelector("#eq");
var reset = document.querySelector("#reset");
var back = document.querySelector("#back");
var display = document.querySelector('#res');
//events
digits.forEach(function (digit) {
    digit.addEventListener("click", function () {
        if (CurIsOperand && calc.curValue) {
            calc.curValue += digit.innerHTML;
        }
        else {
            calc.curValue = digit.innerHTML;
        }
        if (CurIsOperator && calc.firstOperand) {
            calc.secondOperand += digit.innerHTML;
            calc.curValue = calc.secondOperand;
        }
        displayScreen();
    });
});
operators.forEach(function (operator) {
    operator.addEventListener("click", function () {
        if (CurIsOperand && calc.curValue && !calc.curOperator) {
            calc.firstOperand = calc.curValue;
        }
        if (CurIsOperator && calc.curValue) {
            calc.curValue = operator.innerHTML;
            calc.curOperator = operator.innerHTML;
        }
        displayScreen();
    });
});
operators.forEach(function (operator) {
    operator.addEventListener('click', function () {
        if (calc.secondOperand) {
            calculete();
            calc.firstOperand = calc.result;
            console.log(calc);
            calc.curValue = operator.innerHTML;
            calc.curOperator = operator.innerHTML;
            calc.secondOperand = "";
        }
    });
});
eq.addEventListener("click", function () { return calculete(); });
reset.addEventListener("click", function () { return resetButton(); });
back.addEventListener("click", function () { return backButton(); });
//helper functions
function CurIsOperand() {
    if (calc.curValue !== "+" &&
        calc.curValue !== "-" &&
        calc.curValue !== "x" &&
        calc.curValue !== "/") {
        return true;
    }
}
function CurIsOperator() {
    if (calc.curValue === "+" ||
        calc.curValue === "-" ||
        calc.curValue === "x" ||
        calc.curValue === "/") {
        return true;
    }
}
function canCalculate() {
    if (calc.firstOperand && calc.curOperator && calc.secondOperand) {
        return true;
    }
}
function twoOperands() {
    if (calc.firstOperand && calc.secondOperand) {
        return true;
    }
}
//calc functions
function calculete() {
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
        display.innerHTML = calc.result;
    }
}
function multi(num, num2) {
    return parseInt(num) * parseInt(num2);
}
function divide(num, num2) {
    return parseFloat(num) / parseFloat(num2);
}
function sum(num, num2) {
    return parseInt(num) + parseInt(num2);
}
function sub(num, num2) {
    return parseInt(num) - parseInt(num2);
}
//buttons functions
function evalButton() { }
function resetButton() {
    calc.curValue = "";
    calc.curOperator = "";
    calc.firstOperand = "";
    calc.secondOperand = "";
    calc.result = "";
    clearDisplay();
}
function backButton() {
    if (calc.curValue.length > 1) {
        calc.curValue = calc.curValue.slice(0, -1);
    }
    else {
        calc.curValue = "";
    }
    //   if (CurIsOperator && calc.curOperator) {
    //     calc.curOperator = "";
    //     calc.curValue = "";
    //   }
    if (calc.secondOperand) {
        calc.secondOperand = calc.secondOperand.slice(0, -1);
    }
    else {
        calc.secondOperand = "";
    }
}
function displayScreen() {
    display.innerHTML = calc.curValue;
}
function clearDisplay() {
    display.innerHTML = "";
}

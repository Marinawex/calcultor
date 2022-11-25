const calc = {
    curValue: "",
    firstOperand: "",
    curOperator: "",
    secondOperand: "",
    result: "",
    output: "",
    seintificMode: false,
    // haveDot: false, should help me check if there is a dot in the number and disable the options to add another
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
powerOfTwo.addEventListener("click", () => {
    if (!calc.curValue || CurIsOperator()) {
        return;
    }
    else {
        calc.curValue += "**2";
        displayScreen();
    }
});
squareRoot.addEventListener("click", () => {
    if (!calc.curValue || CurIsOperator()) {
        return;
    }
    else {
        calc.result = eval("Math.sqrt(calc.curValue)");
        displayScreen();
    }
});
power.addEventListener("click", () => {
    if (!calc.curValue || CurIsOperator()) {
        return;
    }
    else {
        calc.curValue += "**";
        displayScreen();
    }
});
root.addEventListener("click", () => {
    if (!calc.curValue || CurIsOperator()) {
        return;
    }
    else {
        console.log("working on it");
    }
});
mod.addEventListener("click", () => {
    if (!calc.curValue || CurIsOperator()) {
        return;
    }
    else {
        calc.curValue += "%";
        displayScreen();
    }
});
digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (!calc.seintificMode) {
            if (calc.firstOperand && calc.curOperator) {
                calc.secondOperand += digit.innerHTML;
            }
            else if (calc.firstOperand) {
                calc.firstOperand += digit.innerHTML;
            }
            else {
                calc.firstOperand = digit.innerHTML;
            }
            calc.curValue += digit.innerHTML;
        }
        else {
            calc.curValue += digit.innerHTML;
            if (digit.id === "pi") {
                calc.curValue = calc.curValue.replace("π", String(Math.PI));
            }
        }
        displayScreen();
    });
});
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (!calc.seintificMode) {
            if (!calc.firstOperand) {
                return;
            }
            else if (!calc.secondOperand) {
                calc.curOperator = operator.innerHTML;
            }
            if (calc.curOperator && calc.secondOperand) {
                calculete();
                calc.firstOperand = calc.result;
                calc.curValue = String(calc.result);
                displayScreen();
                calc.secondOperand = "";
                calc.curOperator = operator.innerHTML;
            }
            if (CurIsOperator()) {
                calc.curValue = calc.curValue.slice(0, -1);
                calc.curValue += operator.innerHTML;
                displayScreen();
            }
            else {
                calc.curValue += operator.innerHTML;
            }
        }
        else {
            if (!calc.curValue) {
                return;
            }
            if (CurIsOperator()) {
                calc.curValue = calc.curValue.slice(0, -1);
                calc.curValue += operator.innerHTML;
                displayScreen();
            }
            else {
                calc.curValue += operator.innerHTML;
            }
        }
        displayScreen();
    });
});
eq.addEventListener("click", evalButton);
reset.addEventListener("click", resetButton);
back.addEventListener("click", backButton);
//helper functions
function CurIsOperator() {
    if (calc.curValue.slice(-1) === "+" ||
        calc.curValue.slice(-1) === "-" ||
        calc.curValue.slice(-1) === "x" ||
        calc.curValue.slice(-1) === "/") {
        return true;
    }
}
function canCalculate() {
    if (calc.firstOperand && calc.curOperator && calc.secondOperand) {
        return true;
    }
}
function displayScreen() {
    display.innerHTML = calc.curValue;
    if (calc.result) {
        display.innerHTML = `=${calc.result}`;
    }
    if (calc.result && CurIsOperator() && (!calc.seintificMode)) {
        display.innerHTML = calc.curValue;
    }
}
function clearDisplay() {
    display.innerHTML = "";
}
function logHistory() {
    const historyBox = document.querySelector("#display-log");
    if (calc.seintificMode) {
        historyBox.innerHTML += calc.curValue;
        historyBox.innerHTML += ` = ${calc.result}</br>`;
        calc.output += ` = ${calc.result}`;
    }
    else {
        historyBox.innerHTML += `${calc.output}</br>`;
    }
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
        displayScreen();
    }
}
function sciCalculete() {
    let ans = calc.curValue.replace("x", "*");
    calc.result = eval(ans);
    logHistory();
    displayScreen();
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
    if (!calc.seintificMode) {
        calculete();
    }
    else {
        sciCalculete();
    }
    displayScreen();
    calc.curValue = String(calc.result);
    calc.curOperator = "";
    calc.firstOperand = calc.result;
    displayScreen();
    calc.secondOperand = "";
    calc.result = "";
    calc.output = "";
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
    if (!calc.seintificMode) {
        if (calc.firstOperand.length > 1 && !calc.curOperator) {
            calc.firstOperand = calc.firstOperand.slice(0, -1);
        }
        else if (!calc.curOperator) {
            calc.firstOperand = "";
        }
        if (calc.curOperator && !calc.secondOperand) {
            calc.curOperator = "";
        }
        if (calc.secondOperand.length > 1) {
            calc.secondOperand = calc.secondOperand.slice(0, -1);
        }
        else {
            calc.secondOperand = "";
        }
    }
    calc.curValue = calc.curValue.slice(0, -1);
    displayScreen();
}

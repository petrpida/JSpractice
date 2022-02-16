// najdi a dej do promenne vsechna tlacitka

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
const btnSubmit = document.getElementById("btnSubmit");
const display = document.getElementById("display");
const btnClear = document.getElementById("btnClear");
const btnBackspace = document.getElementById("btnBackspace");

// naprogramuj kazde tlacitko, aby na kliknuti vypsalo hodnotu do h1
let displayedNumber = [];
let number1 = [];
let number2 = [];

function clearArrays() {
  displayedNumber = [];
  number1 = [];
  number2 = [];
}

btn1.addEventListener("click", () => {
  displayedNumber.push("1");
  let str = displayedNumber.join("");
  display.innerText = str;
  if (str.match(/\D/)) { // /0-9/
    number2.push("1");
  } else {
    number1.push("1");
  }
});

btn2.addEventListener("click", () => {
  displayedNumber.push("2");
  let str = displayedNumber.join("");
  display.innerText = str;
  if (str.match(/\D/)) {
    number2.push("2");
  } else {
    number1.push("2");
  }
});

btn3.addEventListener("click", () => {
  displayedNumber.push("3");
  let str = displayedNumber.join("");
  display.innerText = str;
  if (str.match(/\D/)) {
    number2.push("3");
  } else {
    number1.push("3");
  }
});

btn4.addEventListener("click", () => {
  displayedNumber.push("4");
  let str = displayedNumber.join("");
  display.innerText = str;
  if (str.match(/\D/)) {
    number2.push("4");
  } else {
    number1.push("4");
  }
});

btn5.addEventListener("click", () => {
  displayedNumber.push("5");
  let str = displayedNumber.join("");
  display.innerText = str;
  if (str.match(/\D/)) {
    number2.push("5");
  } else {
    number1.push("5");
  }
});

btn6.addEventListener("click", () => {
  displayedNumber.push("6");
  let str = displayedNumber.join("");
  display.innerText = str;
  if (str.match(/\D/)) {
    number2.push("6");
  } else {
    number1.push("6");
  }
});

btn7.addEventListener("click", () => {
  displayedNumber.push("7");
  let str = displayedNumber.join("");
  display.innerText = str;
  if (str.match(/\D/)) {
    number2.push("7");
  } else {
    number1.push("7");
  }
});

btn8.addEventListener("click", () => {
  displayedNumber.push("8");
  let str = displayedNumber.join("");
  display.innerText = str;
  if (str.match(/\D/)) {
    number2.push("8");
  } else {
    number1.push("8");
  }
});

btn9.addEventListener("click", () => {
  displayedNumber.push("9");
  let str = displayedNumber.join("");
  display.innerText = str;
  if (str.match(/\D/)) {
    number2.push("9");
  } else {
    number1.push("9");
  }
});

btn0.addEventListener("click", () => {
  let str = displayedNumber.join("");

  if (str.match(/\D/) && number2.length > 0) {
    number2.push("0");
    displayedNumber.push("0");
    str = displayedNumber.join("");
    display.innerText = str;
  } else if (!str.match(/\D/) && number1.length > 0) {
    number1.push("0");
    displayedNumber.push("0");
    str = displayedNumber.join("");
    display.innerText = str;
  }
});

btnPlus.addEventListener("click", () => {
  let str = displayedNumber.join("");

  if (number1.length > 0 && !str.match(/\D/)) {
    displayedNumber.push("+");
    let str = displayedNumber.join("");
    display.innerText = str;
  }
});

btnMinus.addEventListener("click", () => {
  let str = displayedNumber.join("");

  if (number1.length > 0 && !str.match(/\D/)) {
    displayedNumber.push("-");
    let str = displayedNumber.join("");
    display.innerText = str;
  }
});

btnMultiply.addEventListener("click", () => {
  let str = displayedNumber.join("");

  if (number1.length > 0 && !str.match(/\D/)) {
    displayedNumber.push("*");
    let str = displayedNumber.join("");
    display.innerText = str;
  }
});

btnDivide.addEventListener("click", () => {
  let str = displayedNumber.join("");

  if (number1.length > 0 && !str.match(/\D/)) {
    displayedNumber.push("/");
    let str = displayedNumber.join("");
    display.innerText = str;
  }
});

btnSubmit.addEventListener("click", () => {
  if (number2.length > 0) {
    let number1String = number1.join("");
    let number2String = number2.join("");
    if (displayedNumber.includes("+")) {
      display.innerText = parseInt(number1String) + parseInt(number2String);
      clearArrays();
    } else if (displayedNumber.includes("-")) {
      display.innerText = parseInt(number1String) - parseInt(number2String);
      clearArrays();
    } else if (displayedNumber.includes("*")) {
      display.innerText = parseInt(number1String) * parseInt(number2String);
      clearArrays();
    } else if (displayedNumber.includes("/")) {
      display.innerText = parseInt(number1String) / parseInt(number2String);
      clearArrays();
    }
  }
});

btnClear.addEventListener("click", () => {
  clearArrays();
  display.innerText = "";
});

btnBackspace.addEventListener("click", () => {
  let str = displayedNumber.join("");

  if (!number2.length > 0 && !str.match(/\D/)) {
    number1.pop();
    displayedNumber.pop();
    display.innerText = displayedNumber.join("");
  } else {
    number2.pop();
    displayedNumber.pop();
    display.innerText = displayedNumber.join("");
  }
  console.log(number1)
  console.log(number2)
  console.log(displayedNumber)
  
});

// debug:
// 1. nula jako jedno cislo
// 2. obsah h1 preteka border, pokud je moc dlouhy
// https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content
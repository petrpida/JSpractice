// najdi a dej do promenne vsechna tlacitka

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btn0 = document.getElementById("btn0")
const btnPlus = document.getElementById("btnPlus")
const btnMinus = document.getElementById("btnMinus")
const btnMultiply = document.getElementById("btnMultiply")
const btnDivide = document.getElementById("btnDivide")
const btnSubmit = document.getElementById("btnSubmit")
const display = document.getElementById("display")

// naprogramuj kazde tlacitko, aby na kliknuti vypsalo hodnotu do h1
const displayedNumber = [];
const number1 = [];
const number2 = [];

btn1.addEventListener("click", () => {
    displayedNumber.push("1")
    let str = displayedNumber.join("")
    display.innerText = str;
    if (str.match(/\D/)) {
        number2.push("1")
    } else {
        number1.push("1")
    }
    console.log('number1 is' + ' ' + number1.join(""))
    console.log('number2 is' + ' ' + number2.join(""))
    console.log(displayedNumber)

})



btn2.addEventListener("click", () => {
    displayedNumber.push("2")
    let str = displayedNumber.join("")
    display.innerText = str;
    if (str.match(/\D/)) {
        number2.push("2")
    } else {
        number1.push("2")
    }
    console.log('number1 is' + ' ' + number1.join(""))
    console.log('number2 is' + ' ' + number2.join(""))
    console.log(displayedNumber)
})

btn3.addEventListener("click", () => {
    displayedNumber.push("3")
    let str = displayedNumber.join("")
    display.innerText = str;
})

btn4.addEventListener("click", () => {
    displayedNumber.push("4")
    let str = displayedNumber.join("")
    display.innerText = str;
})

btn5.addEventListener("click", () => {
    displayedNumber.push("5")
    let str = displayedNumber.join("")
    display.innerText = str;
})

btn6.addEventListener("click", () => {
    displayedNumber.push("6")
    let str = displayedNumber.join("")
    display.innerText = str;
})

btn7.addEventListener("click", () => {
    displayedNumber.push("7")
    let str = displayedNumber.join("")
    display.innerText = str;
})


btn8.addEventListener("click", () => {
    displayedNumber.push("8")
    let str = displayedNumber.join("")
    display.innerText = str;
})

btn9.addEventListener("click", () => {
    displayedNumber.push("9")
    let str = displayedNumber.join("")
    display.innerText = str;
})

btn0.addEventListener("click", () => {
    displayedNumber.push("0")
    let str = displayedNumber.join("")
    display.innerText = str;
})

btnPlus.addEventListener("click", () => {
    displayedNumber.push("+")
    let str = displayedNumber.join("")
    display.innerText = str;
    console.log(displayedNumber)

})

btnMinus.addEventListener("click", () => {
    displayedNumber.push("-")
    let str = displayedNumber.join("")
    display.innerText = str;
    console.log(displayedNumber)

})

btnMultiply.addEventListener("click", () => {
    displayedNumber.push("*")
    let str = displayedNumber.join("")
    display.innerText = str;
    console.log(displayedNumber)

})

btnDivide.addEventListener("click", () => {
    displayedNumber.push("/")
    let str = displayedNumber.join("")
    display.innerText = str;
    console.log(displayedNumber)

})

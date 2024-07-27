function add() {
  return parseInt(aNumber) + parseInt(bNumber);
}
function sub() {
  return aNumber - bNumber;
}
function mult() {
  return aNumber * bNumber;
}
function divide() {
  return aNumber / bNumber;
}
function ce() {
  display.textContent = 0;
  upperDisplay.textContent = null;
  upperDisplaySecond.textContent = null;
  input.value = null;
}

let aNumber = null;
let bNumber = null;
let operator = null;

const input = document.querySelector("input");
const equal = document.querySelector("#equal");
const buttons = document.querySelector("#buttons");
const addButton = document.querySelector("#add");
const subButton = document.querySelector("#sub");
const multButton = document.querySelector("#mult");
const divideButton = document.querySelector("#divide");
const ceButton = document.querySelector("#ce");
const digits = document.querySelector("#digits");
const display = document.querySelector("#screen");
const upperDisplay = document.querySelector("#upperScreen");
const upperDisplaySecond = document.querySelector("#upperScreenSecond");

digits.addEventListener("click", (event) => {
  input.focus();
  let target = event.target;
  switch (target.id) {
    case "one":
      input.value += 1;

      break;
    case "two":
      input.value += 2;

      break;
    case "three":
      input.value += 3;
      break;
    case "four":
      input.value += 4;
      break;
    case "five":
      input.value += 5;
      break;
    case "six":
      input.value += 6;
      break;
    case "seven":
      input.value += 7;
      break;
    case "eight":
      input.value += 8;
      break;
    case "nine":
      input.value += 9;
      break;
    case "zero":
      input.value += 0;
      break;
  }
  display.textContent = input.value;
});

buttons.addEventListener("click", (event) => {
  let target = event.target;
  switch (target.id) {
    case "add":
      operator = "add";
      aNumber = input.value;
      upperDisplay.textContent = input.value + "+";
      break;
    case "sub":
      operator = "sub";
      aNumber = input.value;
      upperDisplay.textContent = input.value + "-";
      break;
    case "mult":
      operator = "mult";
      aNumber = input.value;
      upperDisplay.textContent = input.value + "x";
      break;
    case "divide":
      operator = "divide";
      aNumber = input.value;
      upperDisplay.textContent = input.value + "/";
      break;
    case "ce":
      ce();
      break;
  }
  aNumber = input.value;
  // display.textContent = input.value;
  input.value = "";
  input.focus();
});

equal.addEventListener("click", function operate() {
  bNumber = input.value;
  upperDisplaySecond.textContent = input.value;
  input.value = "";
  switch (operator) {
    case "add":
      add();
      display.textContent = add();
      break;
    case "sub":
      sub();
      display.textContent = sub();
      break;
    case "mult":
      mult();
      display.textContent = mult();
      break;
    case "divide":
      divide();
      display.textContent = divide();
      break;
  }
  input.focus();
});

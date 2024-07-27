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

let aNumber = 6;
let bNumber = 2;
let operator = null;

const input = document.querySelector("input");
const equal = document.querySelector("#equal");
const buttons = document.querySelector("#buttons");
const addButton = document.querySelector("#add");
const subButton = document.querySelector("#sub");
const multButton = document.querySelector("#mult");
const divideButton = document.querySelector("#divide");
const ceButton = document.querySelector("#ce");

buttons.addEventListener("click", (event) => {
  console.log("One of the button pressed");

  let target = event.target;
  switch (target.id) {
    case "add":
      console.log("add pressed");
      operator = "add";
      console.log(operator);
      aNumber = input.value;
      break;
    case "sub":
      console.log("sub pressed");
      operator = "sub";
      console.log(operator);
      aNumber = input.value;
      break;
    case "mult":
      console.log("mult pressed");
      operator = "mult";
      console.log(operator);
      aNumber = input.value;
      break;
    case "divide":
      console.log("divide pressed");
      operator = "divide";
      console.log(operator);
      break;
    case "ce":
      input.value = "";
      aNumber = null;
      break;
  }
  aNumber = input.value;
  console.log(aNumber);
  input.value = "";
  input.focus();
});

equal.addEventListener("click", function operate() {
  console.log("equal pressed");
  bNumber = input.value;
  input.value = "";
  switch (operator) {
    case "add":
      add();
      console.log(add());
      break;
    case "sub":
      sub();
      console.log(sub());
      break;
    case "mult":
      mult();
      console.log(mult());
      break;
    case "divide":
      divide();
      console.log(divide());
      break;
  }
});

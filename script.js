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

// buttons.addEventListener('click', (event) => {
//   let target = event.target;
//   switch (target.id) {

//   }

buttons.addEventListener("click", (event) => {
  console.log("One of the button pressed");

  let target = event.target;
  switch (target.id) {
    case "add":
      console.log("add pressed");
      operator = "add";
      console.log(operator);
      aNumber = input.value;
      input.value = "";
      break;
    case "sub":
      console.log("sub pressed");
      operator = "sub";
      console.log(operator);
      aNumber = input.value;
      input.value = "";
      break;
    case "mult":
      console.log("mult pressed");
      operator = "mult";
      console.log(operator);
      aNumber = input.value;
      input.value = "";
      break;
    case "divide":
      console.log("divide pressed");
      operator = "divide";
      console.log(operator);
      aNumber = input.value;
      input.value = "";
      break;
  }
  console.log(aNumber);
});

// addButton.addEventListener("click", () => {
//   console.log("add button pressed");
//   operator = "add";
//   console.log(operator);
//   aNumber = input.value;
//   input.value = "";
//   console.log(aNumber);
// });

equal.addEventListener("click", function operate() {
  console.log("equal pressed");
  bNumber = input.value;
  input.value = "";
  switch (operator) {
    case "add":
      add();
      console.log(add());
      console.log("it was add");
    case "sub":
      sub();
    case "mult":
      mult();
    case "divide":
      divide();
  }
});

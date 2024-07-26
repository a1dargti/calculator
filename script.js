function add() {
  return aNumber + bNumber;
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
let bNumber = 3;
let operator = "divide";

function operate() {
  switch (operator) {
    case "add":
      return add();
    case "sub":
      return sub();
    case "mult":
      return mult();
    case "divide":
      return divide();
  }
}

console.log(operate());

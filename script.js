let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;


let dvalue = "";


let res = document.querySelector('#result')
let buttons = Array.from(document.querySelectorAll('.number,.operator'))
console.log(buttons);


let numArr = [];
let opArr = [];
let temp = "";

buttons.forEach(function (userItem) {
  userItem.addEventListener("click", function () {
    if (opArr[0] === undefined && numArr[0] === undefined && parseInt(userItem.textContent) !== parseInt(userItem.textContent) && dvalue == "") {
      opArr.push(userItem.textContent);
    } else if (userItem.className==="number") {
      if (parseInt(temp) !== parseInt(temp)&& userItem.textContent!==".") { temp = "" };
      temp = temp.toString() + userItem.textContent;
    } else {
      console.log(temp);
      if (numArr === undefined) {
        temp = userItem.textContent;
        opArr.push(temp);
        temp = "";
      }
      if (parseFloat(temp) === parseFloat(temp)||temp.includes(".")) {
        numArr.push(temp);
        temp = userItem.textContent;
        opArr.push(temp);
      } else return;
    }
    dvalue += userItem.textContent;
    res.textContent = dvalue;



  })
});


function operate() {




  dvalue = "";
  console.log("boop");
  numArr.push(temp);
  temp = "";
  let op = parseFloat(numArr[0]);
  console.log(numArr);
  console.log(opArr);
  if (numArr.length > opArr.length) {
    for (i = 0; i < opArr.length; i++) {
      switch (opArr[i]) {
        case "+":
          op = add(parseFloat(op), parseFloat(numArr[i + 1]));
          break;
        case "*":
          op = multiply(parseFloat(op), parseFloat(numArr[i + 1]));
          break;
        case "-":
          op = subtract(parseFloat(op), parseFloat(numArr[i + 1]));
          break;
        case ":":
          op = divide(parseFloat(op), parseFloat(numArr[i + 1]));
          break;
      }
    }
    res.textContent = op;
  } else {
    numArr[0] = opArr[0] + numArr[0];
    op = parseInt(numArr[0]);
    for (i = 0; i < opArr.length - 1; i++) {
      switch (opArr[i + 1]) {
        case "+":
          op = add(parseFloat(op), parseInt(numArr[i + 1]));
          break;
        case "*":
          op = multiply(parseFloat(op), parseInt(numArr[i + 1]));
          break;
        case "-":
          op = subtract(parseFloat(op), parseInt(numArr[i + 1]));
          break;
        case ":":
          op = divide(parseFloat(op), parseInt(numArr[i + 1]));
          break;
      }
    }
    res.textContent = op;
  }
  numArr.forEach(element => {
    let howManyDots = (element.match(/\./g)||[]).length;
    if(howManyDots>1){
      delet();
      res.textContent="Syntax error";
    }
  });
  numArr = [];
  opArr = [];


}

let equalButton = document.querySelector('#equals');
equalButton.addEventListener("click", operate);


function delet() {
  dvalue = "";
  temp = "";
  numArr = [];
  opArr = [];
  res.textContent=dvalue;
}

let deletButton = document.querySelector('#delet');
deletButton.addEventListener("click", delet);
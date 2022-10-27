let a = ""; 
let b = ""; 
let operation = "";
let signForPersentage = ""; 
let finish = false;
let result;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/", "+/-", "%", "xy"];
let display = document.querySelector(".display");


const out = document.querySelector(".screenResult p");

function clearAll() {
  a = ""; 
  b = ""; 
  operation = ""; 
  finish = false;
  out.textContent = 0;
}

document.querySelector("#clear").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {

  if (!event.target.classList.contains("btn")) return;

  if (event.target.classList.contains("clear")) out.textContent = "";

  const key = event.target.textContent;


  if (digit.includes(key)) {
    if (b === "" && operation === "") {
      if (String(a).includes(".") && key === ".") {
      } else if (
        !String(a).includes(".") &&
        key === "0" &&
        String(a)[0] == "0"
      ) {
      } else {
        a += key;
        out.textContent = a;
      }
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      if (String(b).includes(".") && key === ".") {
      } else if (key === "." && operation == "xy") {
      } else {
        b += key;
        out.textContent = b;
      }
    }
    console.table(a, b, operation);
    signForPersentage = operation;
    return;
  }


  if (key == "%") {
    operation = key;
    console.table(a, b, signForPersentage, operation);
    return;
  } else if (key == "+/-") {
    if (out.textContent == a) {
      a = Number(a) * -1;
      out.textContent = a;
    } else {
      b = Number(b) * -1;
      out.textContent = b;
    }
  } else if (action.includes(key)) {
    operation = key;
    out.textContent = operation;
    console.table(a, b, operation);
    return;
  }


  if (key === "=") {
    if (b === "") b = a;
    switch (operation) {
      case "+":
        result = +a + +b;
        break;
      case "-":
        result = a - b;
        break;
      case "x":
        result = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Error";
          a = "";
          b = "";
          operation = "";
          return;
        }
        result = a / b;
        break;
      case "xy":
        result = Math.pow(a, b);
        break;
      case "%":
        let percentValue = a / 100;
        let percentResult = percentValue * b;
        if (signForPersentage == "+") {
          result = Number(a) + Number(percentResult);
          break;
        } else if (signForPersentage == "-") {
          result = Number(a) - Number(percentResult);
          break;
        }
    }
    finish = true;
    out.textContent = result;
    console.table(a, b, operation, signForPersentage);
  }
};

const observer = new MutationObserver(function (mutations) {
  if (a.toString().length > 7 && a.toString().length <= 9) {
    out.style.fontSize = "5rem";
  } else if (a.toString().length > 9) {
    out.textContent = "Error";
  } else if (b.toString().length > 7 && b.toString().length <= 9) {
    out.style.fontSize = "5rem";
  } else if (b.toString().length > 9) {
    out.textContent = "Error";
  } else {
    out.style.fontSize = "7rem";
  }
});
observer.observe(out, { childList: true });

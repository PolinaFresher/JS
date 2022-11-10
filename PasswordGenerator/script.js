const result = document.getElementById("password");
const lengthPassword = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generateButton = document.getElementById("generateBtn");
const copyButton = document.getElementsByClassName("btnCopy");
const symbols = "!@#$%&*()_+-{}[];:,.?";
const checkBox = document.querySelectorAll(".checkbox");
const arrow = document.querySelector(".arrow");

const random = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateButton.addEventListener("click", () => {
  const setLength = +lengthPassword.value;
  const addLower = lowercase.checked;
  const addUpper = uppercase.checked;
  const addNumber = number.checked;
  const addSymbol = symbol.checked;

  if (!addLower && !addUpper && !addNumber && !addSymbol) {
    reminder();
  } else {
    result.innerText = generatePassword(
      addLower,
      addUpper,
      addNumber,
      addSymbol,
      setLength
    );
  }


  function reminder() {
    let div = document.createElement("div");
    div.className = "reminder";
    div.innerHTML =
      "<p>Please, use the settings below to specify the length and character parameters desired for generating your random password.</p>";
    document.body.append(div);
    arrow.style.display = "block";
  }
});

const onCheck = (elem) => {
  if (elem.target.checked) {
    document.querySelector(".reminder").remove();
  }
  arrow.style.display = "none";
};
checkBox.forEach((el) => el.addEventListener("change", onCheck));

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const selectedOptions = lower + upper + number + symbol;
  const optionsArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (selectedOptions === 0) {
    return "";
  }

  for (let i = 0; i < length; i += selectedOptions) {
    optionsArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += random[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

let btn = document.querySelector("#btnCopy");
let text = document.querySelector("#password");


btn.addEventListener("click", () => {
  text.disabled = false;
  text.select();
  text.setSelectionRange(0, 99999);
  document.execCommand("copy");
  copyButton.onclick = box.style.display="block"
  document.getSelection().removeAllRanges();
  text.disabled = true; 

 
});


const alert = document.createElement("div")

function copied() {
  
if (result.innerHTML == ' ') {
  alert.style.display="none"
} else {
  alert.style.display="block"
  alert.classList.add("copied"); 
  alert.textContent = "Password copied to clipboard!" 
  document.body.appendChild(alert)
}

}


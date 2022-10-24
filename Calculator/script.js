const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eigth = document.querySelector("#eigth")
const nine = document.querySelector("#nine")
const clear = document.querySelector("#clear")
const percentage = document.querySelector("#percentage")
const exponent = document.querySelector("#exponent")
const point = document.querySelector("#point")
const division = document.querySelector("#division")
const myltiply = document.querySelector("#myltiply")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const equals = document.querySelector("#equals")
const negative = document.querySelector("#negative")

let display = document.querySelector('.display')


let a = 0;
let b = 0;
let result = 0;
let action = "";




let digits = [zero,one,two,three,four,five,six,seven,eigth,nine,point,negative,percentage,exponent,division,myltiply,minus,plus]
function addDigits (digits) {
   digits.forEach ( digit => getA(digit))
}



function getA(digit) {
    digit.addEventListener("click", function() {
        if( display.innerText !== 0 && digit.innerText == '+/-'){
            a = Number(display.innerText) * (-1)
            display.innerHTML = Number(a)
        }
        else if(display.innerText == 0 && digit.innerText !== '+/-'){
            a = digit.innerText
            display.innerHTML = a
        } else if(display.innerText.includes('.') && digit.innerText == '.') {

        } else if (digit.innerText == '%') {
            a = Number (display.innerText) / 100;
            display.innerHTML = a;
        } else if (digit.innerText == "xy"){
            a = Number (display.innerText)
            display.innerHTML = 0
            action = "xy"
        } else if (digit.innerHTML == "/"){
            a = Number (display.innerText);
            display.innerHTML = 0;
            action = "/";
            b = Number (display.innerText);
            display.innerHTML = 0;
            


        }else if (digit.innerHTML == "x"){
            a = Number (display.innerText)
            display.innerHTML = 0
            action = "X"
        }else if (digit.innerHTML == "-"){
            a = Number (display.innerText)
            display.innerHTML = 0
            action = "-"
        }else if (digit.innerHTML == "+"){
            a = Number (display.innerText)
            display.innerHTML = 0
            action = "+"
        // } else if (action == ""){
        //     console.log("1111111")
        //     a = display.innerText + digit.innerText
        //     display.innerHTML = a;
        // }else if (action !== ""){
        //     console.log("222")
        //     b = display.innerText + digit.innerText
        //     display.innerHTML = b;
        // }
    } else {
        a = display.innerText + digit.innerText
            display.innerHTML = a;


    }
    })
}


equals.addEventListener("click", function(){
    printResult();
})

function printResult(){
    if (action == "xy"){
        b = display.innerText
        result = Math.pow(Number(a),Number(b))
        display.innerHTML = result;
        console.log(a)
        console.log(b)
    } else if (action == "/"){
        b = display.innerText
        result = Number(a) / Number(b)
        display.innerHTML = result;
        console.log(a)
        console.log(b)
    }else if (action == "x"){
        b = display.innerText
        result =Number(a) * Number(b)
        display.innerHTML = result;
        console.log(a)
        console.log(b)
    }else if (action == "-"){
        b = display.innerText
        result =Number(a) - Number(b)
        display.innerHTML = result;
        console.log(a)
        console.log(b)
    }else if (action == "+"){
        b = display.innerText
        console.log(action)
        console.log(a)
        console.log(b)
        result =Number(a) + Number(b)
        display.innerHTML = result;
    }
    
}


window.onload = addDigits(digits);


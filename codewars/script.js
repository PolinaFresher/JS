
//1
    //8 kyu
    //Multiply

    function multiply(a, b){
    return  a * b
    }
//2 
    //8 kyu
    //Even or Odd
    function even_or_odd(number) {
    if (number % 2 === 0){
    return "Even";
    } else {
    return "Odd";
    }
    };

//4 
    //8 kyu
    //Convert a String to a Number!

    function maps(x){
    return x.map(i => i*2)
    maps(x)
    }
//5 
    //    8 kyu
    // Convert a String to a Number!

    const stringToNumber = function(str){

    return Number(str);
    }
//6 
    //   8 kyu
    // Sum Arrays

    function sum (numbers) {
    "use strict";
    if (numbers.length === 0){
    return 0;
    } else{
    let sum = 0;
    numbers.map((item) => sum += item);
    return sum;}

    };
//7
    // //8 kyu
    // Calculate BMI

    function bmi(weight, height) {
    let bmiValue = weight / (height*height)
    if ( bmiValue <= 18.5) {
    return "Underweight";

    } else if ( bmiValue >= 18.5 &&  bmiValue <= 25.0) {
    return "Normal";

    } else if( bmiValue  >=25.0 &&  bmiValue <=30.0) {
    return "Overweight";

    } else if ( bmiValue >= 30.0) {
    return "Obese";       
    } else {

    return ""
    }
    };
//8
    //   8 kyu
    // Filter out the geese

    function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(i=> !geese.includes(i))
    };

//9
    //   8 kyu
    // Beginner - Reduce but Grow

    function grow(x){
    return x.reduce((a,b)=> a*b)

    grow(x)
    }

//10
    //     8 kyu
    // Opposite number

    function opposite(number) {
    return number * (-1)     
    }

//11
    //    7 kyu
    // List Filtering

    function filter_list(l) {

    let newList = l.filter((item)=> {
    if(item !== String(item))  { 
    return true      
    } else {
    return false
    }
    })
    return newList;
    }
//12
    //   8 kyu
    // Basic Mathematical Operations

    function basicOp(operation, value1, value2)
    {
    if(operation == "+") {
    return value1 + value2
    } else if (operation == "-") {
    return value1 - value2
    } else if (operation == "*") {
    return value1 * value2 
    } else if (operation == "/") {
    return value1 / value2 
    }

    }
//13
    // 8 kyu
    // Invert values

    function invert(array) {
    let newArr = []
    array.forEach(function (digit){
    if (digit => 0){
    newArr.push(digit * (-1));
    } else{
    newArr.push(digit * (1));
    }
    })
    return newArr;
    }
//14
    //   8 kyu
    // Array plus array

    function arrayPlusArray(arr1, arr2) {
    {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
    }

    return arr1 + arr2; 
    }
//14
//     7 kyu
// Friend or Foe?

function friend(friends){

  return friends.filter(element => element.length == 4);
}

//15

//7 kyu
//Regex validate PIN code

function validatePIN (pin) {
  if( pin.length !==4 && pin.length !==6) {
  return false
    }
  
for (let i = 0; i < pin.length; i++) {
    if (pin[i] > '9' || pin[i] < '0') {
       return false;
    }

  }
  return true;
}

//16
// 7 kyu https://www.codewars.com/kata/554b4ac871d6813a03000035
//Highest and Lowest

function highAndLow(numbers){
  array = numbers.split(" ")
  var numArray = new Int32Array(array).sort();
  return String(numArray[numArray.length - 1]) + " " + String(numArray[0])

}

//17
//6 kyu
//Create Phone Number

function createPhoneNumber(numbers){
  firstThree = numbers.slice(0,3)
  first = ""
  firstThree.forEach(element => {
  first = first + element
  });
  secondThree = numbers.slice(3,6)
  second =""
  secondThree.forEach(element => {
  second = second + element
  });
  lastFour = numbers.slice(6,10)
  third =""
  lastFour.forEach(element => {
  third = third + element
  });
  return "(" + first + ") " + second + "-" + third
}
//18
//6 kyu
//Counting Duplicates

function duplicateCount(text) {
    var nText = text.toLowerCase(); //this changes every character to lower case 
    var myObj = {}; // Declaring an empty object
    var counter = 0;
    for (var i = 0; i < nText.length; i++) {
    // assigning character as property and giving value 1 
        if (!myObj[nText[i]]){
            myObj[nText[i]] = 1;
        }//checking if character already added
        else if (myObj[nText[i]] < 2) {
            myObj[nText[i]] += 1;
            counter++;
        }
    }
    return counter;
}
//19
//6 kyu
//Find the odd int

function findOdd(numbers) {
  var count = 0;
  for(var i = 0; i<numbers.length; i++){
    for(var j = 0; j<numbers.length; j++){
      if(numbers[i] == numbers[j]){
        count++;
      }
    }
    if(count % 2 != 0 ){
      return numbers[i];
    }
  }
};

//20
//8 kyu
//Removing Elements


function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i+=2) {
    result.push(arr[i]);
  }
  return result;
}

//21
//8 kyu
//Convert a Number to a String!

function numberToString(num) {
  return String(num)
}

//22 
//8 kyu
//Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
  if(bool=== true) {
    return "Yes"
    }else {
      return "No"
    }
  
}

//23
//8 kyu
//Reversed Strings

function solution(str){
  return str.split("").reverse().join("");
}

//24
//8 kyu
//Function 1 - hello world

function greet(){
 return ("hello world!")
}

greet()

//25
//7 kyu
//Two to One

function longest(s1, s2) {
 return (s1 + s2).split('').filter(onlyUnique).sort().join('')
}
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

//26
// 8 kyu
// Is it even?

function testEven(n) {
  if  (n % 2 == 0 ){
    return true
  }else{
    return false
  }
}

//27
// 8 kyu

function sumStr(a,b) {
  if(a == ""){
    a = 0
  } else if (b == "")
    b == 0
  return String(Number(a)+Number(b))
}

//28
//7 kyu
// Fizz Buzz

function fizzbuzz(n)
{
  arr = Array.from({length: n}, (v, k) => k+1);
  for (i = 0; i < arr.length; i ++){
    if  (arr[i] % 3 == 0 && arr[i] % 5 == 0 ){
      arr[i] ='FizzBuzz'
      continue
    } else if (arr[i] % 3 == 0 ){
      arr[i] ='Fizz'
      continue
    } else if (arr[i] % 5 == 0 ){
      arr[i] ='Buzz'
      continue
    }
  }
  return arr
}

//29
//
// 7 kyu
// Vowel Count

function getCount(str) {
  if (str.indexOf('a') == -1  && str.indexOf('e') == -1  && str.indexOf('i') == -1  && str.indexOf('o') == -1  && str.indexOf('u') == -1){
    return 0
  } else {
    return str.match(/[aeiou]/gi).length
  }
}

//30
//7 kyu
// Largest Elements

function largest(n,xs){
  arr = []
  xs.sort(function(a, b) {
  return a - b;
  });
  if(n == 0){
    return arr
  }
  for (i = 1; i <= n  ; i++){
    arr.push(xs[xs.length - i])
  }
  arr.sort(function(a, b) {
  return a - b;
  });
  return arr
}

//31
//7 kyu
//You're a square!

var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0;
}

//32
//6 kyu
//Sum of Digits / Digital Root
function digitalRoot(n) {
if (n < 10) return n;
  return digitalRoot(
    n.toString().split('').reduce((acc, d) => {
      return acc + +d;
    },0));
}

//33
//6 kyu
//Bit Counting
var countBits = function(n) {
   return (n).toString(2).split('').reduce((sum, num) => sum + Number(num), 0);
};

//34
//6 kyu
//Unique In Order
var uniqueInOrder=function(iterable){
var arr = [];
    for (var i = 0; i <iterable.length; i++) {
    if (iterable[i] !== iterable[i+1]) {
      arr.push(iterable[i]);
    }
  }
  return arr;
}

//35
//5 kyu
//Moving Zeros To The End
function moveZeros(arr) {
for(var i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}

//36
//7 kyu
//The highest profit wins!
function minMax(arr){
   let arr1 = arr.sort((a,b) => {return a-b})
    let arr2 = []
    arr2.push(arr1[0], arr1[arr1.length-1])
    return arr2

}

//37
//7 kyu
//Sort arrays - 1
sortme = function( names ){
  return names.sort()
}

//38
//7 kyu
//Sum of odd numbers
function rowSumOddNumbers(n) {
  return n**3
}

//39
//7 kyu
//Shortest Word
function findShort(s){
  let words = s.split(' ');
  let arr = []
  words.forEach(element => arr.push(Number(element.length)));
  arr.sort(function(a, b) {
  return a - b;
  });
  return arr[0];
}

//40
//7 kyu
//Get the Middle Character
function getMiddle(s)
{
  if (s.lenght <= 1){
    return s
  }
  if (s.length % 2 == 0){
    return s.charAt(Number(s.length/2 - 1)) + s.charAt(Number(s.length/2))
  } else{
    return s.charAt(Number(s.length / 2))
  }
  
}

//41
//7 kyu
//Descending Order
function descendingOrder(n){
  const arr = Array.from(String(n), Number);
  arr.sort(function(a, b) {
  return a - b;
  });
  arr.reverse()
  arr.toString()
  return Number(arr.join(''))
}

//42
//7 kyu
//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
  
numbers.sort(function(a, b) {
  return a - b;
});
  return numbers[0]+numbers[1]
}

//43
//7 kyu
//Beginner Series #3 Sum of Numbers
function getSum( a,b )
{
  let count = 0;
  
  if (a == b) return a;
  
  if(a < b){
    for (; a <= b; a++){
      count += a;
    }
  } else if (a > b){
      for(; b <= a; b++){
        count += b;
      }
  }
  return count;
}

//44
//7 kyu
//Odd or Even?
function oddOrEven(array) {
  console.log(array)
  if(array.length == 0 ){
    return "even"
  }
  const arr = array.reduce((a,b)=>a+b)
  if(arr%2==0) {
    return "even"
  }else if(arr%2!==0) {
    return  "odd"
  } 
}

//45
//7 kyu
//Remove the minimum
function removeSmallest(numbers) {
  const copy = numbers.slice(0)
 let smallestValue = numbers.indexOf(Math.min(...numbers))

 copy.splice(smallestValue, 1);

return copy
}

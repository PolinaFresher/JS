//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.


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

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

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

//Very simple, given an integer or a floating-point number, find its opposite.

    function opposite(number) {
    return number * (-1)
        
    }

//Given a non-empty array of integers, return the result of multiplying the values together in order.

    function grow(x){
    return x.reduce((a,b)=> a*b)
        
        grow(x)
    }

//Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"


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

//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

    function sum (numbers) {
    "use strict";
    if (numbers.length === 0){
        return 0;
    } else{
    let sum = 0;
    numbers.map((item) => sum += item);
    return sum;}

    };

//We need a function that can transform a string into a number. 

    const stringToNumber = function(str){

    return Number(str);
    }

//Given an array of integers, return a new array with each value doubled.

    function maps(x){
    return x.map(i => i*2)
        maps(x)
    }

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

    function even_or_odd(number) {
    if (number % 2 === 0){
    return "Even";
    } else {
    return "Odd";
    } 
    };


//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

    function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(i=> !geese.includes(i))
    }

//This code does not execute properly. Try to figure out why.

    function multiply(a, b){
    return  a * b
    }

//1. Сделайте функцию, которая отнимает от первого числа второе и делит на
//третье. Числа передаются параметром.
let 
a=9;
b=5;
c=2;
function count(a,b,c) {
   return  sum=(a-b)/c ;  
}

console.log(count(a,b,c));


//2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
//передается параметром.


let d=5;
function cubedSquared(d) {


    let arr = [];
    cubed = d*d*d;
    arr.push(cubed);
    squared = d*d;
    arr.push(squared);
    return arr;
}

console.log(cubedSquared(d));


// 4. Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

arr4 = []
function getNumbers() {

    let number = prompt('Введите цифру')

    arr4.push(number)

    return arr4
    
}
console.log(arr4);


getNumbers()
getNumbers()
getNumbers()
getNumbers()
getNumbers()


// 5. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

// arr5 = [];
// function isEven() {
//     let e = prompt('Введите число')

//     arr5.push(e)
    

//     if (e%2 ===0) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
 
// }

// isEven()

     
function isEven(){
    let e = prompt("Введите число")
    if (e % 2 === 0){
        return true
    } else {
        return false
    }
 }

 console.log(isEven())




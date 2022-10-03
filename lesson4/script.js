// 1 задание

let arr =[1,2,3,4,5]
for(i=0; i < arr.length; i++) {

    console.log(arr[i])
}

// 2 задание

let arr2 = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7]
for(i=0; i < arr2.length; i++) {
    if (arr2[i] < -3 && arr2[i] > -10) {

        console.log(arr2[i])
    }
}

// 3 задание
// с помощью for

let arr3 =[];
let result = 0;

for ( i=26; i <= 57; i++) {
    arr3.push(i);

    result = result + i;
}
console.log(arr3);
console.log(result);


// с помощью while
let arr33=[];
i=26;
result2= 0;

while (i <= 57) {

    arr33.push(i);

    result2 = result2 + i;

    i++;
}
console.log(arr33);
console.log(result2);

// 4 задание

let arr4 = ['10','20','30','50','235','3000'];

for (i=0; i < arr4.length; i++) {
    if(arr4[i][0] == 1 || arr4[i][0] == 2 || arr4[i][0] == 5){
      console.log(arr4[i])
    }
}
    

// 5 задание


let arr5 =['ПН', 'ВТ', 'СР','ЧТ','ПТ','СБ','ВС']

for(i=0; i < arr5.length; i++) {

    document.write(arr5[i])
 
}



// 6 задание


    let fruits = [ 'apple', 'pineapple', 'pear', 'strawberry', 'orange' ];

        fruits.push('peach')

    console.log(fruits[fruits.length-1])


// 8 задание
    

let arr8=[12, false, 'Текст', 4, 2, -5, 0];

i=arr8.length-1;

while (i > 0) {
    console.log(arr8[i])
    i--;
}

console.log(arr8.reverse())


// 9 задание

let arr9 = [5, 9, 21, , , 9, 78, , , , 6]

for (i = 0; i < arr9.length; i++) {
    if(arr9[i]=== undefined) {
        console.log(arr9[i])
      }
}






    

console.log("1 задание    -------От 1 до 50------"); 
 
 let i = 1;
    while ( i <= 50 ) {
        console.log(i);
        i++;
    };

console.log("--------От 35 до 8-------");

    let a = 35;
    while ( a >= 8 ) {
        console.log(a);
        a--;
       
    };

 //   ----2 задание-----

    let b = 89;
    while ( b > 11 ) {

        b--;

        document.write( b + '<br>')
       
    };

console.log("3 задание    -------------Сумма чисел от 0 до 100-------------"); 

    let hundred = 100;
    let sum=0;
    
    for( let i = 0; i <= hundred; i++ ) {   

        sum += i;   
    }
    
    console.log(sum);


console.log("4 задание     -------------Сумма чисел каждого числа от 1 до 5-------------"); 

    let v=5;
    
    for( let i = 1; i <= v; i++ ) {  
        sum=0;

          for (let j = 1; j <= i; j++ ) {
              sum += j;
             }

   console.log (' сумма ' + v + ' = ' + sum )

    }

console.log("5 задание    -------------Чётные числа от 8 до 56-------------"); 
  

    for ( let w=8; w <= 56; w++ )  { 

        if ( w % 2 == 1 ) continue;

        console.log(w);
    };


    console.log("6 задание---------Таблица умнажения от 2 до 10----------")


   for ( let l = 2; l <= 10; l++ ) {

        mult=0;

      for ( let k = 1; k <= 10; k++ ) {

      mult= k * l; 
      console.log(l + '*' + k + '=', + mult );

       }
       console.log('...')
    }


    console.log("7 задание--------- n=1000 ----------")

    let n = 1000
    let s = 0

        do { 

            n = n / 2;
            s = s+1;
        }
        
        while(n > 50);

     console.log('Результат деления - ' + n , 'Кол-во итераций - ' + s);
     

  console.log("8 задание------------------")


     let number = 0;
     let total = 0;
     let count = 0;
     
     do{
         
        number = prompt("Введите число")
 
        if(Number(number)){
 
         total = total + Number(number)
 
         count = count+1;
 
        }else if(number !== 0){
 
         break;

        }
         
 
     } while(number !== 0 && number !== "" )
 
     console.log(count)
 
     console.log("Среднее арифмитическое - " + total/count)
     
     console.log("Сумма чисел - " + total)

console.log("------------------10 задание:a")

    let num = 456;
    num = String(num);

    for (i = 0; i < num.length; i ++ )
    {
        console.log(num[i]);
    }


console.log("------------------10 задание:b")

    console.log(num.length);




console.log("------------------10 задание:c")

    let value = 0;

    for (i = 0; i < num.length; i++)
    {
        value = value + Number(num[i]);
    }

    console.log(value);

console.log("------------------10 задание:d")

    let numViceVersa = '';
    
    for( i = num.length-1; i >= 0; i--) {
        numViceVersa += num[i];
    }
    console.log(numViceVersa);








 



document.write('1 Задание', '<br>') //  1 задание

 let 
     name =  'Полина';
     age = 27;
     city = 'Минск';
     phone = '+375 29 1111425';
     email = 'polina_3@icloud.com';
     company = '"блабла"';

     document.write 
         ('Меня зовут', " ", name, ".", " ", 
         'Мне', " ", age, ' лет', ".", 
         " ",'Я проживаю в городе', " ", city, " ",
         'и работаю в компании', company, ".", " ",
        'Мои контактные данные:'," ",  phone, " ",  " ", email);

document.write('<br>', '2 Задание', '<br>') //  2 задание

   let  yearOfBirth = 2022 - age;

   document.write (name, ' родилась в ', yearOfBirth, ' году','.')

 //  3 задание

     let 
     Number1 = prompt('Введите первую цифру');
     Number2 = prompt('Введите вторую цифру');
     Number3 = prompt('Введите третью цифру');
     Number4 = prompt('Введите четвёртую цифру');
     Number5 = prompt('Введите пятую цифру');
     Number6 = prompt('Введите шестую цифру');

    
    ( ( Number1 + Number2 + Number3) == (Number4 + Number5 + Number6) ) 
    ? alert('Да, суммы равны')
    : alert ('Нет, суммы не равны');

     //  4 задание

    let
    a1 = -3;

    if( a1 > 0) {
        console.log('Верно')
    }

    else{
        console.log('неверно')
    };


    //  5 задание
    
    let
     a = 10;
     b = 2;
     sum = a + b;
    console.log('Сумма чисел', a + b);
    console.log('Разность чисел', a - b);
    console.log('Произведение чисел', a * b);
    console.log('Частное', a / b);

    if (sum > 1) {
    console.log(sum * sum);
    } 

     //  6 задание


    if ((a > 2 &&  a < 11) || (b >= 6 && b < 14 )) {

    console.log('Верно');
        
    } else { 
        
    console.log('Неверно');
        
    };

 //  7 задание

    let n = prompt('Сколько сейчас минут?')

    if ( n < 15 ) {
        alert('Это первая четверть часа!')
    } 
    else if ( n >= 15 && n < 30 ) {
        alert('Это вторая четверть часа!')      
    }

    else if  ( n >= 30 && n < 45 ) {
      alert('Это третья четверть часа!')
    }

    else if ( n >= 45 && n < 60 ) {
      alert('Это четвёртая четверть часа!')
    };

    

 //  8 задание

    let day = prompt('Какой сегодня день?')
    

    if ( day >= 1 && day <= 10 ) {
       alert ('Это первая декада месяца')
    }
    else if  ( day > 10 && day <= 20 ) {
       alert ('Это вторая декада месяца')
    }
    else if ( day > 20 && day <= 31 ) {
       alert ('Это третья декада месяца')
    }

    else if ( day > 31 ) {
       alert ('Нет такого дня :(')
    }

    document.write('<br>','9 Задание', '<br>') //  9 задание
     

    let days = prompt('Введите количество дней для конвертации')


    let years = ( days / 365 )
    
    if (years < 1) {
        document.write( "Less than a year ", '<br>')
    }

    else {
        document.write ( years, " ",'year(s)', ".",'<br>')
    };

    let months = ( days / 31 ) 
    

    if (months < 1 ) {
        document.write( "Less than a month ",'<br>')
        
    } else {
        document.write(months," ", 'month(s)', ".",'<br>')
    };

    let weeks = ( days / 7 )

    if (weeks < 1 ) {
        document.write( "Less than a week ",'<br>')
        
    } else {
        document.write( weeks," ", 'week(s)', ".",'<br>') 
    };

    let hours = ( days * 24 )

     document.write( hours," ", 'hours', ".",'<br>');
   
    let  minutes = ( hours * 60)

     document.write( minutes," ", 'minutes', ".",'<br>');

    let  seconds = ( minutes * 60)

    document.write( seconds," ", 'secondes', ".",'<br>');

 //  10 задание

  let DayOfYear = prompt('Сколько прошло дней с начала года?')

  
  if(DayOfYear >= 1 && DayOfYear <= 31) {

      alert ('Январь');

  } else if (DayOfYear > 31 && DayOfYear <= 59) {

      alert ('Февраль');

  } else if (DayOfYear > 59 && DayOfYear <= 90) {

      alert ('Март');

  } else if (DayOfYear > 90 && DayOfYear <= 120) {

      alert ('Апрель');

  } else if (DayOfYear > 120 && DayOfYear <= 151) {

      alert ( 'Май' );

  } else if (DayOfYear > 151 && DayOfYear <= 181) {

      alert ('Июнь');

  } else if (DayOfYear > 181 && DayOfYear <= 212) {

      alert ( 'Июль' );

  } else if (DayOfYear > 212 && DayOfYear <= 243) {
      
      alert ( 'Август' );

  } else if (DayOfYear > 243 && DayOfYear <= 273) {

      alert ( 'Сентябрь' );

  } else if (DayOfYear > 273 && DayOfYear <= 304) {

      alert ( 'Октябрь' );

  } else if (DayOfYear > 304 && DayOfYear <= 334) {

      alert ( 'Ноябрь' );

  } else if (DayOfYear > 334 && DayOfYear <= 365) {
      alert ( 'Декабрь' );

  };

  let dayOfYear =  parseInt ( DayOfYear / 31 )
  

  switch  ( dayOfYear ) {
    case 1:
    case 2:
    case 12:     
    alert ('У вас зима!')   
    break;

    case 3:
    case 4:
    case 5:     
    alert ('У вас весна!')
       break;   

    case 6:
    case 7:
    case 8:     
    alert ('У вас лето!')
       break; 
       
    case 9:
    case 10:
    case 11:     
    alert ('У вас осень!')
       break;  
  };


  




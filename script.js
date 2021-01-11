function pow(x, n) {
    let result = 1;

    for (let i =0; i < n; i++) {
        result *=x;
    }

    return result;
}

    let x = prompt ('x?', '');
    let n = prompt ('n?', '');

    if (n < 0) {
     alert(`Power ${n} is not supported,
     please enter a non-negative integer number`);
    } else {
     alert( pow(x, n) );
    }

    if (n < 0) {
     alert(`Степень ${n} не поддерживаеться`);
    }

    let src =
    Рабочая группа TC39 организации Ecma international -
    это группа JavaScript-разработчиков, теоретиков и авторов движков JavaScript,
    которые вместе с сообществом занимаються поддержкой и развитием языка JavaScript.
    ;



if (
  id === 123 &&
  moonPhase === 'Waning Gibbous' &&
  zodiacSignal === 'Libra'
) {
  letTheSorceryBegin ();
}



function pow(x, n) {
   let result = 1;
   
   for (let i = 0; i < n; i++) {
      result *= x;
   }

   return result;
}



function pow(x, n) {
   let result = 1;

   for (let i = 0; i < n; i++) {
    result *= x; 
   }

    return result;
   }

   let x = prompt ('x?', '');
   let n = prompt ('n?', '');

   if (n <= 0) {
    alert(`Степень ${n} не поддерживаеться,
     введите целую степень, большую 0`);
   } else {
       alert ( pow(x, n) );
   }


function showPeime(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    
    //проверяем, являеться ли i простым числом
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}


//  let c = prompt ('Ведите Имя', ilya);
//  if ( c == 'Илья') {

//  let b = prompt ('ведите пароль',пароль);
//  if (b = 'Пароль'){

//   alert('Добро пожаловать , Илья');
//  } else if (b == '' || b == null){
//    alert ('Отмена');
// } else {
//    alert('Вы вели не правильный пароль');

//  }

//  } else if (c == '' || c == null) {
//    alert('Отмена')
//  } else {
//    alert('Вы вели не правильно имя')
//  }

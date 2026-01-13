// // ДЗ1

// let pasword = 'car';

// let newpasword = prompt("Введите пароль");


// if (pasword === newpasword) {console.log ("Пароль верный");
    
// } else {console.log ("Пароль не верный");
    
// }

// ДЗ2

// let c = Number(prompt("Введите любое число"));

// if (c >= 0 && c <= 10) { console.log("Верно");
    
// } else {console.log("Не верно");
    
// }

// ДЗ3


// let d = Number(prompt("Введите первое число"));
// let e = Number(prompt("Введите второе число"));

// if (d > 100 || e > 100) {console.log("Верно");
    
// } else { console.log("Не верно");
    
// }

// // ДЗ4

// let a = '2';
// let b = '3';

// console.log(Number(a) + Number(b)); 

// ДЗ5


// let monthNumber = Number(prompt("Введите месяц"));

// if (monthNumber > 12 || monthNumber < 1) {console.log("Такого месяца не существует");
    
// } else {
//     switch (monthNumber) {
//         case 12:
//         case 1:
//         case 2:
//             console.log("Зима");
//             break;
//         case 3:
//         case 4:
//         case 5:
//             console.log("Весна");
//             break;
//         case 6:
//         case 7:
//         case 8:
//             console.log("Лето");
//             break;
//         default:
//              console.log("Осень");
//         break;
//     }
// }

// СРАВНЕНИЕ СЛУЧАЙНЫХ ЧИСЕЛ

let nam = +prompt("Введите число");
let rand = Math.floor(Math.random()*100);

while (nam !== rand) {
  if (isNaN(nam)) {
    nam = +prompt("Пожалуйста, введите число:"); // Обработка неверного ввода
    continue; // Переходим к следующей итерации цикла
  }
  if (nam > rand) {
    console.log(`Ваше число больше на ${nam - rand}`);
  } else if (nam < rand) {
    console.log(`Ваше число меньше на ${rand - nam}`);
  }
  nam = +prompt("Попробуйте еще раз:"); // Перезапрашиваем число
}

console.log("Вы угадали! Ваше число равно загаданному.");


// Задание 1
function minCh (a, b) 
{
    if (a <= b) {
        console.log(`наименьшее число ${a}`);
        return a; 
       
    }
    else {
        console.log (`наименьшее число ${b}`);
        return b;
    }
}

minCh (6, 6);
minCh (3, 6);

// Задание 2
function compare (d) 
{
    if (d % 2 == 0) {
        console.log(`число ${d} четное`);
        return d; 
       
    }
    else {
        console.log (`число ${d} не четное`);
        return d;
    }
}

compare (6);
compare (3);

// Задание 3

function square (a) {
  console.log(`${a**2}`);
}

square(2);

function numeric (a) {
    return a**2;
}

numeric(6);

// Задание 4



function checkAge() {
    let v = +prompt("Сколько Вам лет?");
    if (v < 0) {console.log("Вы ввели неправильное значение");
        
    } else if (v >= 0 && v <= 12) {console.log("Привет, друг!");
        
    }
    else console.log("Добро пожаловать!"); 
}

checkAge();

// Задание 5

function nambe(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return "Одно или оба значения не являются числом";
    } else { 
        return x*y;        
    }
}
nambe(3, 5);


// Задание 6

let userInput = prompt("Введите число:");

function cubeNumber(input) {
  if (isNaN(input)) {
    return 'Переданный параметр не является числом';
  } else {
    let n = Number(input); 
    let cube = n ** 3; 
    return `n в кубе равняется ${cube}`;
  }
}

console.log(cubeNumber(userInput));

// Задание 7

let circle1 = {
  radius: 5,
  getArea: function() {
    return Math.PI * Math.pow(this.radius, 2);
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

let circle2 = {
  radius: 10,
  getArea: function() {
    return Math.PI * Math.pow(this.radius, 2);
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};
console.log(circle1.getArea());      
console.log(circle2.getPerimeter());

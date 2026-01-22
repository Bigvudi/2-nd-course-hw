// // ДЗ1


// let pasword = 'car';

// let newpasword = prompt("Введите пароль");


// if (pasword === newpasword) {console.log ("Пароль верный");
    
// } else {console.log ("Пароль не верный");
    
// }

// let i = 1;
// while (i <= 2) {
//     i++;
//     console.log("Привет");
// }



// ДЗ2


// let c = Number(prompt("Введите любое число"));

// if (c >= 0 && c <= 10) { console.log("Верно");
    
// } else {console.log("Не верно");
    
// }

// let q = 0;
// while (q < 5) {
//     q++;
//     console.log(q);
// }




// ДЗ3



// let d = Number(prompt("Введите первое число"));
// let e = Number(prompt("Введите второе число"));

// if (d > 100 || e > 100) {console.log("Верно");
    
// } else { console.log("Не верно");
    
// }

// let E = 6;
// while (E >= 6 && E <22) {
//     E++;
//     console.log(E);
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

// let nam = +prompt("Введите число");
// let rand = Math.floor(Math.random()*100);

// while (nam !== rand) {
//   if (isNaN(nam)) {
//     nam = +prompt("Пожалуйста, введите число:"); // Обработка неверного ввода
//     continue; // Переходим к следующей итерации цикла
//   }
//   if (nam > rand) {
//     console.log(`Ваше число больше на ${nam - rand}`);
//   } else if (nam < rand) {
//     console.log(`Ваше число меньше на ${rand - nam}`);
//   }
//   nam = +prompt("Попробуйте еще раз:"); // Перезапрашиваем число
// }

// console.log("Вы угадали! Ваше число равно загаданному.");


// // Задание 1
// function minCh (a, b) 
// {
//     if (a <= b) {
//         console.log(`наименьшее число ${a}`);
//         return a; 
       
//     }
//     else {
//         console.log (`наименьшее число ${b}`);
//         return b;
//     }
// }

// minCh (6, 6);
// minCh (3, 6);

// // Задание 2
// function compare (d) 
// {
//     if (d % 2 == 0) {
//         console.log(`число ${d} четное`);
//         return d; 
       
//     }
//     else {
//         console.log (`число ${d} не четное`);
//         return d;
//     }
// }

// compare (6);
// compare (3);

// // Задание 3

// function square (a) {
//   console.log(`${a**2}`);
// }

// square(2);

// function numeric (a) {
//     return a**2;
// }

// numeric(6);

// // Задание 4

// const obj = {
//   "Коля": '200',
//   "Вася": '300',
//   "Петя": '400'
// };

// for (let name in obj) {
//   console.log(`${name} — зарплата ${obj[name]} долларов`);
// }

// // ДЗ5
// let n = 1000;
// let num = 0;

// while (n >= 50) {
//     n = n / 2;
//     num++;
// }
// console.log("Конечное число", n);
// console.log("Количество циклов", num);


// // ДЗ6

// for (let fr = 4; fr <= 31; fr += 7) {
//     console.log(`Сегодня пятница, ${fr}-е число. Необходимо подготовить отчет.`);}

// function checkAge() {
//     let v = +prompt("Сколько Вам лет?");
//     if (v < 0) {console.log("Вы ввели неправильное значение");
        
//     } else if (v >= 0 && v <= 12) {console.log("Привет, друг!");
        
//     }
//     else console.log("Добро пожаловать!"); 
// }

// checkAge();

// // Задание 5

// function nambe(x, y) {
//     if (isNaN(x) || isNaN(y)) {
//         return "Одно или оба значения не являются числом";
//     } else { 
//         return x*y;        
//     }
// }
// nambe(3, 5);


// // Задание 6

// let userInput = prompt("Введите число:");

// function cubeNumber(input) {
//   if (isNaN(input)) {
//     return 'Переданный параметр не является числом';
//   } else {
//     let n = Number(input); 
//     let cube = n ** 3; 
//     return `n в кубе равняется ${cube}`;
//   }
// }

// console.log(cubeNumber(userInput));

// // Задание 7

// let circle1 = {
//   radius: 5,
//   getArea: function() {
//     return Math.PI * Math.pow(this.radius, 2);
//   },
//   getPerimeter: function() {
//     return 2 * Math.PI * this.radius;
//   }
// };

// let circle2 = {
//   radius: 10,
//   getArea: function() {
//     return Math.PI * Math.pow(this.radius, 2);
//   },
//   getPerimeter: function() {
//     return 2 * Math.PI * this.radius;
//   }
// };
// console.log(circle1.getArea());      
// console.log(circle2.getPerimeter());

// HW6

// Случайные примеры

function task() {
  let a = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  const arithTask = ['+', '-', '*', '/'];
  
  // 4 — это количество знаков. Получаем индекс 0, 1, 2 или 3.
  let index = Math.floor(Math.random() * 4); 
  let operation = arithTask[index]; // Достаем сам знак: '+', '-', '*' или '/'

  // Считаем правильный ответ в зависимости от выбранного знака
  let result;
  if (operation === '+') result = a + b;
  else if (operation === '-') result = a - b;
  else if (operation === '*') result = a * b;
  else result = a / b;

  // Запрашиваем ответ
  let answer = +prompt(`Сколько будет ${a} ${operation} ${b}?`);

  // Проверяем ответ (переводим строку из prompt в число)
  if (answer === result) {
    alert('Ответ верный');
  } else {
    alert("Ответ не верный, попробуйте еще раз");
    task(a, b); 
  }
}

// Запуск функции
task();


// Задание1
// Дан массив: [1, 5, 4, 10, 0, 3].Создайте цикл, который будет
//  выводить элементы массива до тех пор, пока не встретит значение 10.
// После вывода значения 10 в консоль цикл должен прекратить свою работу.

const numbs = [1, 5, 4, 10, 0, 3]; 

for (i = 0; i < numbs.length; i++) {
  console.log(numbs[i]);
  if (numbs[i]===10) {
  break;
}
}

// Задание2
// Дан массив: [1, 5, 4, 10, 0, 3].
// Найдите индекс значения 4 в этом массиве.

const numbsMass = [1, 3, 5, 10, 20];
numbsMass.forEach((el, index) => {
   if (index === 4) {
      console.log(`${index}: ${el}`); 
   }
});

// Задание3
// Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через
// пробел (пустую строку ' ').

const numMass = [1, 3, 5, 10, 20];
let joinedMass = numMass.join(" ");
console.log(joinedMass);

// Задание4
// С помощью вложенных циклов создайте многомерный массив вида: 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

let matrix = []; 

for (let i = 0; i < 3; i++) {
  let row = []; 
  
  for (let j = 0; j < 3; j++) {
    row.push(1); 
  }
  
  matrix.push(row); 
}

console.log(matrix);

// Задание5
// Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

const mass = [1, 1, 1];
mass.push (2, 2, 2);
console.log(mass);

// Задание6
// Дан массив: [9, 8, 7, 'a', 6, 5].С помощью метода 
// sort отсортируйте массив и удалите букву 'a'
//  из массива. Затем выведите массив.

const sort = [9, 8, 7, 'a', 6, 5];
sort.sort();
console.log(sort);

const filtereSort = sort.filter(letter => typeof letter === 'string');
console.log(filtereSort);

// Задание7

// Дан массив: [9, 8, 7, 6, 5].
// Попросите пользователя угадать число с помощью метода 
// prompt. Если значение, которое ввел пользователь, есть
// в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».

let array = [1, 2, 3, 4, 5, 6];
let input = +prompt('Введите число');
let isFound = array.includes(input);
if (isFound) {alert("Угадал"); 
}
  else {alert("Не угадал");
}

// Задание8
// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.


let str = 'abcdef';
let res;
res = str.split('');
res.reverse();         
res = res.join('');   
console.log(res); 

// Задание9
// Дан массив: [[1, 2, 3],[4, 5, 6]]/
//  Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6]// 

const arr = [[1, 2, 3], [4, 5, 6]];
const flatArr = [].concat(...arr);
console.log(flatArr);

// Задание10
// Создайте массив с произвольными числами (диапазон от 1
//  до 10).
// Переберите его с помощью цикла for.
// // В каждой итерации выведите в консоль сумму
// //  текущего и следующего элементов массива.

const numbers = [2, 5, 8, 3, 6];

for (let i = 0; i < numbers.length; i++) {
  if (i === numbers.length - 1) {
    console.log(`Последний элемент ${numbers[i]} не имеет следующего`);
    break;
  }
  
  const sum = numbers[i] + numbers[i + 1];
  console.log(`Сумма: ${numbers[i]} + ${numbers[i + 1]} = ${sum}`);
}


// Задание11
// Создайте функцию, которая принимает на вход массив
//  целых чисел, а возвращает массив квадратов этих чисел.

function getSquares(numbers) {
  return numbers.map(num => num * num);
}

console.log(getSquares([1, 2, 3, 4, 5])); 
console.log(getSquares([3, 2, 0, 6])); 

// Задание12
// Создайте функцию, которая принимает на вход массив
// строк, а возвращает массив длины слов.

function getString(strings) {
return strings.map(str => str.length);
}

console.log(getString(['Vasya', 'Man', 'Ilya'])); 

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел,
// а возвращает массив, содержащий только отрицательные значения.

function getNegative(numbers) {
return numbers.filter(num => num < 0);
}

console.log(getNegative([1, -2, 3, -4, 5, -6]));

// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо
// сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
// В данном массиве найдите все четные значения и добавьте их в новый массив.
// Результат работы программы необходимо вывести в консоль — это будут два массива:
// исходный массив и массив с четными значениями.


const originalArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

const evenNumbers = originalArray.filter(num => num % 2 === 0);

console.log('Исходный массив:', originalArray);
console.log('Массив с четными значениями:', evenNumbers);


// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо
// сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

const randomArray = [];

// Заполняем массив случайными числами от 1 до 10
for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    randomArray.push(randomNumber);
}

let sum = 0;
for (let i = 0; i < randomArray.length; i++) {
    sum += randomArray[i];
}

const average = sum / randomArray.length;

console.log('Сумма элементов:', sum);
console.log('Среднее арифметическое:', average);


// Игра3
function reverseText() {
    let userInput = prompt("Введите текст, который нужно перевернуть:");
    if (userInput !== null) {
        let reversedText = userInput.split("").reverse().join("");
        alert("Ваш перевернутый текст:\n" + reversedText);
    }
}

// Игра4
function puzzle() {
    const quiz = [
        {
            question: "Какой цвет Солнца?",
            options: ["1. Желтый", "2. Белый", "3. Красный"],
            correctAnswer: 1
        },
        {
            question: "Сколько дней в високосном году?",
            options: ["1. 364", "2. 365", "3. 366"],
            correctAnswer: 3
        },
        {
            question: "Сколько дней во втором месяце года?",
            options: ["1. 28", "2. 29", "3. 30"],
            correctAnswer: 1
        }
    ];

    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        let message = quiz[i].question + "\n" + quiz[i].options.join("\n");
        let userAnswer = prompt(message + "\n\nВведите номер ответа:");

        if (parseInt(userAnswer) === quiz[i].correctAnswer) {
            correctCount++;
        }
    }

    alert(`Игра окончена! Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов.`);
  }
function guessNumber() {
  let rand = Math.floor(Math.random() * 101);
  let input = prompt("Угадайте число от 0 до 100:");

  // Проверка на отмену при первом вводе
  if (input === null) return;

  let nam = +input;

  while (nam !== rand) {
    if (nam > rand) {
      alert(`Ваше число больше на ${nam - rand}`);
    } else if (nam < rand) {
      alert(`Ваше число меньше на ${rand - nam}`);
    }
    
    input = prompt("Попробуйте еще раз:");
    
    // Проверка на отмену внутри цикла
    if (input === null) return;
    
    nam = +input;
  }

  alert("Вы угадали! Ваше число равно загаданному.");
}

// игра2
function task() {
  let a = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  const arithTask = ['+', '-', '*', '/'];
  
  let index = Math.floor(Math.random() * 4); 
  let operation = arithTask[index]; 

  let result;
  if (operation === '+') {
    result = a + b;
  } else if (operation === '-') {
    result = a - b;
  } else if (operation === '*') {
    result = a * b;
  } else {
    result = a; 
    a = a * b; 
  }

  let input = prompt(`Сколько будет ${a} ${operation} ${b}?`);

  if (input === null) return;

  let answer = +input;

  if (answer === result) {
    alert('Ответ верный');
  } else {
    alert("Ответ не верный, попробуйте еще раз");
    task();
  }
}

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

// Задание1
// Преобразовать строку 'js'в верхний регистр.

let stringText = 'js';
console.log(stringText.toUpperCase());

// Задание2
// Создать функцию, которая принимает массив строк и строку.
//  Функция должна вернуть новый массив, содержащий только
//   те элементы первого массива, которые начинаются со
//    второй строки. Регистр символов не влияет на результат.

function filterStrings(list, text) {
    let result = []; 
    let search = text.toLowerCase(); 

    for (let item of list) {
       if (item.toLowerCase().startsWith(search)) {
        result.push(item);
        }
    }
    return result;
}

const fruits = ['Яблоко', 'апельсин', 'ягода', 'Банан'];
console.log(filterStrings(fruits, 'я')); 

// задание3

// Округлить число 32.58884:

// До меньшего целого.
// До большего целого.
// До ближайшего целого.

let x = 32.58884;
console.log(Math.floor(x));
console.log(Math.ceil(x));
console.log(Math.round(x));

// Задание 4
// Найти минимальное и максимальное значения из 
// чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

const minmaxNumber = [52, 53, 49, 77, 21, 32];
const min = Math.min(...minmaxNumber);
const max = Math.max(...minmaxNumber);
console.log(min);
console.log(max);

// Задание 5
// Создать функцию, которая выводит в консоль
//  случайное число от 1 до 10.
function random() {
  return nambs =  Math.floor(Math.random()*11)
}
random();

// Задание 6
// Написать функцию, которая принимает целое
// число и возвращает массив случайных чисел
//  от 0 до этого числа. Длина массива должна 
// быть в два раза меньше переданного числа.

function nambsMass() {
  let d = +prompt("Введите целое число");
  let result = [];
  let count = Math.floor(d / 2);
  for (let i = 0; i < count; i++) {
    result.push(Math.floor(Math.random() * (d + 1)));
  }
  return result;
}
console.log(nambsMass());

// Задание 7
// Создать функцию, которая принимает два целых
//  числа и возвращает случайное число в этом диапазоне.

function newNambers(a, b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

console.log(newNambers(5, 15));

// Задание 8
// Вывести в консоль текущую дату.

console.log(Date());

// Задание 9
// Создать переменную 
// currentDate
// , хранящую текущую дату. Вывести дату, которая
// наступит через 73 дня после текущей.

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log("Дата через 73 дня:", currentDate.toDateString());


// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

function getFormattedDate(d) {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  const days = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'
  ];
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const weekday = days[d.getDay()];
  
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  
  return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

console.log(getFormattedDate(new Date()));

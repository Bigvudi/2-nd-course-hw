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


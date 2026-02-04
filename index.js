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

// игра5

function playHand() {
    // 1. Запрашиваем ввод
    let userHand = prompt("Введите камень, ножницы или бумага");
    const a = "камень";
    const b = "ножницы";
    const c = "бумага";

    if (userHand === null) return; //проверка на отмену

    userHand = userHand.toLowerCase();

    let variants = [a, b, c];
    let compHand = variants[Math.floor(Math.random() * variants.length)];

    if (userHand !== a && userHand !== b && userHand !== c) {
        alert("Вы ввели неверные данные. Пожалуйста, введите: камень, ножницы или бумага.");
    } 
    else if (userHand === compHand) {
        alert(`У нас ничья! Ваш выбор: ${userHand}, мой выбор: ${compHand}`);
    } 
    else if (
        (userHand === a && compHand === b) || // Камень бьет ножницы
        (userHand === b && compHand === c) || // Ножницы бьют бумагу
        (userHand === c && compHand === a)    // Бумага бьет камень
    ) {
        alert(`Вы победили! Ваш выбор: ${userHand}, мой выбор: ${compHand}`);
    } 
    else {
        alert(`Вы проиграли! Ваш выбор: ${userHand}, мой выбор: ${compHand}`);
    }
}

    // Игра6
    // Генератор цветов
    function randonBackground () {
    const backColorEl = document.querySelector('#randomcolor');
    backColorEl.addEventListener('click', (stop) => {
        stop.preventDefault(); // отменяет стандартное поведения ссылки якоря и страница не поднимается вверх
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        backColorEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    });
}
randonBackground(); 
// Задание1
//С помощью метода массива sort отсортируйте массив 
// people по возрастанию возраста и выведите результат в консоль.
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }];
people.sort((a, b) => a.age - b.age);;
console.log(people);

// Задание2

// Реализуйте функцию filter, которая должна работать аналогично методу массива 
// filter. Возьмите за основу функцию map, которую мы реализовывали на уроке.
// Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова 
// ruleFunction, принимать решение о том, добавлять в результирующий массив
//  очередной элемент или нет.

// Функция-правило: проверяет, является ли число положительным
function isPositive(number) {
    return number > 0;
}

// Функция-правило: проверяет, является ли человек мужчиной
function isMale(person) {
    return person.gender === 'male';
}

// Универсальная функция фильтрации
function filter(array, ruleFunction) {
    const result = []; // Создаем новый пустой массив для результата

    for (let i = 0; i < array.length; i++) {
        // Вызываем функцию-правило для текущего элемента
        // Если она возвращает true, добавляем элемент в результат
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

// Тест 1: Фильтрация чисел
console.log(filter([3, -4, 1, 9], isPositive)); 
// Ожидаемый вывод: [3, 1, 9]


const allPeople = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(allPeople, isMale)); 

// Задача3
function timer() {
    console.log(new Date());
}

// Запускаем интервал каждые 3 секунды
const goTimer = setInterval(timer, 3000);

// Через 30 секунд останавливаем интервал и пишем текст
setTimeout(function() {
    clearInterval(goTimer);
    console.log("30 секунд прошло");
}, 30000);

// Задание4
// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
// Допишите функцию delayForSecond так, чтобы приветствие выводилось в
//  консоль не сразу, а спустя 1 секунду. Используйте setTimeout.

function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(function() {
       callback();
   }, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// Задание5
// Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(function() {
    sayHi('Глеб');
});

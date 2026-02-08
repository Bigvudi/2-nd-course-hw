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
    function randomBackground () {
    const backColorEl = document.querySelector('#randomcolor');
    backColorEl.addEventListener('click', (stop) => {
        stop.preventDefault(); // отменяет стандартное поведения ссылки якоря и страница не поднимается вверх
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        backColorEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    });
  }

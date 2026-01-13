function guessNumber() {
    let nam = +prompt("Угадайте число от 0 до 100:");
    let rand = Math.floor(Math.random() * 100);
  

  while (nam !== rand) {
    if (nam > rand) {
      alert(`Ваше число больше на ${nam - rand}`);
    } else if (nam < rand) {
      alert(`Ваше число меньше на ${rand - nam}`);
    }
    nam = +prompt("Попробуйте еще раз:");
  }

  alert("Вы угадали! Ваше число равно загаданному.");
}

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

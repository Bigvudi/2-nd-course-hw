// ДЗ1

let pasword = 'car';

let newpasword = prompt("Введите пароль");


if (pasword === newpasword) {console.log ("Пароль верный");
    
} else {console.log ("Пароль не верный");
    
}

// ДЗ2

let c = Number(prompt("Введите любое число"));

if (c > 0 && c > 10) { console.log("Верно");
    
} else {console.log("Не верно");
    
}

// ДЗ3


let d = Number(prompt("Введите первое число"));
let e = Number(prompt("Введите второе число"));

if (d > 100 || e > 100) {console.log("Верно");
    
} else { console.log("Не верно");
    
}

// ДЗ4

let a = '2';
let b = '3';

console.log(Number(a) + Number(b)); 

// ДЗ5


let monthNumber = Number(prompt("Введите месяц"));

if (monthNumber > 12 || monthNumber < 1) {console.log("Такого месяца не существует");
    
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        default:
             console.log("Осень");
        break;
    }
}

// СРАВНЕНИЕ СЛУЧАЙНЫХ ЧИСЕЛ

let num = +prompt("Введите число");
// Сохраняем случайное число в переменную, чтобы оно не менялось при проверках
let target = Math.floor(Math.random()*100); 

if (num > target) { 
    console.log(`Ваше число больше на ${num - target}`);
} 
else if (num < target) {
    console.log(`Ваше число меньше на ${target - num}`); 
}
else {
    console.log("Ваше число равно загаданному");
}

// // // 1. Генерируем случайное целое число от 1 до 10
// let target = Math.floor(Math.random() * 10) + 1; 

// // 2. Просим ввести число в первый раз и запоминаем его навсегда
// const firstAttempt = +prompt("Это ваша первая попытка! Введите число от 1 до 10");
// let currentNum = firstAttempt; 

// // 3. Запускаем цикл, который будет работать, пока не угадаем
// while (currentNum !== target) {
//     // Подсказка с разницей
//     if (currentNum > target) {
//         alert(`Мимо! Число ${currentNum} больше загаданного на ${currentNum - target}.
// Ваше самое первое число было: ${firstAttempt}`);
//     } else {
//         alert(`Мимо! Число ${currentNum} меньше загаданного на ${target - currentNum}.
// Ваше самое первое число было: ${firstAttempt}`);
//     }

//     // Просим ввести новое число, чтобы продолжить цикл
//     currentNum = +prompt("Попробуйте еще раз:");
// }

// // 4. Победа
// alert(`Вы угадали! Это число ${target}. 
// // Начали вы с числа ${firstAttempt}, а закончили числом ${currentNum}.`);




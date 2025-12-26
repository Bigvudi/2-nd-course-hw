// ДЗ1

let pasword = 'car';

let newpasword = prompt("Введите пароль");


if (pasword === newpasword) {console.log ("Пароль верный");
    
} else {console.log ("Пароль не верный");
    
}

// ДЗ2

let c = Number(prompt("Введите любое число"));

if (c > 0 || c > 10) { console.log("Верно");
    
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





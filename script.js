// ДЗ1

let i = 1;
while (i <= 2) {
    i++;
    console.log("Привет");
}


// ДЗ2

let q = 0;
while (q < 5) {
    q++;
    console.log(q);
}



// ДЗ3


let E = 6;
while (E >= 6 && E <22) {
    E++;
    console.log(E);
}

// ДЗ4

let a = '2';
let b = '3';

console.log(Number(a) + Number(b)); 

// ДЗ5
let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}
console.log("Конечное число", n);
console.log("Количество циклов", num);


// ДЗ6

let d = 1;
while (d <= 31) {
    if (d == 5 || d == 12 || d == 19 || d == 26) {
        console.log(`сегодня пятница, ${d} число. Необходимо подготовить отчет.`);
    }
    d++; 
}




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

const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};

for (let name in obj) {
  console.log(`${name} — зарплата ${obj[name]} долларов`);
}

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

for (let fr = 4; fr <= 31; fr += 7) {
    console.log(`Сегодня пятница, ${fr}-е число. Необходимо подготовить отчет.`);}




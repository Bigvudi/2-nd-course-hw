function guessNumber() {
    let nam = +prompt("Угадайте число от 0 до 100:");
    let rand = Math.floor(Math.random() * 101);
  

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

// Задание1

const numbs = [1, 5, 4, 10, 0, 3]; 

for (i = 0; i < numbs.length; i++) {
  console.log(numbs[i]);
  if (numbs[i]===10) {
  break;
}
}

// Задание2

const numbsMass = [1, 3, 5, 10, 20];
numbsMass.forEach((el, index) => {
   if (index === 4) {
      console.log(`${index}: ${el}`); 
   }
});

// Задание3

const numMass = [1, 3, 5, 10, 20];
let joinedMass = numMass.join(" ");
console.log(joinedMass);

// Задание4

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

const mass = [1, 1, 1];

mass.push (2, 2, 2);

console.log(mass);

// Задание6

const sort = [9, 8, 7, 'a', 6, 5];
sort.sort();
console.log(sort);

const filtereSort = sort.filter(letter => typeof letter === 'string');
console.log(filtereSort);

// Задание7
// Вот простой массив чисел для примера
let array = [1, 2, 3, 4, 5, 6];
let input = +prompt('Введите число');

// Проверяем, есть ли число 5 в нашем массиве
let isFound = array.includes(input);

if (isFound) {alert("Угадал"); 
}
  else {alert("Не угадал");
}



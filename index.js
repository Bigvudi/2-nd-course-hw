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

// игра2
function task() {
  let a = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  const arithTask = ['+', '-', '*', '/'];
  
  let index = Math.floor(Math.random() * 4); 
  let operation = arithTask[index]; 

  let result;
  if (operation === '+') result = a + b;
  else if (operation === '-') result = a - b;
  else if (operation === '*') result = a * b;
  else result = a / b;

  let answer = +prompt(`Сколько будет ${a} ${operation} ${b}?`);

  if (answer === result) {
    alert('Ответ верный');
  } else {
    alert("Ответ не верный, попробуйте еще раз");
    task(a, b); 
  }
}


// Задание1
// Дан массив: [1, 5, 4, 10, 0, 3].Создайте цикл, который будет
//  выводить элементы массива до тех пор, пока не встретит значение 10.
// После вывода значения 10 в консоль цикл должен прекратить свою работу.

const numbs = [1, 5, 4, 10, 0, 3]; 

for (i = 0; i < numbs.length; i++) {
  console.log(numbs[i]);
  if (numbs[i]===10) {
  break;
}
}

// Задание2
// Дан массив: [1, 5, 4, 10, 0, 3].
// Найдите индекс значения 4 в этом массиве.

const numbsMass = [1, 3, 5, 10, 20];
numbsMass.forEach((el, index) => {
   if (index === 4) {
      console.log(`${index}: ${el}`); 
   }
});

// Задание3
// Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через
// пробел (пустую строку ' ').

const numMass = [1, 3, 5, 10, 20];
let joinedMass = numMass.join(" ");
console.log(joinedMass);

// Задание4
// С помощью вложенных циклов создайте многомерный массив вида: 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

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
// Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

const mass = [1, 1, 1];
mass.push (2, 2, 2);
console.log(mass);

// Задание6
// Дан массив: [9, 8, 7, 'a', 6, 5].С помощью метода 
// sort отсортируйте массив и удалите букву 'a'
//  из массива. Затем выведите массив.

const sort = [9, 8, 7, 'a', 6, 5];
sort.sort();
console.log(sort);

const filtereSort = sort.filter(letter => typeof letter === 'string');
console.log(filtereSort);

// Задание7

// Дан массив: [9, 8, 7, 6, 5].
// Попросите пользователя угадать число с помощью метода 
// prompt. Если значение, которое ввел пользователь, есть
// в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».

let array = [1, 2, 3, 4, 5, 6];
let input = +prompt('Введите число');
let isFound = array.includes(input);
if (isFound) {alert("Угадал"); 
}
  else {alert("Не угадал");
}

// Задание8
// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.


let str = 'abcdef';
let res;
res = str.split('');
res.reverse();         
res = res.join('');   
console.log(res); 

// Задание9
// Дан массив: [[1, 2, 3],[4, 5, 6]]/
//  Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6]// 

const arr = [[1, 2, 3], [4, 5, 6]];
const flatArr = [].concat(...arr);
console.log(flatArr);

// Задание10
// Создайте массив с произвольными числами (диапазон от 1
//  до 10).
// Переберите его с помощью цикла for.
// // В каждой итерации выведите в консоль сумму
// //  текущего и следующего элементов массива.

const numbers = [2, 5, 8, 3, 6];

for (let i = 0; i < numbers.length; i++) {
  if (i === numbers.length - 1) {
    console.log(`Последний элемент ${numbers[i]} не имеет следующего`);
    break;
  }
  
  const sum = numbers[i] + numbers[i + 1];
  console.log(`Сумма: ${numbers[i]} + ${numbers[i + 1]} = ${sum}`);
}


// Задание11
// Создайте функцию, которая принимает на вход массив
//  целых чисел, а возвращает массив квадратов этих чисел.

function getSquares(numbers) {
  return numbers.map(num => num * num);
}

console.log(getSquares([1, 2, 3, 4, 5])); 
console.log(getSquares([3, 2, 0, 6])); 

// Задание12
// Создайте функцию, которая принимает на вход массив
// строк, а возвращает массив длины слов.

function getString(strings) {
return strings.map(str => str.length);
}

console.log(getString(['Vasya', 'Man', 'Ilya'])); 

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел,
// а возвращает массив, содержащий только отрицательные значения.

function getNegative(numbers) {
return numbers.filter(num => num < 0);
}

console.log(getNegative([1, -2, 3, -4, 5, -6]));

// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо
// сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
// В данном массиве найдите все четные значения и добавьте их в новый массив.
// Результат работы программы необходимо вывести в консоль — это будут два массива:
// исходный массив и массив с четными значениями.


const originalArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

const evenNumbers = originalArray.filter(num => num % 2 === 0);

console.log('Исходный массив:', originalArray);
console.log('Массив с четными значениями:', evenNumbers);


// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо
// сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

const randomArray = [];

// Заполняем массив случайными числами от 1 до 10
for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    randomArray.push(randomNumber);
}

let sum = 0;
for (let i = 0; i < randomArray.length; i++) {
    sum += randomArray[i];
}

const average = sum / randomArray.length;

console.log('Сумма элементов:', sum);
console.log('Среднее арифметическое:', average);
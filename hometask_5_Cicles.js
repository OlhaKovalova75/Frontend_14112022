// //   1.Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let numberOf = [];
for (let i = 20; i <= 30; i = i + 0.5) {
  // numberOf += `${i} `;
  numberOf += i + " ";
}
console.log(numberOf);

// // 2.Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let currency = 27;
let price = [];
let sum = "";
for (let i = 10; i < 100; i = i + 10) {
  price = Number(i * currency);
  sum += `$${i} - ${price} грн `;
}
console.log(sum);

// // 3.Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let numberFull = 9515;
let array = "";
for (let i = 1; i <= 100; i++) {
  let square = i ** 2;

  if (square <= numberFull) {
    console.log(square / i);
  }
}

// 4.Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let numberSimple = +prompt("4. Input any number");
for (let i = 2; i <= numberSimple; i++) {
  let result1 =
    numberSimple / 1 === numberSimple ||
    numberSimple / i !== numberSimple ||
    numberSimple / numberSimple === 1;

  for (let k = 2; k < i; k++) {
    if (numberSimple % k == 0) {
      result1 = false;
      break;
    }
  }

  if (result1) {
    console.log(`${numberSimple} is an simple number`);
  } else if (result1 === false) {
    console.log(`${numberSimple} is an nonsimple number`);
  }
}

// 5.Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let number = +prompt("task 5.  Input nice number");
let numberBase = 3;

start: for (let i = 0; i <= number; i++) {
  let result = numberBase ** i;
  if (number === result) {
    console.log(`${number} = ${numberBase}x${i}`);
    break start;
  } else {
    console.log("try again");
  }
}

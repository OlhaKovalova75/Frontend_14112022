// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.
let element;
const array = [];
do {
  element = prompt("Input anything symbol");
  if (element) {
    array.push(element);
  }
} while (element);
alert(`First array ${array}`);
console.log(array);

const array2 = array.sort(function compareNumeric(a, b) {
  return a - b;
});
alert(`Sorted array ${array2}`);
console.log(array2);

const array3 = array2.splice(2, 3);
alert(`Deleted array ${array3}\\\\\\\final array ${array2}`);
console.log(array3, array2);

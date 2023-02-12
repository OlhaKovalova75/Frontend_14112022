// Реалізувати функцію генератор. Функція "Boo" повинна працювати так само , як "Foo"

// function* Foo() {
//   console.log("start");
//   yield 1;
//   yield 2;
//   yield 3;
//   console.log("finish");
// }

// let iterator = Foo();
// console.log(iterator.next()); // 1
// console.log(iterator.next()); // 1
// console.log(iterator.next()); // false
// console.log(iterator.next()); // false
// *******

// 1 варіант
let arr = ["start", 1, 2, 3, "finish"];
function Boo() {
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      console.log(`${arr[i]}, done: false `);
    } else {
      console.log(`${arr[i]} `);
    }
  }
  console.log(`done: true `);
}

const iterator = Boo();

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
let arr = ["start", 1, 2, 3, "finish"];
function Boo() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const iterator = Boo();
// console.log(iterator.next()); // 1
// console.log(iterator.next()); // 1
// console.log(iterator.next()); // false
// console.log(iterator.next()); // false

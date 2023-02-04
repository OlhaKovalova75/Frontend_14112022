// 1. Створити клас Людина.
// Властивості:
// імʼя// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.ShowPerson = function () {
    console.log(` ${name} is ${gender}`);
  };
}
let person1 = new Person("Kovalova", "female");
let person4 = new Person("Yurenko", "male");
let person2 = new Person("Ivanenko", "male");
let person3 = new Person("Mishanenko", "male");
person1.ShowPerson();
console.log(person1);
console.log(`Name is ${person1.name}`);
let persons = [];
persons.push(person1, person2, person3, person4);
console.log(persons);

// 2. Створити клас Квартира.

// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

function Flat(name, quantity) {
  this.rezidents = [];
  this.addRezident = function () {
    this.rezidents.push(persons);
  };
}

let flat1 = new Flat(persons[0]);
let flat2 = new Flat(persons[2]);

console.log(flat1);
flat1.addRezident();
console.log(flat2);
flat2.addRezident();

// 3. Створити клас Будинок.

// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.

function Building(quantity) {
  this.flats = [];
  this.quantity = 5;
  let i = 0;
  while (i < quantity) {
    i++;
    this.flats.push(flat1);
  }
}
let building = new Building(1);
console.log(building);

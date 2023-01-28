let button = document.querySelector(".button");
let submit = document.querySelector("#submit");
let formBase = document.querySelector(".formBase");
let formPopup = document.querySelector(".form_popup");
let closePopup = document.querySelector(".closePopup");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let radio = document.querySelector(".radio");

let item = document.querySelector(".item-block");
button.addEventListener("click", (event) => {
  event.preventDefault();
  formBase.classList.add("active");
  formPopup.classList.add("active");
});
closePopup.addEventListener("click", () => {
  formBase.classList.remove("active");
  formPopup.classList.remove("active");
});

// button.addEventListener("click", () => {
//   addRow(item.name.value, item.quantity.value, item.price.value);
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//   }
// });

// function addRow(quantity, price, sum) {
//   let tr = document.createElement("tr");
//   tr.insertAdjacentHTML("beforeend", `<td>option.value</td>`);
//   tr.insertAdjacentHTML("beforeend", `<td>${price}</td>`);
//   tr.insertAdjacentHTML("beforeend", `<td>${sum}</td>`);
//   quantityTable.append(tr);
// }
// addRow();

formPopup.addEventListener("submit", (event) => {
  if (firstName.value.length == 0 || lastName.value.length == 0) {
    event.preventDefault();
    alert("Try again!");
  } else {
    const data = new FormData(formPopup);
    const dataObject = {};
    for (const [name, value] of data) {
      if (!dataObject[name]) {
        dataObject[name] = value;
      } else {
        dataObject[name] = `${dataObject[name]},${value}`;
      }
    }
    event.preventDefault();
    console.log(dataObject);
    console.log(JSON.stringify(dataObject));
    alert("Submit is successful!");
  }
});

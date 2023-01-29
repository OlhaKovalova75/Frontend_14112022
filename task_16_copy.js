let button = document.querySelector(".button");
let submit = document.querySelector("#submit");
let formBase = document.querySelector(".formBase");
let formPopup = document.querySelector(".form_popup");
let closePopup = document.querySelector(".closePopup");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let radio = document.querySelector(".radio");
let item = document.querySelector(".item-block");
let email = document.querySelector(".email");

button.addEventListener("click", (event) => {
  event.preventDefault();
  formBase.classList.add("active");
  formPopup.classList.add("active");
});
closePopup.addEventListener("click", () => {
  formBase.classList.remove("active");
  formPopup.classList.remove("active");
});

//Додавання нових полей "email/phone"

function addEmail() {
  let div = document.createElement("div");
  div.classList.add("form");
  let label = document.createElement("label");
  label.innerHTML = "Email";
  div.insertBefore(label, div.children[0]);
  let input = document.createElement("input");
  input.classList.add("email");
  input.setAttribute("type", "email");
  input.setAttribute("required", "required");
  input.setAttribute("placeholder", "example@ukr.net");
  input.classList.add("email");
  div.append(input);
  formPopup.insertBefore(div, formPopup.children[0]);
}
addEmail();

//Валідація email
let emailInput = document.querySelector(".email");
emailInput.addEventListener("input", () => {
  let em = emailInput.value;
  console.log(validEmail(em));
});
function validEmail(input) {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.search(pattern) === -1) {
    return [false, "Уточніть свій email"];
  }

  return [true];
}
// function validateEmail() {
//   const validityState = email.validity;

//   if (validityState.valueMissing) {
//     email.setCustomValidity("You gotta fill this out, yo!");
//   } else {
//     email.setCustomValidity("");
//   }

//   email.reportValidity();
// }

//Поки не знаю, як зробити одну функцію для двох input
function addTel() {
  let div = document.createElement("div");
  div.classList.add("form");
  let label = document.createElement("label");
  label.innerHTML = "Telephone number";
  div.insertBefore(label, div.children[0]);
  let input = document.createElement("input");
  input.classList.add("tel");
  input.setAttribute("type", "tel");
  input.setAttribute("required", "required");
  input.setAttribute("placeholder", "+380*********");
  input.classList.add("tel");
  div.append(input);
  formPopup.insertBefore(div, formPopup.children[1]);
}
addTel();
//Валідація телефону
let telInput = document.querySelector(".tel");
telInput.addEventListener("input", () => {
  let tel = telInput.value;
  console.log(validTel(tel));
});

function validTel(inp) {
  let pattern = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
  if (inp.length !== 13) {
    return [false, "Уточніть свій номер"];
  }

  if (inp.search(pattern) === -1) {
    return [false, "Вибачте, уточніть правильність вводу"];
  }
  return [true];
}

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

// Використовуючи API https://jsonplaceholder.typicode.com/ <зробити пошук поста за ід. <br />
// Ід має бути введений в інпут (валідація: ід від 1 до 100) <br />
// Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.<br />

// Зробити завдання використовуючи проміси, перехопити помилки.

// let idValue = document.querySelector("input").value;
let button = document.querySelector("button");
button.addEventListener("click", (e) => {
  let post = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        let idValue = document.querySelector("input").value;

        for (const key in data) {
          idValue === data.id;
          document.querySelector(".out").textContent = JSON.stringify(
            data[idValue]
          );
        }
        console.log(data[idValue]);
      });
  });
});
const userForm = document.createElement("form");
const textArea = document.createElement("textarea");
const btn = document.createElement("button");
const postDiv = document.querySelector("#post");
userForm.appendChild(textArea);
userForm.appendChild(btn);
postDiv.appendChild(userForm);
userForm.classList.add("form");
btn.value = "Send";
btn.setAttribute("type", "submit");
textArea.setAttribute("row", 15);
textArea.setAttribute("cols", 33);

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  const dataObj = {};

  console.log(dataObj);
  console.log(JSON.stringify(dataObj));
  alert("Submit is successful!");
});

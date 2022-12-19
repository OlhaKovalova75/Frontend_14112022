// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає
//
const contentInput = document.getElementById("inpt");
const contentModal = document.getElementById("modal");

contentInput.onmouseover = function () {
  contentModal.style.display = "block";
};

contentInput.onmouseout = function () {
  contentModal.style.display = "none";
};

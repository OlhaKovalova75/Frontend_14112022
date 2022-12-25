let array = [1, [1.1, 1.2, 1.3], 2, 3, 4, 5];
function generateList(items, parent) {
  let ul = document.createElement("ul");
  parent.appendChild(ul);
  items.forEach((item) => {
    let li = document.createElement("li");

    ul.appendChild(li);
    if (Array.isArray(item)) {
      generateList(item, li);
    } else {
      li.innerHTML = item;
    }
  });
}
let list = document.querySelector("body");
generateList(array, list);
console.log(list);

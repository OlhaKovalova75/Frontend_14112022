const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(item) {
  return array.splice(4, 1);
}

removeElement();
console.log(array);

// alternative is the arrow function
(item) => array.splice(3, 1);
removeElement();
console.log(array);

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length) {
  let string = " ";
  const number = characters.length;
  for (let i = 0; i < length; i++) {
    string += characters.charAt(Math.random() * number);
  }
  return string;
}

console.log(generateKey(8));

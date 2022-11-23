const year = +prompt("Input the your birthday please");
const city = prompt("Where do you live?");
const sport = prompt("What kind of sport do you like?");

const age = Number(2022 - year);

// switch (year) {
//   case year1:
//     alert(`Try again`);
//     break;
//   case year:
//     alert(`You are ${age}`);
//     break;
//   default:
//     alert("Sorry you have not wanted to input your birthday((");
// }

if (year > 2022 || year < 1940) {
  alert(`You make a mistake! Try again`);
} else if (year < 2022) {
  alert(`You are ${age}`);
} else if (year == null || year == "") {
  alert("Sorry! You have not wanted to input your birthday((");
}

switch (city == null || city == "") {
  case "Kyiv":
    alert("You live in the capital of Ukraine");
    break;
  case "Washington":
    alert("You live in the capital of USA");
    break;
  case "London":
    alert("You live in the capital of Great Britain");
    break;
  case city:
    alert(`You live in ${city}`);
    break;
  default:
    alert("Sorry! you have not wanted to input your living city((");
}

switch (sport == null || sport == "") {
  case "box":
    alert("Cool! Do you want to be as Klichko?");
    break;
  case "football":
    alert(`Cool! Do you want to be as Zozulya?`);
    break;

  case "exercise":
    alert(`Cool! Do you want to be as Shwarznegger?`);
    break;
  case sport:
    alert(`Cool! Just do it!`);
    break;

  default:
    alert("Sorry! you have not wanted to input your lovely sport((");
}

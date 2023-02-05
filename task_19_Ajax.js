document.querySelector("#loader").classList.add("loading");

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((response) => response.json())
  .then((data) => {
    const posts = document.querySelector("#posts");
    const postElem = document.createElement("div");
    const cardElem = document.createElement("h2");
    const titleElem = document.createElement("h3");
    const descriptionElem1 = document.createElement("h4");
    const descriptionElem2 = document.createElement("h4");
    const imageElem = document.createElement("div");
    cardElem.textContent = `${data.sys.country} : ${data.name}`;
    titleElem.innerHTML =
      "Temperature : " +
      Math.round(data.main.temp) +
      "&deg" +
      "<br />" +
      "Відчуття, як : " +
      Math.round(data.main.feels_like) +
      "&deg";

    descriptionElem1.innerHTML = `
      Атмосферний тиск : 
      ${Math.round(data.main.pressure)} 
      <br />
      Вологість : 
      ${Math.round(data.main.humidity)}`;
    descriptionElem2.innerHTML = `
      Швидкість вітру :   ${Math.round(data.wind.speed)} м/с
    <br /> Напрям вітру :  ${Math.round(data.wind.deg)} &deg`;
    imageElem.innerHTML = `<img src="http://openweathermap.org/img/w/10d.png">`;
    postElem.appendChild(cardElem);
    postElem.appendChild(titleElem);
    postElem.appendChild(descriptionElem1);
    postElem.appendChild(descriptionElem2);
    postElem.appendChild(imageElem);
    posts.appendChild(postElem);

    console.log(data);
    console.log(data.main);
  });
document.querySelector("#loader").classList.remove("loading");

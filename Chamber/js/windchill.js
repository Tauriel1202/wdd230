const url =
  "https://api.openweathermap.org/data/2.5/forecast?id=2080185&units=imperial&appid=920c6288bdbd30f49daec29c2657439c";
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const speed = document.querySelector("#speed");
const chill = document.querySelector("#chill");
const mainImg = document.querySelector(".mainImg");
const weather = document.querySelector("#currentWeather");

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {

    let weatherImg = document.createElement("img");
    let current = jsObject.list[0].weather[0].main;
    let t = jsObject.list[0].main.temp;
    let h = jsObject.list[0].main.humidity;
    let s = jsObject.list[0].wind.speed;
    let wc = "";
    let iconUrl = `./images/${current}.jpg`;
    // let img = jsObject.list[0].weather[0].icon;
    // let iconUrl = `https://openweathermap.org/img/w/${img}.png`;

    weather.textContent = current;
    temp.textContent = t.toFixed(0);
    humidity.textContent = h.toFixed(0);
    speed.textContent = s.toFixed(0);

    weatherImg.src = iconUrl;
    weatherImg.alt = current;
    mainImg.append(weatherImg);

    if (t <= 50 && s > 3) {
      wc = windChill(t, s);
      wc = `${wc} &#8457;`;
    } else {
      wc = "N/A";
    }

    chill.innerHTML = wc;
  });

function windChill(temp, speed) {
  wc =
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16);
  return Math.round(wc);
}

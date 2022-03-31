//plop
// const url =
//   "https://api.openweathermap.org/data/2.5/onecall?lat=42.0735&lon=-71.7117&units=imperial&exclude=minutely,hourly&appid=0816140b8fdaee1bda37dadd33f12659";
// hydro

let clickDate = new Date
let minute = clickDate.getMinutes()
//console.log(minute, localStorage.getItem('minute'))
if(Number(localStorage.getItem('minute')) != minute){
  localStorage.setItem('minute', minute)
  localStorage.setItem('clicks',0)
}

localStorage.setItem('clicks',Number(localStorage.getItem('clicks'))+1)
console.log('💩',localStorage.getItem('clicks'))

// let url;
// if(Number(localStorage.getItem('clicks') < 50)){
//   url = "https://api.openweathermap.org/data/2.5/onecall?lat=28.750&lon=-82.500&units=imperial&exclude=minutely,hourly&appid=517dcf5775e231ee14a4ac01faf8814c";
// }

//CURRENT WEATHER
const current = document.querySelector(".currentWeather");
const forecast = document.querySelector(".forecast");

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    //CURRENT JS
    const img = document.createElement("img");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    var condition = jsObject.current.weather[0].main;
    var temp = ~~jsObject.current.temp;
    var hum = ~~jsObject.current.humidity;
    var feel = ~~jsObject.current.feels_like;

    img.src = `./imgs/${condition}.jpg`;
    img.alt = condition;
    img.width = 100;
    img.height = 100;

    h4.innerHTML = `${condition} ${temp}&#8457;`;
    p.innerHTML = `Humidity: ${hum}&#8457;<br>Wind Chill: ${feel}&#8457`;

    current.append(img, h4, p);
    // FORECAST JS
    for (let i = 0; i < 3; i++) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const h4 = document.createElement("h4");
      const p = document.createElement("p");

      div.setAttribute("class", `day`);

      let condition = jsObject.daily[i].weather[0].main;
      let temp = ~~jsObject.daily[i].temp.day;
      let hum = ~~jsObject.daily[i].humidity;
      let feel = ~~jsObject.daily[i].feels_like.day;

      img.src = `./imgs/${condition}.jpg`;
      img.alt = condition;
      img.width = 100;
      img.height = 100;

      h3.textContent = date(i);
      h4.innerHTML = `${condition} ${temp}&#8457;`;
      p.innerHTML = `Humidity: ${hum}&#8457;<br>Wind Chill: ${feel}&#8457`;

      div.append(h3, img, h4, p);
      forecast.append(div);
    }
    //ALERT JS
    console.log(jsObject)
    let alert = document.querySelector('.alert')
    let event = jsObject.alerts[0].event;
    
    alert.addEventListener('click', () => {
      alert.classList.add('hidden')
    })

    alert.append(`📢 ${event} ⚠`)
  });

function date(i) {
  let print = ``;
  let currentDate = new Date();
  let month = currentDate.getMonth();
  let date = currentDate.getDate() + i;
  let year = currentDate.getFullYear();
  let newDate = newMonth(month, date, year);
  let thisMonth = currentMonth(newDate[0]);

  print = `${thisMonth} ${newDate[1]}, ${year}`;
  return print;
}
function currentMonth(month) {
  if (month == 0) {
    return "Jan.";
  }
  if (month == 1) {
    return "Feb.";
  }
  if (month == 2) {
    return "Mar.";
  }
  if (month == 3) {
    return "Apr.";
  }
  if (month == 4) {
    return "May";
  }
  if (month == 5) {
    return "Jun.";
  }
  if (month == 6) {
    return "Jul.";
  }
  if (month == 7) {
    return "Aug.";
  }
  if (month == 8) {
    return "Sept.";
  }
  if (month == 9) {
    return "Oct.";
  }
  if (month == 10) {
    return "Nov.";
  }
  if (month == 11) {
    return "Dec.";
  }
}
function newMonth(month, date, year) {
  if (
    month == 0 ||
    month == 2 ||
    month == 4 ||
    month == 6 ||
    month == 7 ||
    month == 9
  ) {
    if (date > 31) {
      month += 1;
      date -= 31;
    }
  }
  else if (
    month == 3 ||
    month == 5 ||
    month == 8 ||
    month == 10
  ){
    if (date > 30){
      month += 1;
      date -= 30;
    }
  }
  else if (month == 1){
    if (year%4 === 0 && date > 29){
      month += 1;
      date -= 29;
    }
    if (date > 28){
      month += 1;
      date -= 28;
    }
  }
  return [month, date];
}


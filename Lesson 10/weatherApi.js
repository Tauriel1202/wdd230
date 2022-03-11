const url = 'https:api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=920c6288bdbd30f49daec29c2657439c'
const currentTemp = document.querySelector('#current-temp')
const iconSrc = document.querySelector('#icon-src')
const icon = document.querySelector('#weathericon')
const caption = document.querySelector('figcaption')

fetch(url)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const iconUrl = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    currentTemp.textContent = jsObject.main.temp.toFixed(1);
    iconSrc.textContent = iconUrl

    icon.setAttribute('src', iconUrl)
    icon.setAttribute('alt', jsObject.weather[0].main)

    caption.textContent = jsObject.weather[0].main
  });
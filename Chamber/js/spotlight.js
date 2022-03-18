/*****************SPOTLIGHT JS**************/
const jsonUrl = "https://tauriel1202.github.io/wdd230/Chamber/data.json";

fetch(jsonUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const cos = jsonObject["companies"];

    let spotlights = cos.filter(getSpotlight);
    showSpotlight(spotlights)
  });
function getSpotlight(spot){
  if (spot.level === 'Gold' | spot.level === 'Silver'){
    return spot
  }
}
function showSpotlight(arr){
  for (let i = 1; i < 4; i++){
    let spotImg = document.querySelector(`#spot${i} div img`)
    let spotName = document.querySelector(`#spot${i} h2`)
    let email = document.querySelector(`#spot${i} p:nth-child(4)`)

    let index = ~~(Math.random()*arr.length)   
    spotImg.src = arr[index].img 
    spotName.textContent = arr[index].name
    email.textContent = arr[index].site

    arr = arr.filter((item) => {
      return item != arr[index]
    })
    // arr.splice(arr.length-1)
  }
}
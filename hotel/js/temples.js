const url = "https://tauriel1202.github.io/wdd230/hotel/json/temples.json"
const templeCards = document.querySelector('.templeCards')

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject)
    for (let i = 0; i < 4; i++){
      const div = document.createElement('div') 
      const h2 = document.createElement('h2')
      const img = document.createElement('img')
      const contact = document.createElement('p')
      const p = document.createElement('p')

      let name = jsObject.temples[i].name
      let templeImg = jsObject.temples[i].img
      let address = jsObject.temples[i].address
      let tel = jsObject.temples[i].tel
      let email = jsObject.temples[i].email
      let closure = jsObject.temples[i].closure
      let ordinance = jsObject.temples[i].ordinance
      let services = jsObject.temples[i].services
      let history = jsObject.temples[i].history

      h2.textContent = name;
      
      img.src = templeImg;
      img.alt = name;
      img.width = 100;
      img.height = 100;

      contact.innerHTML = `Address: ${address}<br>Tel: ${tel}<br>Email: ${email}`
      p.innerHTML = `Closure: ${closure}<br><br>Ordinance Schedule: ${ordinance}<br>Services: ${services}<br><br>History: ${history}`
      
      div.append(h2, img, contact, p)
      templeCards.append(div)
    }
  })
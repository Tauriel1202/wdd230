const url = "https://tauriel1202.github.io/wdd230/hotel/json/temples.json";
const templeCards = document.querySelector(".templeCards");

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    for (let i = 0; i < 4; i++) {
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const img = document.createElement("img");
      const contact = document.createElement("p");
      const p = document.createElement("p");
      const btn = document.createElement("button");

      let name = jsObject.temples[i].name;
      let templeImg = jsObject.temples[i].img;
      let address = jsObject.temples[i].address;
      let tel = jsObject.temples[i].tel;
      let email = jsObject.temples[i].email;
      let closure = jsObject.temples[i].closure;
      let ordinance = jsObject.temples[i].ordinance;
      let services = jsObject.temples[i].services;
      let history = jsObject.temples[i].history;

      btn.textContent = "💖";
      btn.addEventListener("click", () => {
        div.classList.toggle("like");
        localStorage.setItem(name, div.getAttribute('class'));
      });    
      div.setAttribute('class', localStorage.getItem(name))

      h3.innerHTML = `${name}`;

      img.src = templeImg;
      img.alt = name;
      img.width = 100;
      img.height = 100;

      contact.innerHTML = `<strong>Address:</strong> ${address}<br><strong>Tel: </strong>${tel}<br><strong>Email:</strong> ${email}`;
      p.innerHTML = `<strong>Closure:</strong><br> ${closure}<br><br><strong>Ordinance Schedule: </strong>${ordinance}<br><br><strong>Services: </strong><br>${services}<br><br><strong>History: </strong><br>${history}`;

      div.append(btn, h3, img, contact, p);
      templeCards.append(div);
    }
  });

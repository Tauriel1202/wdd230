const shops = document.querySelector('.shops');
const url = 'https://tauriel1202.github.io/wdd230/Chamber/data.json';

fetch(url).then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const cos = jsonObject['companies'];
    cos.map(displayCos);
  });
function displayCos(co) {
  let singleCo = document.createElement('section')
  let img = document.createElement('img')
  let h2 = document.createElement('h2')
  let p = document.createElement('p')
  let a = document.createElement('a')

  img.setAttribute('src', co.img)
  img.setAttribute('alt', co.name)
  img.setAttribute('width', 100)
  img.setAttribute('height', 100)

  h2.textContent = co.name;
  p.textContent = co.address;
  a.textContent = co.site;

  singleCo.appendChild(img)
  singleCo.appendChild(h2)
  singleCo.appendChild(p)
  singleCo.appendChild(a)

  shops.appendChild(singleCo)
}
// let img = document.createElement('img')
// img.src = './images/resortBground.jpg'
// shops.append(img)
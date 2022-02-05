const btn = document.querySelector('#hamBtn')
const nav = document.querySelector('#headerNav')

btn.addEventListener('click', () => {
  nav.classList.toggle('open')})

let lastMod = document.querySelector('#lastMod')
let date = document.querySelector('#date')
let current = new Date()

let mod = document.lastModified;
let year = new Date().getFullYear();
let currentDate = `${mod}`

const formatDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(current);

date.innerHTML = formatDate
lastMod.innerHTML = `&copy; ${year} Wayu Chamber 🌴 Courtney Christensen 🌴 WDD 230 Project 🌴 Last Modified: ${currentDate}`

/*msg JS */
const day = current.getDay();
const msg = document.querySelector('#msg')
console.log(day)
if (day == 1 || day == 2) {
  msg.classList.add('show')
}
else {
  msg.classList.add('hide')
}
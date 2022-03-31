/********LAST MODIFIED JS**********/
const lastMod = document.querySelector('#lastMod')
let mod = document.lastModified

lastMod.textContent = `🌊Courtney Christensen 🌺 Last Modified: ${mod}🌴`

/********NAV JS**********/
const btn = document.querySelector('#hamBtn')
const nav = document.querySelector('#headerNav')

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
});


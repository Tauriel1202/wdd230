let last = document.querySelector('#lastMod');
let mod = document.lastModified;
let year = new Date().getFullYear(); 
let lastMod = `&copy; ${year} .:|:. Courtney M. Christensen .:|:. Massachusetts<br><br>Last Updated: ${mod}`;
last.innerHTML = lastMod;
let update = document.querySelector('#lastUpdate');
let mod = document.lastModified;
let year = new Date().getFullYear(); 
let lastMod = `&copy; ${year} | Courtney M. Christensen | Last Updated: ${mod}`;
update.innerHTML = lastMod
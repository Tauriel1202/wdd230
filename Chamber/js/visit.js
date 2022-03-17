/**********************LAST VISIT************************/
const visit = document.querySelector("#visit");
const lv = Number(localStorage.getItem("visits-ls"));
const today = Date.now();
const msInDay = 1000 * 60 * 60 * 24;
let timeSince = Math.round((today - lv) / msInDay);

localStorage.setItem("visits-ls", today);

if (visit) {
  if (lv !== 0) {
    visit.innerHTML = `🌊Welcome Back! 🌺 It has been ${timeSince} days since your last visit.🌴`;
  } else {
    visit.textContent = `🌊Welcome to the Chamber!🌺Enjoy your first visit!🌴`;
  }
}
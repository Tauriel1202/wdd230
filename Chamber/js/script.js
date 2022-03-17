const btn = document.querySelector("#hamBtn");
const nav = document.querySelector("#headerNav");

btn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

let lastMod = document.querySelector("#lastMod");
let date = document.querySelector(".date");
let current = new Date();

let mod = document.lastModified;
let year = new Date().getFullYear();
let currentDate = `${mod}`;

function newDate(date){
 return new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(date);
}
const formatDate = newDate(current)

if (date) {
  date.innerHTML = formatDate;
  lastMod.innerHTML = `&copy; ${year} Wayu Chamber 🌴 Courtney Christensen 🌴 WDD 230 Project 🌴 Last Modified: ${currentDate}`;
}
/******************************MSG JS*********************************/
const day = current.getDay();
const msg = document.querySelector("#msg");

if (day == 1 || day == 2) {
  msg.classList.add("show");
} else {
  msg.classList.add("hide");
}
//*****************************JS LazyLoading*************************/
let images = Array.from(document.querySelectorAll("img[data-src]"));
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.map((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });

  images.map((img) => {
    observer.observe(img);
  });
} else {
  images.map((img) => {
    load(img);
  });
}
/******************Form Time**************************/
function formTime() {
  console.clear();
  
  let currentD = new Date()
  let formTime = (`${newDate(currentD)} ${currentD.getHours()}:${currentD.getMinutes()}`)
  document.getElementById("t").value = formTime;
  
}
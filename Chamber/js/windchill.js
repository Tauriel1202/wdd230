let temp = parseFloat(document.querySelector("#temp").textContent);
let speed = parseFloat(document.querySelector("#speed").textContent);
let wc = "";

if (temp <= 50 && speed > 3) {
  wc = windChill(temp, speed);
  wc = `${wc}`;
} else {
  wc = "N/A";
}

document.querySelector("#chill").innerHTML = `${wc}&#8457`;

function windChill(temp, speed) {
  wc =
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16);
  return Math.round(wc);
}

console.log(wc);

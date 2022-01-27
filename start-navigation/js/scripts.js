function toggleMenu(){
  document.querySelector('#headerNav').classList.toggle('open');
  document.querySelector('#btn').classList.toggle('open');
}
const x = document.querySelector('#btn');
x.onclick = toggleMenu;
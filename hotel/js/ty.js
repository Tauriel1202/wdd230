const contact = document.querySelector('#contact')
const book = document.querySelector('#book')
const query = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop)
})

if (query.btn == 'Reserve'){
  book.style.display = 'block';
  contact.style.display = 'none';
}
else if (query.btn == 'Contact'){
  contact.style.display = 'block';
  book.style.display = 'none';
}

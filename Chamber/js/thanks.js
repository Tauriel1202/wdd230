const query = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop)
})

const h1 = document.querySelector('#h1');

if (query.btn === 'Inquire'){
  h1.innerHTML = '🌊Thank you for inquiring! 🥥 We will answer your question as soon as possible. 🌴'
}
else if (query.btn === 'Join the Chamber'){
  h1.innerHTML = '🌊Thank you for joining the Chamber! 🥥 It is great to have you with us!🌴'
}

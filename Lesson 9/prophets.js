const cards = document.querySelector('.cards');
const url =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
  
fetch(url).then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);

  });
function displayProphets(prophet){
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let h3 = document.createElement('h3')
  let p = document.createElement('p');
  let portrait = document.createElement('img');
  
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  h3.textContent = `Birthdate: ${prophet.birthdate}`
  p.textContent = `Birthplace: ${prophet.birthplace}`

  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${number(prophet)} Prophet`);
  portrait.setAttribute('loading', 'lazy');

  card.appendChild(h2);
  card.append(h3)
  card.appendChild(p);
  card.appendChild(portrait)

  cards.appendChild(card)
}
function number(prophet){
  let order = '';
  if (prophet.order === 1){
    return `${prophet.order}st`
  }
  else if (prophet.order === 2){
    return `${prophet.order}nd`
  }
  else if (prophet.order === 3){
    return `${prophet.order}rd`
  }
  else {
    return `${prophet.order}th`
  }
}

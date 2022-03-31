const url = 

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject)
  })
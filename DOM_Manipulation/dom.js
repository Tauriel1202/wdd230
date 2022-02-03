const item = document.querySelector('#favchap');
const lst = document.querySelector('.list');
const btn = document.querySelector('#submit');
btn.addEventListener('click', () => {
  if (item.value !== ''){
    let lstItem = document.createElement('li');
    lstItem.innerHTML = item.value

    let delBtn = document.createElement('button');
    delBtn.innerHTML = '\u274c';
    delBtn.addEventListener('click', (e) => {
    let element = e.target.parentNode
    lst.removeChild(element)
    })
    
    lstItem.append(delBtn)
    lst.append(lstItem);
    item.value = ''
    item.focus()
    }
  }
);
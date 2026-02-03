const clickEl = document.querySelector('.btn'); //найди кнопку
const contentEl = document.querySelector('.content') //найди контент
 
clickEl.addEventListener('click', () => {            // при нажатии на кнопку
    const subtitleEl = document.createElement('p');  //создай параграф
    subtitleEl.textContent = 'Новый абзац';            // поменяй его имя на "Имя"
    subtitleEl.classList.add('subtitle');               //присвой ему класс "имя класса"
    contentEl.appendChild(subtitleEl);                  //добавь его в конце родителя
})    


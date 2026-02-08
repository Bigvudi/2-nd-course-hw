const clickEl = document.querySelector('.btn');  
const subtitleEl = document.querySelector('.description'); //если перенести это
// событие в событие нажание на кнопку то при нажатии кнопки будут удаляться элементы
//  по очереди по данному классу
    clickEl.addEventListener('click', () => {
        subtitleEl.remove();
    });
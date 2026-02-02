const titleEl = document.querySelector('.title'); // элемент с текстом
const clickEl = document.querySelector('.btn');   // кнопка


clickEl.addEventListener('click', function() {
    if (titleEl.style.display === 'none') {
        titleEl.style.display = 'block'; // показываем текст
    } else {
        titleEl.style.display = 'none';  // скрываем текст
    }
});
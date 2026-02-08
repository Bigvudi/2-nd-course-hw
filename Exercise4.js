const descriptionEl = document.querySelectorAll('.description');
const clickEl = document.querySelector('.btn');

clickEl.addEventListener('click', function (){
    descriptionEl.forEach(function(el) {
        el.textContent = '«Измененный текст».' });
});
const descriptionEl = document.querySelectorAll('.description');
const clickEl = document.querySelector('.btn');
    clickEl.addEventListener('click', function() {
        descriptionEl.forEach(element => {
            element.textContent = "«Новый текст»"});
    });

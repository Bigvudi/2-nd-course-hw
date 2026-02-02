const titleEl = document.querySelector('.title');
const clickEl = document.querySelector('.btn');
clickEl.addEventListener('click', function() {
    titleEl.textContent = "Привет, мир!";
});

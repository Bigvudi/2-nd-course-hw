const subtitleEl = document.querySelector('.subtitle');
const clickEl = document.querySelector('.btn');
clickEl.addEventListener('click', function() {
   if (subtitleEl.style.color ==='black') {
        subtitleEl.style.color ='blue';}
        else {subtitleEl.style.color ='black'};
});
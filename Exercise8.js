const backgroundColor = prompt("нажми на кнопку и поменяй цвет");

const clickEl = document.querySelector('.btn');

clickEl.addEventListener('click', () => {
    // Генерируем три случайных числа от 0 до 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Собираем строку для CSS: rgb(r, g, b)
    clickEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
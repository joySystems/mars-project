// src/index.js
import './styles.css';

// Ваш код JavaScript
console.log('Hello, Webpack!');

document.addEventListener('DOMContentLoaded', function () {
    const btnHeader = document.querySelector('.btn__header');
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.popup-close-btn');

    closeBtn.addEventListener('click', function (event) {
        popup.classList.remove('popup-anim-in');
        popup.classList.add('popup-anim-out');
    
        popup.addEventListener('animationend', function handler() {
            popup.classList.remove('popup-active');
            popup.style.display = 'none';
            popup.removeEventListener('animationend', handler);
        });
    });

    btnHeader.addEventListener('click', function (event) {
        popup.classList.remove('popup-anim-out');
    popup.classList.add('popup-active', 'popup-anim-in');
        popup.style.display = 'flex';
    });

    const container = document.querySelector('.container');

    container.addEventListener('animationend', () => {
        container.classList.add('animated-bg');
    });

    container.addEventListener('mousemove', function(event) {
        const containerWidth = container.offsetWidth;
        const mouseX = event.clientX;
        
        const moveX = ((mouseX / containerWidth) * 100) - 50;
        const limitedMoveX = Math.max(Math.min(moveX, 50), -50);
    
        container.style.backgroundPosition = `${50 + limitedMoveX}% center`;
        console.log(container.style.backgroundPosition);
    });

});

window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    const svg = document.querySelector('.animated-svg');
    const titleMask = document.querySelector('.title__mask');

    // После окончания анимации SVG добавляем класс для эффекта движения мыши
    svg.addEventListener('animationend', () => {
        container.classList.add('animated-bg');

        // Добавляем класс visible к title__mask после окончания анимации SVG
        titleMask.classList.add('visible');
    });
});
// src/index.js
import './styles.css';



document.addEventListener('DOMContentLoaded', function () {
    const btnHeader = document.querySelector('.btn__header');
    const btnMobile = document.querySelector('.btn__mobile');
    
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
    btnMobile.addEventListener('click', function (event) {
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

    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    burgerMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    
        const form = document.querySelector('.popup-form');
        const messageDiv = document.getElementById('form-message');
    
        const dateFields = document.querySelectorAll('#arrival-date, #departure-date');
    
        dateFields.forEach(field => {
            field.addEventListener('input', handleDateInput);
            field.addEventListener('keypress', handleKeyPress);
        });
    
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
    
            
            const labels = form.querySelectorAll('label');
            labels.forEach(label => label.classList.remove('label-error'));
    
            
            const arrivalDate = document.getElementById('arrival-date').value;
            const departureDate = document.getElementById('departure-date').value;
            const quantity = document.getElementById('quantity').value;
    
            let isValid = true;
    
            
            if (!arrivalDate) {
                setError('arrival-date', 'Дата заезда обязательна');
                isValid = false;
            } else if (!validateDate(arrivalDate)) {
                setError('arrival-date', 'Дата заезда должна быть в формате ДД.ММ.ГГГГ');
                isValid = false;
            }
    
            if (!departureDate) {
                setError('departure-date', 'Дата выезда обязательна');
                isValid = false;
            } else if (!validateDate(departureDate)) {
                setError('departure-date', 'Дата выезда должна быть в формате ДД.ММ.ГГГГ');
                isValid = false;
            }
    
            if (!quantity) {
                setError('quantity', 'Количество обязательно');
                isValid = false;
            }
    
            if (!isValid) {
                messageDiv.textContent = 'Пожалуйста, исправьте ошибки в форме';
                return;
            }
    
            
            const formData = {
                arrival: arrivalDate,
                departure: departureDate,
                quantity: quantity
            };
    
            
            sendFormData(formData);
        });
    
        function handleDateInput(event) {
            let input = event.target.value.replace(/\D/g, '').substring(0, 8); 
            const day = input.substring(0, 2);
            const month = input.substring(2, 4);
            const year = input.substring(4, 8);
    
            if (input.length > 4) {
                event.target.value = `${day}.${month}.${year}`;
            } else if (input.length > 2) {
                event.target.value = `${day}.${month}`;
            } else {
                event.target.value = day;
            }
        }
    
        function handleKeyPress(event) {
            if (event.key < '0' || event.key > '9') {
                event.preventDefault();
            }
        }
    
        function setError(inputId, message) {
            const label = document.querySelector(`label[for=${inputId}]`);
            label.classList.add('label-error');
            messageDiv.textContent = message;
        }
    
        function validateDate(date) {
            const regex = /^\d{2}\.\d{2}\.\d{4}$/;
            return regex.test(date);
        }
    
        function sendFormData(data) {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/popup-form', true);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        messageDiv.style.color = 'green';
                        messageDiv.textContent = 'Форма успешно отправлена';
                        form.reset(); 
                    } else {
                        messageDiv.textContent = 'Произошла ошибка при отправке формы';
                    }
                }
            };
    
            xhr.send(JSON.stringify(data));
        }
   
    
});

window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    const svg = document.querySelector('.animated-svg');
    const titleMask = document.querySelector('.title__mask');

    
    svg.addEventListener('animationend', () => {
        container.classList.add('animated-bg');

        
        titleMask.classList.add('visible');
    });
});
// Seleziona gli elementi necessari dal DOM
const carousel = document.querySelector('.carousel');
const buttons = document.querySelectorAll('.selector-button');
const indicator = document.querySelector('.slider-indicator');
const mobileImages = document.querySelectorAll('.carousel img');
let currentSlide = 0; // Indice dell'immagine corrente

// Funzione per aggiornare la visualizzazione del carosello
function updateSlide() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    indicator.style.transform = `translateX(${currentSlide * 50}px)`;

    buttons.forEach(button => button.classList.remove('active'));
    buttons[currentSlide].classList.add('active');

    mobileImages.forEach((img, index) => {
        if (index === currentSlide) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentSlide = index;
        updateSlide();
    });
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % 5;
    updateSlide();
}, 7000);

// Funzione per mostrare/nascondere il menu a tendina su mobile
function toggleMenu(event) {
    if (window.innerWidth <= 600) {
        event.preventDefault(); // Previene il comportamento predefinito del link
        const dropdown = document.querySelector('.dropdown-menu');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    }
}

// Aggiungi l'evento di click al logo e all'icona hamburger per mostrare/nascondere il menu su mobile
document.querySelector('.logo').addEventListener('click', toggleMenu);
document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);


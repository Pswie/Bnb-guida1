// Seleziona gli elementi necessari dal DOM
const carousel = document.querySelector('.carousel');
const buttons = document.querySelectorAll('.selector-button');
const indicator = document.querySelector('.slider-indicator');
const mobileImages = document.querySelectorAll('.carousel img');
let currentSlide = 0; // Indice dell'immagine corrente

// Funzione per aggiornare la visualizzazione del carosello
function updateSlide() {
    // Per desktop
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    indicator.style.transform = `translateX(${currentSlide * 50}px)`;

    // Rimuovi la classe 'active' da tutti i pulsanti
    buttons.forEach(button => button.classList.remove('active'));

    // Aggiungi la classe 'active' al pulsante corrispondente all'immagine corrente
    buttons[currentSlide].classList.add('active');

    // Per mobile
    mobileImages.forEach((img, index) => {
        if (index === currentSlide) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

// Aggiunge un evento di click a ogni pallino
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentSlide = index; // Imposta l'indice dell'immagine corrente
        updateSlide(); // Aggiorna la visualizzazione del carosello
    });
});

// Funzione per lo scorrimento automatico delle immagini
setInterval(() => {
    currentSlide = (currentSlide + 1) % 5; // Incrementa l'indice dell'immagine corrente e torna a 0 dopo aver raggiunto l'ultima immagine
    updateSlide(); // Aggiorna la visualizzazione del carosello
}, 7000); // Cambia immagine ogni 7 secondi

// Funzione per mostrare/nascondere il menu su mobile
function toggleMenu() {
    const header = document.querySelector('.header');
    if (header.style.display === 'none' || header.style.display === '') {
        header.style.display = 'flex';
    } else {
        header.style.display = 'none';
    }
}

// Aggiungi l'evento di click al logo per mostrare/nascondere il menu su mobile
document.querySelector('.logo').addEventListener('click', toggleMenu);

// Gestione Menu ad hamburger
function toggleMenu() {
    if (window.innerWidth <= 600) {
        const dropdown = document.querySelector('.dropdown-menu');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    }
}

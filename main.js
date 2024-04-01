// Obtener referencia al botón y al texto oculto
let readMoreBtn = document.querySelector('.read-more-btn');
let hiddenText = document.querySelector('.hideText');

// Agregar evento de clic al botón
readMoreBtn.addEventListener('click', toggleText);

// Función para alternar la visibilidad del texto oculto y cambiar el texto del botón
function toggleText() {
    hiddenText.classList.toggle('show');

    if (hiddenText.classList.contains('show')) {
        readMoreBtn.textContent = 'Leer menos';
    } else {
        readMoreBtn.textContent = 'Leer más';
    }
}


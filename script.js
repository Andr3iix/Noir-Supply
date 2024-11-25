// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
  
    hamburger.addEventListener('click', () => {
      navMenu.querySelector('ul').classList.toggle('active');
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los elementos que tendrán animaciones
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left');

    const handleScroll = () => {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                element.classList.add('visible');
            }
        });
    };

    // Ejecutar cuando se cargue y al hacer scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para animaciones visibles al inicio
});
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar todos los elementos animados
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .zoom-in, .rotate-in, .flip, .bounce-in');

  const handleScroll = () => {
      animatedElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

          if (isVisible) {
              element.classList.add('visible'); // Añadir clase si está visible
          } else {
              element.classList.remove('visible'); // Remover clase si sale de la vista
          }
      });
  };

  // Ejecutar en cada desplazamiento
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Ejecutar al cargar la página para animar los elementos visibles
});
if (isVisible) {
  console.log(`Visible: ${element.id}`);
  element.classList.add('visible');
} else {
  console.log(`Not visible: ${element.id}`);
  element.classList.remove('visible');
}
console.log({
  element,
  top: rect.top,
  bottom: rect.bottom,
  isVisible
});

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
document.addEventListener('DOMContentLoaded', () => {
  // Botón de aplicar filtros
  const btnAplicarFiltros = document.getElementById('btn-aplicar-filtros');

  // Función para aplicar filtros cuando se haga clic en el botón
  btnAplicarFiltros.addEventListener('click', () => {
    // Obtener los valores de los filtros
    const disponible = document.getElementById('disponible').checked;
    const noDisponible = document.getElementById('no-disponible').checked;
    const precioMinimo = parseFloat(document.getElementById('precio-minimo').value) || 0;
    const precioMaximo = parseFloat(document.getElementById('precio-maximo').value) || Infinity;

    const marcasSeleccionadas = Array.from(document.querySelectorAll('input[name="marca"]:checked'))
                                       .map(input => input.value);

    // Filtrar los productos
    const catalogoItems = document.querySelectorAll('.catalogo-item');
    catalogoItems.forEach(item => {
      // Obtener el precio del producto
      const precioProducto = parseFloat(item.querySelector('p').textContent.match(/S\/(\d+(\.\d+)?)/)[1]);

      // Obtener la marca del producto
      const marcaProducto = item.querySelector('p').textContent.match(/(Ecko|LRG|Rocawear|Timberland|REDAPE|Jnco)/);
      const marca = marcaProducto ? marcaProducto[0] : '';

      // Obtener disponibilidad (se debe marcar los productos como disponibles o no disponibles en su HTML)
      const disponibleProducto = item.classList.contains('disponible');  // Asegúrate de marcar los productos disponibles

      // Comprobar si el producto cumple con los filtros seleccionados
      const cumpleDisponibilidad = (disponible && disponibleProducto) || (noDisponible && !disponibleProducto);
      const cumplePrecio = precioProducto >= precioMinimo && precioProducto <= precioMaximo;
      const cumpleMarca = marcasSeleccionadas.length === 0 || marcasSeleccionadas.includes(marca);

      // Mostrar o ocultar el producto según los filtros
      if (cumpleDisponibilidad && cumplePrecio && cumpleMarca) {
        item.style.display = 'block';  // Mostrar el producto
      } else {
        item.style.display = 'none';  // Ocultar el producto
      }
    });
  });
});

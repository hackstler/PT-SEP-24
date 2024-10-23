// Seleccionamos la caja que queremos observar
const box = document.getElementById('box');

// Función de manejo de intersección
const handleIntersection = (entries, observer) => {
  console.log("🚀 ~ handleIntersection ~ entries:", entries)
  entries.forEach(entry => {
    // Si el elemento está en el viewport
    if (entry.isIntersecting) {
      entry.target.classList.add('rotate'); // Agregar la animación
      document.body.classList.add('dark');  // Cambiar al tema oscuro
    } else {
      entry.target.classList.remove('rotate'); // Quitar la animación
      document.body.classList.remove('dark');  // Revertir el tema claro
    }
  });
};

// Creamos el observador de intersección
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // El viewport por defecto
  threshold: 0.5 // Activar cuando el 50% del elemento esté en vista
});

// Observamos la caja
observer.observe(box);
const productos = [
  { id: 1, nombre: "Stormtrooper Game Boy Classic", precio: 60 },
  { id: 2, nombre: "Game Boy Classic", precio: 60 },
  { id: 3, nombre: "Nintendo Switch", precio: 350 },
  { id: 4, nombre: "PlayStation 5", precio: 500 },
  { id: 5, nombre: "Xbox Series X", precio: 450 },
  { id: 6, nombre: "PC Gamer", precio: 1200 }
];

const productoSelect = document.querySelector("#producto");
const cantidadInput = document.querySelector("#cantidad");
const btnEnviar = document.querySelector(".btn-enviar");
const btnLimpiar = document.querySelector(".btn-limpiar");

const mostrarProductos = () => {
  productoSelect.innerHTML = ""; // Limpiar opciones anteriores

  productos.forEach(producto => {
    const option = document.createElement("option");
    option.value = producto.id;
    option.textContent = producto.nombre;
    productoSelect.appendChild(option);
  });
};

mostrarProductos(); // Mostrar productos al cargar la página

btnEnviar.addEventListener("click", e => {
  e.preventDefault(); // Evitar recarga de página

  const productoId = parseInt(productoSelect.value);
  const cantidad = parseInt(cantidadInput.value);

  if (productoId && cantidad > 0) {
    const producto = productos.find(p => p.id === productoId);
    if (producto) {
      alert(`Agregado ${cantidad} unidades de ${producto.nombre} a tu agenda.`);
      // Aquí puedes realizar la acción de agendar el producto (por ejemplo, guardar en localStorage o enviar a un servidor)
      productoSelect.value = ""; // Seleccionar opción vacía
      cantidadInput.value = 1; // Restablecer cantidad
    } else {
      alert("Producto no encontrado.");
    }
  } else {
    alert("Por favor, selecciona un producto y una cantidad válida.");
  }
});

btnLimpiar.addEventListener("click", () => {
  productoSelect.value = "";
  cantidadInput.value = 1;
});

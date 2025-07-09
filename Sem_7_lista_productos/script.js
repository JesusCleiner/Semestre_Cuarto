let productos = [
  { nombre: "Laptop", precio: 850, descripcion: "Laptop con 8GB RAM y SSD de 256GB" },
  { nombre: "Mouse", precio: 20, descripcion: "Mouse inalámbrico ergonómico" },
  { nombre: "Monitor", precio: 180, descripcion: "Monitor Full HD de 24 pulgadas" }
];

// Renderiza la lista de productos
function renderizarProductos() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = "";

  productos.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${producto.nombre}</strong> - $${producto.precio}<br>${producto.descripcion}`;
    lista.appendChild(li);
  });
}

// Muestra el formulario al hacer clic en "Agregar nuevo producto"
function mostrarFormulario() {
  const formulario = document.getElementById("formulario-producto");
  formulario.style.display = "block";
}

// Inserta el nuevo producto al hacer clic en "Insertar"
function insertarProducto() {
  const nombre = document.getElementById("nombre").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);
  const descripcion = document.getElementById("descripcion").value.trim();

  if (!nombre || isNaN(precio) || !descripcion) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  productos.push({ nombre, precio, descripcion });

  // Limpiar campos e interfaz
  document.getElementById("nombre").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("descripcion").value = "";

  document.getElementById("formulario-producto").style.display = "none";

  renderizarProductos();
}

window.onload = function () {
  renderizarProductos();

  document.getElementById("btn-mostrar-formulario")
    .addEventListener("click", mostrarFormulario);

  document.getElementById("btn-insertar")
    .addEventListener("click", insertarProducto);
};

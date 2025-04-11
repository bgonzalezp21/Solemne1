let carrito = [];
function agregarAlCarrito(btn) {
  const producto = btn.parentElement;
  const nombre = producto.dataset.nombre;
  const precio = parseInt(producto.dataset.precio);
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    total += item.precio;
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    const delBtn = document.createElement("button");
    delBtn.textContent = "Eliminar";
    delBtn.onclick = () => {
      carrito.splice(index, 1);
      actualizarCarrito();
    };
    li.appendChild(delBtn);
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}

function mostrarFormulario() {
  document.getElementById("pago").style.display = "block";
}

function pagar(e) {
  e.preventDefault();
  alert("¡Pago realizado con éxito!");
  carrito = [];
  actualizarCarrito();
  document.getElementById("pago").style.display = "none";
}

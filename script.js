// Variables para los botones y el carrito
const buttons = document.querySelectorAll(".buy-button");
const cartItems = document.getElementById("cart-items");

// Crear un carrito vacío
let cart = [];

// Evento para cada botón
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.getAttribute("data-product");
        cart.push(product); // Añadir producto al carrito
        updateCart(); // Actualizar la lista en la página
    });
});

// Función para actualizar el carrito en el HTML
function updateCart() {
    cartItems.innerHTML = ""; // Limpiar el carrito
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item; // Añadir producto
        cartItems.appendChild(li);
    });
}
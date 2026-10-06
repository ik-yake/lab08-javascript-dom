
class Producto {
    constructor(nombre, precio, descuento, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento;
        this.imagen = imagen;
    }

    calcularPrecioFinal() {
        const precioFinal = this.precio - (this.precio * (this.descuento / 100));
        return precioFinal.toFixed(2);
    }
}


const prod1 = new Producto(
    "Audífonos Bluetooth",
    120,
    15,
    "audifonos.jpg"
);

const prod2 = new Producto(
    "Teclado Mecánico",
    250,
    20,
    "tecla.jpg"
);

const prod3 = new Producto(
    "Mouse Gamer",
    80,
    10,
    "Mouse Gamer.jpg"
);

const catalogo = [prod1, prod2, prod3];


const contenedor = document.getElementById("contenedor-productos");

catalogo.forEach((producto, index) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: S/ <span id="precio-${index}">${producto.precio.toFixed(2)}</span></p>
        <button id="btn-${index}">Aplicar Descuento</button>
    `;

    contenedor.appendChild(tarjeta);

    
    const boton = tarjeta.querySelector(`#btn-${index}`);
    boton.addEventListener("click", () => {
        const precioRebajado = producto.calcularPrecioFinal();
        const contenedorPrecio = tarjeta.querySelector(`#precio-${index}`);
        
        contenedorPrecio.innerText = `${precioRebajado} (Descuento del ${producto.descuento}% aplicado)`;
        boton.disabled = true;
        boton.innerText = "Descuento Aplicado";
    });
});
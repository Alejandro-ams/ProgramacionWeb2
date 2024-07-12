//TODOS LOS PRODUCTOS
//class productosShine{
//    constructor(id,nombre,descripcion,precio,imagen,cantidad){
//        this.id          = id;
//        this.nombre      = nombre;
//        this.descripcion = descripcion;
//        this.precio      = precio;
//        this.imagen      = imagen;
//        this.cantidad    = cantidad;
//    }
//};
document.addEventListener("DOMContentLoaded", function() {
    // URL del endpoint para obtener los productos
    const productsUrl = './productos.json';

    // Contenedor de productos
    const productContainer = document.getElementById("product-container");

    // Función para crear el HTML del producto
    function createProductHTML(product) {
        return `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.imagen}" class="card-img-top" alt="${product.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${product.nombre}</h5>
                        <p class="card-text">${product.precio}</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Función para cargar los productos desde la API
    function loadProducts() {
        fetch(productsUrl)
            .then(response => response.json())
            .then(products => {
                products.forEach(product => {
                    productContainer.innerHTML += createProductHTML(product);
                });
            })
            .catch(error => {
                console.error('Error al cargar los productos:', error);
            });
    }

    // Cargar los productos al iniciar la página
    loadProducts();
});


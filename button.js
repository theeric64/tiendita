let listaCarrito = [];

let botonAbrir = document.getElementById('cart-icon');
let botonCerrar = document.getElementById('close-cart');
let panelCarrito = document.getElementById('side-cart');
let contenedorItems = document.getElementById('cart-items');
let textoTotal = document.getElementById('cart-total');
let contadorIcono = document.getElementById('cart-count');

botonAbrir.onclick = function() {
    panelCarrito.classList.add('active');
}

botonCerrar.onclick = function() {
    panelCarrito.classList.remove('active');
}

let botonesAñadir = document.querySelectorAll('.btn-add');

botonesAñadir.forEach(function(boton) {
    boton.onclick = function(evento) {
        let tarjeta = evento.target.closest('.game-card');
        
        
        let nombre = tarjeta.querySelector('h3').innerText;
        let precio = parseFloat(tarjeta.getAttribute('data-price'));
        let imagenUrl = tarjeta.querySelector('img').src;
        
      
        let desc = tarjeta.querySelector('.description').innerText;
        let calif = tarjeta.querySelector('.rating span').innerText;

      
        let juegoNuevo = {
            titulo: nombre,
            costo: precio,
            imagen: imagenUrl,
            descripcion: desc,      
            calificacion: calif     
        };

        listaCarrito.push(juegoNuevo);
        actualizarPantalla();
    }
});
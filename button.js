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

function actualizarPantalla() {
    contenedorItems.innerHTML = "";
    let sumaTotal = 0;

    listaCarrito.forEach(function(juego) {
        sumaTotal = sumaTotal + juego.costo;

        contenedorItems.innerHTML += `
            <div class="cart-item" style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 15px; background: #0f172a; padding: 10px; border-radius: 8px;">
                <img src="${juego.imagen}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                <div style="flex: 1;">
                    <p style="margin: 0; font-size: 0.9rem; font-weight: bold;">${juego.titulo}</p>
                    <p style="margin: 0; font-size: 0.7rem; color: #94a3b8;">★ ${juego.calificacion}</p>
                    <p style="margin: 5px 0; font-size: 0.75rem; color: #cbd5e1; line-height: 1.2;">${juego.descripcion}</p>
                    <p style="margin: 0; color: #3b82f6; font-weight: bold;">$${juego.costo}</p>
                </div>
            </div>
        `;
    });

    textoTotal.innerText = sumaTotal.toFixed(2);
    contadorIcono.innerText = listaCarrito.length;
}
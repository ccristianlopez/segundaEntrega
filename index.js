//"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // VARIABLES
  const carrito = document.querySelector(`.carrito`);
  const contenedorCarrito = document.querySelector(`#lista-carrito tbody`);
  const vaciarCarritoBtn = document.querySelector(`.carrito button`);
  const listaTermos = document.querySelector(`#lista-termos`);
  let articulosCarrito = [];

  
  cargarEventListeners();
    
  
  //cargarEventListeners();
  // FUNCIONES
  function cargarEventListeners() {
    listaTermos.addEventListener("click", agregarTermo);
    carrito.addEventListener("click", eliminarTermo);
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  }

  function agregarTermo(e) {
    if (e.target.classList.contains("btn-danger")) {
      const termoSeleccionado = e.target.parentElement;
      leerDatosTermo(termoSeleccionado);
    }
  }

  function leerDatosTermo(termo) {
    const infoTermo = {
      nombre: termo.querySelector(".texto-contact strong").textContent,
      precio: termo.querySelector(".texto-contact span").textContent,
      id: termo.querySelector("button").getAttribute("data-id"),
      cantidad: 1,
    };

    const existe = articulosCarrito.some((termo) => termo.id === infoTermo.id);
    if (existe) {
      articulosCarrito = articulosCarrito.map((termo) => {
        if (termo.id === infoTermo.id) {
          termo.cantidad++;
          return termo;
        } else {
          return termo;
        }
      });
    } else {
      articulosCarrito = [...articulosCarrito, infoTermo];
    }

    carritoHtml();
  }

  function eliminarTermo(e) {
    if (e.target.classList.contains("btn-dange")) {
      const termoId = e.target.getAttribute("data-id");
      articulosCarrito = articulosCarrito.filter(
        (termo) => termo.id !== termoId
      );
      carritoHtml();
    }
  }

  function vaciarCarrito() {
    articulosCarrito = [];
    carritoHtml();
  }

  function carritoHtml() {
    limpiarHtml();

    articulosCarrito.forEach((termo) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${termo.nombre}</td>
        <td>${termo.precio}</td>
        <td>${termo.cantidad}</td>
        <td>
            <button class="btn btn-dange" data-id="${termo.id}">X</button>
        </td>
        `;
      contenedorCarrito.appendChild(row);
    });

    sincronizarStorage();
  }

  function sincronizarStorage() {
    localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
  }

  function limpiarHtml() {
    contenedorCarrito.innerHTML = "";
  }

  // cargar items del local storage
  articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carritoHtml();

  


});


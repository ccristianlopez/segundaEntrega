//"use strict";
nombre=prompt("BIENVENIDO A LA PAGINA DEL TERMO\nIngrese su nombre.");
  while (nombre=="") {
    nombre=prompt("Este nombre no esta permitido. Ingrese nuevamente su nombre.");
  }
let argentino=prompt("Bienvenido "+nombre+". ¿Eres de la Republica Argentina?");
if (argentino=="no") {
    alert(nombre+". Lamentablemente los productos solo estan disponibles para la Republica Argentina.")    
}
else{
        let mail=prompt(nombre+". Por favor, ingrese su mail para enviarle si factura de compra.").toLowerCase();
    while (mail=="") {
        mail=prompt("Correo no permitido. Por favor ingrese nuevamente su correo electronico.");
    }
    function darGracias() {
       console.log(`¡Muchas gracias!`);
}
darGracias();

const producto1={
  nombre: "Termo acero inoxidable",
  capacidad: "1 litro",
  color: "-",
  medidas:{
    largo: "34 cm",
    ancho: "9 cm"
  },
  picoCebador: true,
  stock: 5,
  precio:12000
};
producto1.imagen="imagen1.jpg";
 
const producto2={
  nombre: "Termo acero inoxidable, estampado Messi",
  capacidad: "1 litro",
  color: "-",
  medidas:{
    largo: "34 cm",
    ancho: "9 cm",
    precio: 15000
  },
  picoCebador: true,
  stock: 4,
  imagen: "imagen2.jpg",
  mostrarInfo: function (){
    console.log(`El ${this.nombre} tiene la imagen de Messi levantando la copa del mundo. Envio gratis.`)
    
  },
  precio:15000
};

const producto3={
  nombre: "Termo acero inoxidable, estampado Dibu Martinez",
  capacidad: "1 litro",
  color: "-",
  medidas:{
    largo: "34 cm",
    ancho: "9 cm"
  },
  picoCebador: true,
  stock: 4,
  imagen: "imagen3.jpg",
  mostrarInfo: function (){
    console.log(`El ${this.nombre} tiene la imagen del Dibu Martinez atajando un penal. Envio gratis.`)
    
  },
  precio:15000
};

const producto4={
  nombre: "Termo simil Lumilagro verde agua",
  capacidad: "Medio litro",
  color: "Verde agua",
  medidas:{
    largo: "34 cm",
    ancho: "9 cm"
  },
  picoCebador: true,
  stock: 10,
  imagen: "-",
  precio:10000
  
};

const producto5={
  nombre: "Termo simil Lumulagro azul claro",
  capacidad: "Medio litro",
  color: "Azul claro",
  medidas:{
    largo: "34cm",
    ancho: "9cm",
  },
  picoCebador: true,
  stock: 3,
  imagen: "-",
  precio:10000
};

const producto6={
  nombre: "Termo simil Lumulagro rosa",
  capacidad: "Medio litro",
  color: "Rosa",
  medidas:{
    largo: "34cm",
    ancho: "9cm",
  },
  picoCebador: true,
  stock: 7,
  imagen: "-",
  precio:10000
};

const producto7={
  nombre: "Termo simil Lumulagro negro",
  capacidad: "Medio litro",
  color: "Negro",
  medidas:{
    largo: "34cm",
    ancho: "9cm",
  },
  picoCebador: true,
  stock: 3,
  imagen: "-",
  precio:10000
};

const producto8={
  nombre: "Termo simil Lumulagro lila",
  capacidad: "Medio litro",
  color: "Lila",
  medidas:{
    largo: "34cm",
    ancho: "9cm",
  },
  picoCebador: true,
  stock: 6,
  imagen: "-",
  precio:10000
};

const producto9={
  nombre: "Termo simil Lumulagro amarillo",
  capacidad: "Medio litro",
  color: "Amarillo",
  medidas:{
    largo: "34cm",
    ancho: "9cm",
  },
  picoCebador: true,
  stock: 1,
  imagen: "-",
  precio:10000
};

const producto10={
  nombre: "Termo simil Lumulagro marrón",
  capacidad: "Medio litro",
  color: "Marrón",
  medidas:{
    largo: "34cm",
    ancho: "9cm",
  },
  picoCebador: true,
  stock: 2,
  imagen: "-",
  precio:10000
};

const termos=[producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10];

//ARRAY METHOD PARA FILTRAR STOCK MAYOR A 6
let mayorAseis;
mayorAseis= termos.filter( producto => producto.stock>= 6);
console.log(mayorAseis);


//FOR PARA MOSTRAR SOLO EL NOMBRE DE CADA OBJETO DEL ARRAY//

for(let i=0;i<termos.length;i++){
  console.log(`NOMBRE: ${termos[i].nombre} ---> PRECIO: $${termos[i].precio}`);
}


//FUNCION//
//console.log(producto2);
producto3.mostrarInfo();

//Usando for en un array//

//let meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

//meses.push("Julio");


//console.log(meses);
//console.table(meses);

//console.log(`La cantidad de meses del Array son: ${meses.length}`);

//for(let i=0;i<=meses.length;i++){
//console.log(meses[i]);
//}


//EJEMPLO DE IR SUMANDO A UN CARRITO DE COMPRAS:

let total= 0
function agregarCarrito(preci0) {
    return total += preci0;
}

function calcularImpuesto(total) {
    return total += 1.15;
}

total= agregarCarrito(producto1.precio);
total= agregarCarrito(producto2.precio);
total= agregarCarrito(producto3.precio);

const totalaPagar= calcularImpuesto(total);

console.log(`El total a pagar es de $${totalaPagar}. Impuestos incluidos.`);
}

document.addEventListener("DOMContentLoaded", () => {
//const getEmpleados= async()=>{
//    const respuesta= await fetch("/quienes-somos.json")
//    return await respuesta.json()
//}

//const empleados= getEmpleados()
//console.log(empleados)
//const cargarJsonArray= document.querySelector(`#cargarJsonArray`);


const getEmpleados = async () => {
	const respuesta = await fetch(`/quienes-somos.json`);
	let empleados = await respuesta.json();
	console.log(empleados);
};

getEmpleados();



});
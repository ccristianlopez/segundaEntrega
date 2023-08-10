
const getEmpleados= async()=>{
    const respuesta= await fetch(`/quienes-somos.json`)
    return await respuesta.json()
}

const empleados= getEmpleados()
console.log(empleados)
const cargarJsonArray= document.querySelector(`#cargarJsonArray`);

document.addEventListener("DOMContentLoaded", obtenerDatos => {

    const cargarJsonArrayBtn= document.querySelector(`#cargarJsonArray`);
    cargarJsonArrayBtn.addEventListener(`click`,obtenerDatos)

    function obtenerDatos(){
        const url= `/quienes-somos.json`;

	    fetch(url)
	        .then(respuesta=>respuesta.json())
		    .then(resultado=>mostrarHTML(resultado));
    }

	function mostrarHTML(empleados){
		const contenido=document.querySelector(`.contenido`);

		let html=``;

		empleados.forEach(empleado=>{
			const {id, nombre, puesto }=empleado;

			html+=`
                <p class="gente">Empleado: ${nombre}</p>
				<p class="gente">Puesto: ${puesto}</p>

			`;
		})

		contenido.innerHTML=html;
	};
});
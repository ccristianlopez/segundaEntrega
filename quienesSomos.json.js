
const getPersonas= async()=>{
    const respuesta=await fetch (`data/index.json`);
    return await respuesta.json()
    
    }

const listaPersonas= document.querySelector(`#listaPersonas`);
listaPersonas.classList.add(`row`, `w-100`);

const personas= await getPersonas();

const renderPersonas=()=>{
    personas.forEach(persona=>{
        const card= document.createElement(`div`);
        card.classList.add(`card`, `col-2`);

        card.innerHTML=`
        <div class="imagenPersona"><img src=${persona.img} alt="" width="100%" height="100%">
        <div class="nombrePersona"><p> ${persona.Nombre}</p></div>
        <div class="nombrePersona"><p> ${persona.trabajo}</p></div>
        `

        listaPersonas.appendChild(card)
    });
};

renderPersonas();


//console.log(personas);    //(me aseguro de que funcione la funcione de traer los datos de json a js)



document.addEventListener(`DOMContentLoaded`, function(){

    const email={
        email:``,
        textarea:``
    }
    

    const inputEmail= document.querySelector(`#email`);
    const inputMensaje= document.querySelector(`#mensaje`);
    const formulario= document.querySelector(`#formulario`);
    const btnSubmit= document.querySelector(`#formulario button[type="submit"]`);
    const spinner= document.querySelector(`#spinner`);

    inputEmail.addEventListener(`input`, validar);
    inputMensaje.addEventListener(`input`, validar);

    //toastifyEnviando();

    
    function validar(e){
        
        if (e.target.value.trim()===``){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.type]=``;
            comprobarEmail();
            return;
        }
        
        if (e.target.id===`email`&& !validarEmail(e.target.value)){
            mostrarAlerta(`El Email no es válido`, e.target.parentElement);
            email[e.target.type]=``;
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement)

        email[e.target.type]=e.target.value.trim().toLowerCase();
        
        comprobarEmail();

        
    }
    
    function mostrarAlerta(mensaje, referencia){
        const alerta=referencia.querySelector(`.btn-danger`);
        if(alerta){
            alerta.remove();
        }



        const error= document.createElement (`P`)
        error.textContent=mensaje;
        error.classList.add(`text-center`, `btn-danger`);
        
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        const alerta= referencia.querySelector(`.btn-danger`)
        if(alerta){
            alerta.remove();
        }

    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado= regex.test(email)
        return resultado;

    }
    
    function comprobarEmail(){
        console.log(email);

        if(Object.values(email).includes(``)){
            btnSubmit.classList.add(`opasity-50`);
            btnSubmit.disabled=true
            
        }else{
            btnSubmit.classList.remove(`opasity-50`);
            btnSubmit.disabled=false
        }

    }

    document.getElementById('submit');

function toastifyEnviando() {
    btnSubmit.addEventListener('click', () => {
    Toastify({
        text: 'Enviando...',
        duration: 3000
    }).showToast();


    setTimeout(function () {
    Swal.fire(
        '¡Mensaje enviado!',
        'Haz click para volver a la pagina',
        'success'
        );
    }, 3000);
    });
}

toastifyEnviando();
    

});

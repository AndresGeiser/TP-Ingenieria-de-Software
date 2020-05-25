$(document).ready(function() {
    
    $(".btn_filtrar").click(filtrar);

    $(".publicaciones").click(mostrarDetalles);
    
    $(".cerrar").click(cerrarVentana); 
    
    $(".card").ready(traerDatos());
});


function traerDatos(){

    //console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'negocios.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status ==200){
            
            let datos = JSON.parse(this.responseText);
           // console.log(datos);
            let info = document.querySelector('#info');

            info.innerHTML = '';
            

            for (let item of datos){
            //    console.log(item.raza);

                info.innerHTML +=` 
                <div class="${item.tipo}">
                <figure>
                    <img src="${item.ubicacion}" alt="Foto de perro">
                </figure>
                <div class="datos">
                    <h3>${item.nombre}</h3>
                    <h4><b>${item.negocio}</b></h4>
                    <p>${item.horario}</p>
                
                </div>
                </div>
                `         

                


            }

        }
    }
}

function filtrar() {
        
    //Obtenemos todos los avisos (obtenemos todos los elementos con clase .card)
    var avisos = document.querySelectorAll('.card')

    //Recorremos los avisos y nos fijamos si cumple con los filtros
    avisos.forEach(aviso => {
        if(cumpleConFiltros(aviso)) {
            aviso.style.display = 'inline';
        } else {
            aviso.style.display = 'none'; //Ocultamos
        }
    });  
}

function cumpleConFiltros(aviso) {
    
    if(cumpleTipoDeServicio(aviso) && cumpleConHorario(aviso)) {
        return true;
    }
    return false;
}

function cumpleTipoDeServicio(aviso) {
    if($('.filtro_servicio#veterinaria').is(':checked') && aviso.classList.contains('veterinaria')) { //.classList devuelve un array con todas las clases de un elemento
        return true;
    }

    if($('.filtro_servicio#peluqueriaCanina').is(':checked') && aviso.classList.contains('peluqueriaCanina')) {
        return true;
    }

    if($('.filtro_servicio#forrajeria').is(':checked') && aviso.classList.contains('forrajeria')) {
        return true;
    }
    return false;
}

function cumpleConHorario(aviso) {
    if($('.filtro_horariosDeAtencion#lunesViernes').is(':checked') && aviso.classList.contains('lunesViernes')) {
        return true;
    }

    if($('.filtro_horariosDeAtencion#sabado').is(':checked') && aviso.classList.contains('sabado')) {
        return true;
    }

    if($('.filtro_horariosDeAtencion#domingo').is(':checked') && aviso.classList.contains('domingo')) {
        return true;
    }
    return false;
}

function mostrarDetalles() {
    document.querySelector('.cont_ventana').style.visibility = "visible";
    
}

function cerrarVentana() {
    document.querySelector('.cont_ventana').style.visibility = "hidden";
}


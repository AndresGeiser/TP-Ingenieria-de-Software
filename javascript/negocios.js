$(document).ready(function() {
    
    $(".cerrar").click(cerrarVentana); 
    
    $(".btn_filtrar").click(filtrar);  

    cargarNegocios(negocios)
    cargarUbicaciones(negocios)
});

function cargarNegocios(negocios) {

    var publicaciones = document.querySelector('.publicaciones');

    for (let negocio of negocios) {

        publicaciones.innerHTML +=` 
        <div class="${negocio.tipo}" id="${negocio.id}" onclick="centrarMapa(this)">
        <figure>
            <img src="${negocio.foto}" alt="Foto de perro">
        </figure>
        <div class="datos">
            <h3>${negocio.nombre}</h3>
            <h4>${negocio.servicio}</h4>
            <p>${negocio.horario}</p>
        </div>
        <div>
            <button onclick="mostrarDetalles(this)">Ver mas</button>
        </div>
        </div>
        `    
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

function mostrarDetalles(seleccionado) {

    var foto =  document.querySelector('.cont_ventana .ventana figure img');
    var info =  document.querySelector('.cont_ventana .ventana .info');

    negocios.forEach(negocio => {

        var aviso = seleccionado.parentElement.parentElement; //Nos devuelve el elemento que contiene al aviso 

        if(negocio.id == aviso.id) {
        
            foto.src = negocio.foto;
            info.innerHTML = `
            <p><b>Nombre de Negocio:</b> ${negocio.nombre}.</p><br>
            <p><b>Servicio:</b> ${negocio.servicio}.</p><br>
            <p><b>Descripción:</b> ${negocio.descripcion}.</p><br>
            <p><b>Direccion:</b> ${negocio.direccion}.</p><br>
            <p><b>Correo Electrónico:</b> ${negocio.email}.</p><br>
            <p><b>Teléfono de contacto:</b> ${negocio.telefono}.</p><br>
            <p><b>Días y Horarios de Atención:</b> ${negocio.horario}.</p><br>
            `;
        }
     });
 
    document.querySelector('.cont_ventana').style.visibility = "visible";   
}

function cerrarVentana() {
    document.querySelector('.cont_ventana').style.visibility = "hidden";
}


$(document).ready(function() {
    
    $(".btn_filtrar").click(filtrar);

});

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


$(document).ready(function() {
    
    $(".btn_filtrar").click(filtrar);

    $(".card").click(mostrarDetalles);
    
    $(".cerrar").click(cerrarVentana);

    
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
    
    if(cumpleTipoDeReporte(aviso) && cumpleConEdad(aviso) && cumpleConRaza(aviso)) {
        return true;
    }
    return false;
}

function cumpleTipoDeReporte(aviso) {
    if($('.filtro_reporte#adopcion').is(':checked') && aviso.classList.contains('adopcion')) { //.classList devuelve un array con todas las clases de un elemento
        return true;
    }

    if($('.filtro_reporte#perdido').is(':checked') && aviso.classList.contains('perdido')) {
        return true;
    }

    if($('.filtro_reporte#encontrado').is(':checked') && aviso.classList.contains('encontrado')) {
        return true;
    }
    return false;
}

function cumpleConEdad(aviso) {
    if($('.filtro_edad#menor_a_uno').is(':checked') && aviso.classList.contains('menor_a_uno')) {
        return true;
    }

    if($('.filtro_edad#uno_a_cinco').is(':checked') && aviso.classList.contains('uno_a_cinco')) {
        return true;
    }

    if($('.filtro_edad#seis_a_diez').is(':checked') && aviso.classList.contains('seis_a_diez')) {
        return true;
    }

    if($('.filtro_edad#mas_de_diez').is(':checked') && aviso.classList.contains('mas_de_diez')) {
        return true;
    }
    return false;
}

function cumpleConRaza(aviso) {

    //Obtenemos el elemento selec que contiene las razas
    var elemento = document.querySelector('.filtro_raza');

    //Obtenemos el valor de la opcion seleccionada (.options da un arreglo de las opciones del selec, el .selectedIdex da el indice de la opcion que esta seleccionada, el .value nos da el valor de ese atributo)
    var raza_Seleccionada = elemento.options[elemento.selectedIndex].value;

    if(raza_Seleccionada == 'todas')  {
        return true;
    }           
    
    if(aviso.classList.contains(raza_Seleccionada)) {
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
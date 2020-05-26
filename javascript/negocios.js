$(document).ready(function() {
    $(".cerrar").click(cerrarVentana); 
    
    $(".btn_filtrar").click(filtrar);  

    traerDatos();
});

var datos;
function traerDatos(){

    //console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'negocios.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status ==200){
            
            datos = JSON.parse(this.responseText);
           // console.log(datos);
            let info = document.querySelector('#info');

            info.innerHTML = '';
            

            for (let item of datos){
            //    console.log(item.raza);

                info.innerHTML +=` 
                <div class="${item.tipo}" id="${item.id}" onclick="mostrarDetalles(this)">
                <figure>
                    <img src="${item.foto}" alt="Foto de perro">
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

function mostrarDetalles(seleccionado) {
    var foto =  document.querySelector('.cont_ventana .ventana figure img');
    var info =  document.querySelector('.cont_ventana .ventana .info');
    

    datos.forEach(aviso => {
        if(aviso.id == seleccionado.id) {
        
            foto.src = aviso.foto;
            info.innerHTML = `
            <p><b>Nombre de Negocio:</b> ${aviso.nombre}.</p><br>
            <p><b>Tipo:</b> ${aviso.negocio}.</p><br>
            <p><b>Descripción:</b> ${aviso.descripcion}.</p><br>
            <p><b>Direccion:</b> ${aviso.direccion}.</p><br>
            <p><b>Correo Electrónico:</b> ${aviso.email}.</p><br>
            <p><b>Teléfono de contacto:</b> ${aviso.telefono}.</p><br>
            <p><b>Días y Horarios de Atención:</b> ${aviso.horario}.</p><br>
            <a class="verMapa" href = "/mapa.html"><i class="fas fa-map-marked-alt"></i>Ver en un mapa</a>

            `;
             
        }
     });
 
    document.querySelector('.cont_ventana').style.visibility = "visible";
    
}

function cerrarVentana() {
    document.querySelector('.cont_ventana').style.visibility = "hidden";
}


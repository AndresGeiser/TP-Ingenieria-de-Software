function bootstrap()
{
    
    // Se hace el fetch a tu url
    fetch('https://ws.smn.gob.ar/alerts/type/AL')
    .then(function(response) {
        // Si todo sale bien en la promesa se devuelve el json de la respuesta
        return response.json();
    })
    .then(function(myJson) {
    //Referencia al contenedor donde se ubicaran las alertas    
    const contenedor = document.querySelector('#alertas');

    //Para cada alerta se agregan los datos a clima.html
    for(e in myJson){
        contenedor.innerHTML += '<p>'+ "Titulo: " + myJson[e].title + '</p>';
        contenedor.innerHTML += '<p>'+ "Fecha: " + myJson[e].date + '</p>';
        contenedor.innerHTML += '<p>'+ "Hora: " + myJson[e].hour + '</p>';
        contenedor.innerHTML += '<p>'+ "Descripción: " + myJson[e].description + '</p>';
        contenedor.innerHTML += '<p>'+ "Proxima actualización: " + myJson[e].update + '</p>' + '<br>';
    }

    });
}

$(bootstrap)
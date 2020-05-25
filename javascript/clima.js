function bootstrap()
{

    // Se hace el fetch a tu url
    fetch('https://ws.smn.gob.ar/alerts/type/AL')
    .then(function(response) {
        // Si todo sale bien en la promesa se devuelve el json de la respuesta
        return response.json();
    })
    .then(function(myJson) {
    //print para comprobar que se ubtuvo la alerta
        console.log(myJson[0]);
    // Se insertan los atributos de las alertas en clima.html
        const contenedor = document.querySelector('#alertas');
        contenedor.innerHTML += '<p>'+ "Titulo: " + myJson[0].title + '</p>';
        contenedor.innerHTML += '<p>'+ "Fecha: " + myJson[0].date + '</p>';
        contenedor.innerHTML += '<p>'+ "Hora: " + myJson[0].hour + '</p>';
        contenedor.innerHTML += '<p>'+ "Descripción: " + myJson[0].description + '</p>';
        contenedor.innerHTML += '<p>'+ "Proxima actualización: " + myJson[0].update + '</p>';
        
     
});
}

$(bootstrap)
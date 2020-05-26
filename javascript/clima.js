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
    for(e of myJson){
        contenedor.innerHTML += `
          <p> Titulo: ${e.title}  </p>
          <p> Fecha: ${e.date} </p>
          <p> Hora: ${e.hour}  </p>
          <p> Descripción: ${e.description} </p>
          <p> Proxima actualización: ${e.update} </p>  <br>
         `
    }

    });
}

$(bootstrap)
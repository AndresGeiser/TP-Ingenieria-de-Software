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

    var zonasAfectadas = '';
        //Rescatamos las zonas afectadas por cada alerta registrada
        for(i in e.zones)
        {   
            zonasAfectadas += e.zones[i] + " ";
        }

        contenedor.innerHTML += `
        <div id = ${e.idAlert}>
          <h3>  ${e.status + ": " + e.title}  </h3>
          <div id = "zonas">
            <p> ${zonasAfectadas} </p>
          </div>
          <div id = "datos">
            <p> Fecha: ${e.date} </p>
            <p> Hora: ${e.hour}  </p>
            <p> Descripción: ${e.description} </p>
            <p> Proxima actualización: ${e.update} </p>  <br>
           </div> 
        </div>  
         `
    }

    });
}

$(bootstrap)
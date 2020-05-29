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
            zonasAfectadas += e.zones[i] + ", ";
        }
        //Eliminamos la última coma
        zonasAfectadas = zonasAfectadas.substring(0, zonasAfectadas.length - 2);


        contenedor.innerHTML += `
        <div class = "alerta" >
          <div class = "${e.status}"> 
          <h2> <i class="fas fa-exclamation-triangle"></i> ${e.status + ": " + e.title}  </h2>
          </div>
          <div class = "zonas" >
            <p> <i class="fas fa-map-marker-alt"> </i> <b>Zonas</b>:  ${zonasAfectadas} </p>
          </div>
          <div class = "datos">
            <p> ${e.description} </p>
          </div> 
          <div class = "fecha">
            <p> <i class="fas fa-calendar-alt"></i>  <b>Fecha de emisión</b>: ${e.date} </p>
          <div class = "update">
            <p> <i class="fas fa-clock"></i> <b>Proxima actualización</b>: ${e.update} </p> 
          </div>
        </div>  
         `
    }

    });
}

$(bootstrap)
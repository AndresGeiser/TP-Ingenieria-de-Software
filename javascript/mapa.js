var marcadores = [];
var ubicaciones = [];
var map;

function cargarUbicaciones(negocios)
{
    var ungsLocation = [-34.5221554, -58.7000067];
    map = L.map('mapid').setView(ungsLocation, 15);
  
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    //Añadimos un marcador por cada negocio
    var marker;
    negocios.forEach(negocio => {
        marker = L.marker([negocio.latitud, negocio.longitud], {title: negocio.id}).bindPopup(negocio.nombre);//Le indicamos un title con el id del negocio para despues identificarlo 
        marker.addTo(map);
        marcadores.push(marker);
        ubicaciones.push([negocio.latitud, negocio.longitud]); //Vamos guardando las lat y long para centrar el mapa despues centrar el mapa en ellas
    });

    //Centramos el mapa en las ubicaciones de los negocios
    map.fitBounds(new L.LatLngBounds(ubicaciones));

}


function centrarMapa(seleccionado) {

  var id = seleccionado.id;
  
  //Recorremos los marcadores hasta encontrar el que coincida con el id del seleccionado
  marcadores.forEach(marker => {
    if (marker.options.title == id) {
      marker.openPopup(); 
      map.setView(marker.getLatLng(), 15); 
    }
  });

}




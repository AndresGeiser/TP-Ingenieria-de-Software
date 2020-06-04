
var marcadores = [];
var mapa;


function cargarUbicaciones(negocios) {

    var ungsLocation = [-34.5221554, -58.7000067];
    mapa = L.map('mapid').setView(ungsLocation, 15);
  
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);
    
    //Añadimos un marcador por cada negocio
    var ubicaciones = [];//Contendra las lat y long de los negocios para despues centrar el mapa en ellas
    var marker;
    negocios.forEach(negocio => {
        //Agregamos un title al marcador para identificarlo
        marker = L.marker([negocio.latitud, negocio.longitud], {title: negocio.id}).bindPopup(`<div class="popup"><h2>${negocio.nombre}</h2>${negocio.servicio}<br>${negocio.horario}</div>`);
        marker.addTo(mapa);
        marcadores.push(marker);
        ubicaciones.push([negocio.latitud, negocio.longitud]);
    });

    //Centramos el mapa en las ubicaciones de los negocios
    mapa.fitBounds(new L.LatLngBounds(ubicaciones));
}


function centrarMapa(seleccionado) {

  var id = seleccionado.id;
  
  //Recorremos los marcadores hasta encontrar el que coincida con el id del seleccionado
  marcadores.forEach(marker => {
    if (marker.options.title == id) {
      marker.openPopup(); 
      mapa.setView(marker.getLatLng(), 15);//Centramos el mapa en el marcador 
    }
  });

}
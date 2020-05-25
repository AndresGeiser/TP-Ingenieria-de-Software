function bootstrap()
{
    let map = L.map('mapid')

    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);
    


    //Rescatamos el archivo geoJson del que vamos a obtener los datos
    let geojson_url = "https://raw.githubusercontent.com/AndresGeiser/TP-Ingenieria-de-Software/master/javascript/localizaciones.geojson"
    //Tomo los datos de manera asincrónica utilizando promesas y los agrego al mapa
    fetch(
        geojson_url
    ).then(
        res => res.json()
    ).then(
        data => {

            //Agrego cada dato al mapa, junto a su nombre y horario al hacer click
            let geoJsonlayer = L.geoJson(data, {
                onEachFeature: function(feature, layer)
                {
                    //Agregamos al popup las propiedades que nos interesan
                    layer.bindPopup(feature.properties.nombre + 
                        "<br>" +  feature.properties.horario);
                    
                }
            }).addTo(map)
            //Centro el mapa sobre los datos
            map.fitBounds(geoJsonlayer.getBounds())

        }
    )


}
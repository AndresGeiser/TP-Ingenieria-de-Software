function bootstrap()
{
    let map = L.map('mapid')

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    //Direccion url del geoJson donde se define cada coordenada y sus caracteristicas (en mismo proyecto)
    let geojson_url = "https://raw.githubusercontent.com/AndresGeiser/TP-Ingenieria-de-Software/master/javascript/localizaciones.geojson"

    //Tomo los datos de manera asincrónica utilizando promesas y los agrego al mapa
    fetch(
        geojson_url
    ).then(
        res => res.json()
    ).then(
        data => {
            //Agrego cada dato al mapa, junto a su nombre al hacer click
            let geoJsonlayer = L.geoJson(data, {
                onEachFeature: function(feature, layer)
                {
                    layer.bindPopup(feature.properties['nombre'] )
                }
            }).addTo(map)
            //Centro el mapa sobre los datos
            map.fitBounds(geoJsonlayer.getBounds())

        }
    )

}
$(document).ready(function() {
    
    fetch('https://weatherservices.herokuapp.com/api/weather')
    .then(function(response) {
        // Si todo sale bien en la promesa se devuelve el json de la respuesta
        return response.json();
    })
    .then(function(myJson) {
        
        const datos = myJson.items[0];

        const contenedor = document.querySelector('#clima');

        //Cargamos los datos del clima del dia
        contenedor.innerHTML =`
        <div class="clima_principal">
                    <h1><i class="fas fa-map-marker-alt"></i>  ${datos.name}, ${datos.province}</h1><br>
                    <h2 class="temp_actual">${datos.weather.tempDesc}</h2><br>
                    <h3 class="descripcion">${datos.weather.description}</h3><br>
                    <p><b>Humedad:</b> ${datos.weather.humidity}%</p>
                    <p><b>Presión:</b> ${datos.weather.pressure} hPa</p>
                    <p><b>Viento:</b> ${datos.weather.wing_deg} a ${datos.weather.wind_speed} km/h</p>
                    <p><b>Visibilidad:</b> ${datos.weather.visibility} km</p>
        </div>
        `

        //Cargamos los datos del clima de los proximos dias
        const proximosDias = datos.forecast.forecast;
        
        contenedor.innerHTML += '<br><br><br><h2>Próximos dias</h2>'

        for (const dia in proximosDias) {

            if(dia == 0) {
                var climaPrincipal = contenedor.querySelector('.clima_principal');
                climaPrincipal.innerHTML +=`
                <h3>Noche: <span class="temp_noche">${proximosDias[dia].temp_noc}ºC</span></h3>
                `
            } else {
                contenedor.innerHTML +=`
                <div class="proximo_dia">
                        <h4>Fecha: ${proximosDias[dia].date}</h4><br>
                        <p><b>Min:</b> ${proximosDias[dia].temp_min}ºC</p>
                        <p><b>Max:</b> ${proximosDias[dia].temp_max}ºC</p>
                        <p><b>Por la mañana:</b> ${proximosDias[dia].morning.description}</p>
                        <p><b>Por la noche:</b> ${proximosDias[dia].afternoon.description}</p>
                </div>
                `
            }
        }
    });
});
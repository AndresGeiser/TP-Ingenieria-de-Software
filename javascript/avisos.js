$(document).ready(function() {

    //Funcion que oculta/muestra las tarjetas segun el filtro de reporte 
    $(".filtro_reporte").on( 'change', function() {
        
        //Obtenemos el filtro que se presiono mediante su id 
        var id = $(this).attr('id');
        
        //Verificamos si se activo
        if(this.checked) {
            if($('.filtro_edad#menor_a_uno').is(':checked')) { //Verificamos si el filtro de edad menor a un año esta activo
                $('.card.menor_a_uno.'+ id).show();
            }
            if($('.filtro_edad#uno_a_cinco').is(':checked')) { //Verificamos si el filtro de edad de uno a cinco años esta activo
                $('.card.uno_a_cinco.'+ id).show();
            }
            if($('.filtro_edad#seis_a_diez').is(':checked')) { //Verificamos si el filtro de seis a diez años esta activo
                $('.card.seis_a_diez.'+ id).show();
            }
            if($('.filtro_edad#mas_de_diez').is(':checked')) { //Verificamos si el filtro de mas de diez años esta activo
                $('.card.mas_de_diez.'+ id).show();
            }
        } else {              
            $('.card.'+ id).hide(); //Ocultamos las tarjetas que coincidan con el filtro
        }    
    });


    //Funcion que oculta/muestra las tarjetas segun la edad
    $(".filtro_edad").on( 'change', function() {
        
        //Obtenemos el filtro que se presiono mediante su id 
        var id = $(this).attr('id');
        
        if(this.checked) {
            if($('.filtro_reporte#adopcion').is(':checked')) { //Verificamos si el filtro de adopcion esta activo
                $('.card.adopcion.'+ id).show();
            }
            if($('.filtro_reporte#perdido').is(':checked')) { //Verificamos si el filtro de perdido esta activo
                $('.card.perdido.'+ id).show();
            }
            if($('.filtro_reporte#encontrado').is(':checked')) { //Verificamos si el filtro de encontrado esta activo
                $('.card.encontrado.'+ id).show();
            }
        } else {
            $('.card.'+ id).hide();   
        }    
    });

    /* $('.category_Aviso').click(function(){

        //Tomo la categoria que selecciona en una variable
        var catAviso = $(this).attr('category');

        //Oculto los avisos
        $('.card').hide();

        //Muestro los avisos que coincidan con la categoria elegida
        $('.card[category="'+catAviso+'"]').show();

    });

    $('.category_Aviso[category= "todo"]').click(function(){

        //Volver a mostrar todos los avisos
        $('.card').show();
    }); */

});
$(document).ready(function(){

    $('.category_Aviso').click(function(){

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
    });



});
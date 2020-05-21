
//Toma de datos del formulario
function login()
{   
    var nombreUsuario = document.getElementsByName("nombre");
    var password = document.getElementsByName("contraseña");


    validarDatos(nombreUsuario,password);
    
}

//Validación de usuario y contraseña
function validarDatos(user,pass)
{
    var nombreUsuario = user[0].value;
    var password = pass[0].value;

    if(nombreUsuario == "" || nombreUsuario.length < 4)
    {
        alert("Por favor, ingrese un nombre de usuario válido");
    }
    else if ( password.length < 8)
    {
        alert("La contraseña debe tener más de 8 digitos, vuelva a ingresarla")
    }

    else
    {
        alert("¡Bienvenido " + nombreUsuario + "!" );
        window.location = "index.html";    
    }
}



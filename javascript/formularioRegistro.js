
//Toma los datos del registro
function registrarse()
{
    var nombre = document.getElementsByName("nombre");
    var apellido = document.getElementsByName("apellido");
    var nombreUsuario = document.getElementsByName("nombreUsuario");
    var password = document.getElementsByName("contraseña");
    var passwordConfirm = document.getElementsByName("contraseñaConfirm")

    validarNombre(nombre, apellido);
    validarDatos(nombreUsuario,password,passwordConfirm);
}

//Validación de nombre y apellido
function validarNombre(nombre,apellido)
{
    var user = nombre[0].value;
    var surname = apellido[0].value;


    if ( user== "" || user.length < 4)
    {
        alert("Por favor ingrese un nombre válido")
    }

    if ( surname == "" || surname.length < 3)
    {
        alert("Por favor ingrese un apellido válido")
    }

}

//Validación de usuario y contraseña
function validarDatos(user,pass, passC)
{
    var nombreUsuario = user[0].value;
    var password = pass[0].value;
    var passwordConfirm = passC[0].value;

    if(nombreUsuario == "" || nombreUsuario.length < 4)
    {
        alert("Por favor, ingrese un nombre de usuario válido");
    }
    else if ( password.length < 8)
    {
        alert("La contraseña debe tener más de 8 digitos, vuelva a ingresarla")
    }
    else if ( password != passwordConfirm)
    {
        alert("Las contraseñas no coinciden")
    }

    else
    {
        alert("Registro exitoso!" );
        window.location = "login.html";    
    }
}



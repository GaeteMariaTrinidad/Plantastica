$(document).ready(function () {
    //Aqui oculto todos los div de los mensajes de error de los formularios para que no esten al iniciarlos
    $("#div_validacion").hide();
    $("#div_validacion2").hide();
    $("#div_validacion3").hide();
    $("#div_validacion4").hide();
    $("#form1").submit(function (e) {
        var correo = $("#idcorreo").val();
        var clave = $("#idclave").val();

        var enviar = false;
        var mensaje = "";

        //variable de expresión regular (valida correo electrónico)
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

        if (correo.trim() == "" || clave.trim() == "") {
            mensaje += "Debe rellenar todos los campos.<br>";
            enviar = true;
        }
        else {
            if (!regexEmail.test(correo)) {
                mensaje += "El correo electrónico no es valido.<br>";
                enviar = true;
            }

        }

        if(enviar){
            e.preventDefault();
            $("#div_validacion").show();
            $("#div_validacion").html(mensaje);
        }
        else{
            let n = "fernando@gmail.com";
            let c = "fernando123";
            if(correo == n && clave == c){
                console.log("Aqui")
                $(location).attr('href','iniciosesion.html');
                e.preventDefault();
            }
            else{
                e.preventDefault();
                $("#div_validacion").show();
                $("#div_validacion").html("Usuario y/o Contraseña incorrecta");
            }

        }



    });
});
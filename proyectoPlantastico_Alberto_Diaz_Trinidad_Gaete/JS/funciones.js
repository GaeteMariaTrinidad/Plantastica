function validar(){
    let nombre = document.getElementById('txt_nombre').value;
    console.log('Bienvenido: ' + nombre);
    
    if(nombre == ""){
    document.getElementById('txt_nombre').classList.add('is-invalid');
    } 
}

/*Button Toast*/
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

/* API ECONOMIA*/
function economia() {
  $.ajax({
      url:'https://mindicador.cl/api',
      method: 'GET',
      success: function(response) {
          console.log(response);

          $("#ol_economia").empty();

          $("#ol_economia").append('<li class="list-group-item d-flex justify-content-between align-items-start"> <div class="ms-2 me-auto"> <div class="fw-bold">' + response.dolar.valor + "</div>" +  '-' +   '</div> <span class="badge bg-primary rounded-pill">'  + '</span> </li>')
          for (let x = 0; x < response.length; x++) {
             
          }
      },
      error: function(error) {
          console.log(error);
      }
  });                                                                                                                                             
}

function enviarInformacion(){
  var correo = $("#idcorreito").val();
  var contrasena = $("#idclavecita").val();
  var nombre = $("#idnombre").val();
  var apellido = $("#idapellido").val();

  var data = {
    nombreFuncion: "ClienteAlmacenar",
    parametros: [correo,contrasena, nombre, apellido]

  };

  $.ajax({
    method: "POST",
    url: "https://fer-sepulveda.cl/API_PLANTAS/api-service.php",
    data: JSON.stringify(data),
    success: function (response) {
      if(response.result[0].RESPUESTA == 'OK') {  
      } else if (response.result[0].RESPUESTA == 'ERR01') {

      }
    },
    error: function (error) {
      console.log(error);
    }
  });
}

function ingresarSesion(){
  var correoLogin = $("#idcorreo").val();
  var contrasenaLogin = $("#idclave").val();

  var data = {
    nombreFuncion: "ClienteLogin",
    parametros: [correoLogin,contrasenaLogin]
  };

  $.ajax({
    method: "POST",
    url: "https://fer-sepulveda.cl/API_PLANTAS/api-service.php",
    data: JSON.stringify(data),
    success: function (response) {
      if (response.result == 'LOGIN OK'){
        const toast = swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', swal.stopTimer)
            toast.addEventListener('mouseleave', swal.resumeTimer)
          }
        })

        toast.fire({
          icon: 'warning',
          tittle: 'credenciales inválidas'
        });
      }

      console.log(response);

    },
    error: function (error) {
      console.log(error);
    }
  });
}
  

    
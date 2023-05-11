function validar(){
    let nombre = document.getElementById('txt_nombre').value;
    console.log('Bienvenido: ' + nombre);
    
    if(nombre == ""){
    document.getElementById('txt_nombre').classList.add('is-invalid');
    } 
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

/* API REGISTRO USUARIO*/
function enviarInformacion(){
  var correo = $("#idcorreito").val();
  var contrasena = $("#idclavecita").val();
  var nombre = $("#idnombre").val();
  var apellido = $("#idapellido").val();
  
  console.log(correo);
  console.log(contrasena);
  console.log(nombre);
  console.log(apellido);

  var data = {
    nombreFuncion: "ClienteAlmacenar",
    parametros: [correo,contrasena, nombre, apellido]

  };

  $.ajax({
    method: "POST",
    url: "https://fer-sepulveda.cl/API_PLANTAS/api-service.php",
    data: JSON.stringify(data),
    success: function (response) {
        if (response.result[0].RESPUESTA == 'OK') {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Cliente registrado correctamente'
            });

            $("#txt_nuevoCorreo").val("");
            $("#txt_nuevoContrasena").val("");
            $("#txt_nuevoNombre").val("");
            $("#txt_nuevoApellido").val("");

            var miModal = document.getElementById("exampleModal");
            $(miModal).modal("hide");
        } else if (response.result[0].RESPUESTA == 'ERR01') {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'warning',
                title: 'Correo ingresado ya se encuentra registrado'
            });
        }


        console.log(response);
    },
    error: function (error) {
        console.log(error);
    }
});
}

/* API INICIO SESION*/
function ingresarSesion(){
  var correoLogin = $("#idcorreo").val();
  var contrasenaLogin = $("#idclave").val();

  var data = {
    nombreFuncion: "ClienteLogin",
    parametros: [correoLogin, contrasenaLogin]
  };

  $.ajax({
    method: "POST",
    url: "https://fer-sepulveda.cl/API_PLANTAS/api-service.php",
    data: JSON.stringify(data),
    success: function (response) {
        if (response.result == 'LOGIN OK') {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Credenciales correctas'
            });
        } else if (response.result == 'LOGIN NOK') {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            }).then((result) => {
              // Redirigir al usuario a otra página HTML después de que termine el temporizador de SweetAlert2
              if (result.dismiss === swal.DismissReason.timer) {
                window.location.href = 'iniciosesion.html';
              }
            });

            Toast.fire({
                icon: 'warning',
                title: 'Credenciales inválidas'
            })
          }


        console.log(response);
    },
    error: function (error) {
        console.log(error);
    }
});
}

/* API CREACION PRODUCTO*/

function crearProducto(){
  var codigo = $("#idcodigo").val();
  var nombre = $("#idnomproduc").val();
  var descripcion = $("#iddescripcion").val();
  var precio = $("#idprecio").val();
  var stock = $("#idstock").val();

  var data = {
    nombreFuncion: "ProductoAlmacenar",
    parametros: [codigo, nombre, descripcion, precio, stock]

  };

  $.ajax({
    method: "POST",
    url: "https://fer-sepulveda.cl/API_PLANTAS/api-service.php",
    data: JSON.stringify(data),
    success: function (response) {
      if(response.result[0].RESPUESTA == 'OK') {  
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
      })

      Toast.fire({
          icon: 'success',
          title: 'Producto ingresado correctamente'
      });
  } else if (response.result == 'ERR01') {
      const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
      }).then((result) => {
        // Redirigir al usuario a otra página HTML después de que termine el temporizador de SweetAlert2
        if (result.dismiss === swal.DismissReason.timer) {
          window.location.href = 'iniciosesion.html';
        }
      });

      Toast.fire({
          icon: 'warning',
          title: 'Error al ingresar el producto'
      })
    }


  console.log(response);
},
error: function (error) {
  console.log(error);
}
});
}

/* API LISTAR PRODCUTOS*/
/* Devuelve resultados pero en Console */
function listarProducto() {
  $.ajax({
    method: "GET",
    url: "https://fer-sepulveda.cl/API_PLANTAS/api-service.php?nombreFuncion=ProductoListar",
    success: function (response) {
        console.log(response.result);
        
        const $cardsContainer = $('#div_productos');

        response.result.forEach((card) => {
            // Crear una nueva card con jQuery
            const $card = $('<div>', { class: 'col-sm-4 mb-4' }).append(
              $('<div>', { class: 'card' }).append(
                //$('<img>', { class: 'card-img-top', src: card.image, alt: card.title }),
                $('<div>', { class: 'card-body' }).append(
                  $('<h5>', { class: 'card-title', text: card.NOMBRE }),
                  $('<p>', { class: 'card-text', text: "Código: " + card.CODIGO }),
                  $('<p>', { class: 'card-text', text: "Descripción: " + card.DESCRIPCION }),
                  $('<p>', { class: 'card-text', text: "Precio: " + card.PRECIO }),
                  $('<p>', { class: 'card-text', text: "Stock: " + card.STOCK }),
                )
              )
            );
            // Agregar la card al contenedor
            $cardsContainer.append($card);
        })
    },
    error: function (error) {
        console.log(error);
    }
});                                                                                                                                         
}

/* API GENERAR CÓDIGO*/

$("#btnGeneraCodigo").click(function() {
  realizarCompra();
});

function realizarCompra(){
  var correo = $("#idcorreoCompra").val();

  var data = {
    nombreFuncion: "CompraAlmacenar",
    parametros: [correo]

  };

  $.ajax({
    method: "POST",
    url: "https://fer-sepulveda.cl/API_PLANTAS/api-service.php",
    data: JSON.stringify(data),
    success: function (response) {
      if(response.result[0].RESPUESTA == 'OK') {  
        $("#resultadoCompra").html("Tu código es: " + response.result[0].CODIGO);
  } else if (response.result == 'ERR01') {
    $("#resultadoCompra").html("Error");
    }
  console.log(response);
},
error: function (error) {
  console.log(error);
}
});
}


/* API LISTADO DE COMPRAS*/

/* API REINICIAR STOCK PRODUCTOS*/
  

/* REDIRECCION A INICIOSESION*/
$(document).ready(function() {
  // Manejar el evento click del botón btnIngresar
  $('#btnIngresar').click(function() {
    // Cerrar el modal
    $('#mdl_inicioSesionl').modal('hide');
    // Redirigir a otra página HTML después de que se cierre el modal
    setTimeout(function() {
      window.location.href = 'iniciosesion.html';
    }, 4200);
  });
});

/* REDIRECCION A INDEX*/
$(document).ready(function() {
  // Manejar el evento click del botón btnIngresar
  $('#btnCreaUsuario').click(function() {
    // Cerrar el modal
    $('#mdl_apiProfe').modal('hide');
    // Redirigir a otra página HTML después de que se cierre el modal
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 4200);
  });
});    

/* REDIRECCION DESDE CREAR PRODUCTO*/
$(document).ready(function() {
  // Manejar el evento click del botón btnIngresar
  $('#btnCreaProducto').click(function() {
    // Cerrar el modal
    $('#mdl_creaProducto').modal('hide');
    // Redirigir a otra página HTML después de que se cierre el modal
    setTimeout(function() {
      window.location.href = 'iniciosesion.html';
    }, 4200);
  });
}); 
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
    
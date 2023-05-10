$(document).ready(function(){
    $.ajax({
        url:'https://mindicador.cl/api',
        method: 'GET',
        success: function(response) {
            console.log(response);
  
            $("#indicadorEconomico").empty();
  
            $("#indicadorEconomico").append(response.dolar.valor)
            for (let x = 0; x < response.length; x++) {             
            }
        },
        error: function(error) {
            console.log(error);
        }
    });    
})
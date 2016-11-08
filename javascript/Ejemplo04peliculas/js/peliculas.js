$(document).ready(initializeEvents);

function initializeEvents(){
    $("tr").click(presionFila);
    $("#boton0").click(VerpeticionAjaxGenerica);
    $("#boton1").click(GuardarpeticionAjaxGenerica);
    $("#boton2").click(ModificarpeticionAjaxGenerica);
    $("#boton3").click(BorrarpeticionAjaxGenerica);
    $("#boton4").click(BorrarSeleccionadospeticionAjaxGenerica);

}

$(document).ready(function() { 
      $('#1').change(function() {
        if($(this).is(":checked")) {
            //var returnVal = confirm("Are you sure?");
           // $(this).attr("checked", returnVal);
           console.log("check");
        }
         
    });
});


function presionFila(){
    //con esto evito que me lo haga en la cabecera y no lo meta en los campos de texto
    if ($(this).find('td:eq(0)').text() !== "Id")
    {
    let filaActual = $(this);  
   // filaActual.css("background-color", "#ff0000");

    //filaActual.css("background-color", "#00ff00");
    filaActual.addClass("miclase");//  Un truco del profe era añadirle un class de manera dinamica y luego leer ese atributo añadido para saber que filas ha seleccionado

        $("#id").val($(this).find('td:eq(0)').text());
        $('#titulo').val($(this).find('td:eq(1)').text()); 
        $("#director").val($(this).find('td:eq(2)').text());
        $("#sinopsis").val($(this).find('td:eq(3)').text());
        $("#fecha").val($(this).find('td:eq(4)').text()); 

        //jqueryArray($(this).find('td:eq(0)').text());
   }
}

function VerpeticionAjaxGenerica(){
    $.ajax({       
        type:"GET",        
        dataType: "json",
        url: "http://localhost:3000/peliculas?date="+new Date()
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}

function GuardarpeticionAjaxGenerica(){
    var datoPelicula = {
            titulo: $("#titulo").val(),
            director:$("#director").val(),
            sinopsis:$("#sinopsis").val(),
            fecha:$("#fecha").val()
        }

    $.ajax({
     //el"post" no necesita "data" sino no funiciona el "get"
        data: datoPelicula,         
        // Tipo de peticion http
        type:"POST",
        // tipo de dato esperado
        dataType: "json",
        // Esta pagina es importante
      //  url: "https://jsonplaceholder.typicode.com/users"
       url: "http://localhost:3000/peliculas"
    })
    .done(anadeCompletada)
    .fail(peticionFallida);
}


function anadeCompletada(data, status,jqXHR){
    console.log("Petición completada con status "+ status 
    +" : " + data);  
    $( "#result" ).empty().append( data );
 VerpeticionAjaxGenerica();
    
}


function peticionCompletada(data, status,jqXHR){
//console.log(data);
//1º) borra la tabla 
$("#mitable tr:gt(0)").remove();

//2º) añado a la tabla los datos q recoge del json que esta en data

$.each(data, function(i, item) {
    //var $input = $("<input type='checkbox' id="+i+" value='first_checkbox'/>");
     /* var $buttonModifica = $("<input type='button' id='Modifica'+i value='Modificar'/>");
      var $buttonBorra = $("<input type='button' id='Borra'+i value='Borrar'/>");*/
       var valor = $('<tr>').append( 
             // $('<td>').html($input),         
            $('<td>').text(item.id),
            $('<td>').text(item.titulo),
            $('<td>').text(item.director),
            $('<td>').text(item.sinopsis),
            $('<td>').text(item.fecha)
            /*,
            $('<td>').html($buttonModifica),
             $('<td>').html($buttonBorra)*/
        );
        $(valor).click(presionFila);
        $("#mitable").append(valor);               
    });
    


}
function funcionDeAVerQueNaricesHagoPorFilaSeleccionada(){
    var valorDelId = $($(this).children()[0]).html();
    var timer = $.Deferred();
    setTimeout(timer.resolve, 5000);
    var  urlBorra = "http://localhost:3000/peliculas/" +valorDelId;
    $.ajax({      
        type:"DELETE",     
        dataType: "json",
        url: urlBorra
    })
    .done(borrarCompletada(valorDelId))
    .fail(peticionFallida)
    /*.when(timer, ajax).done(function() {
  
    })*/;

}
function ModificarpeticionAjaxGenerica(){
    //Ojo me he creado el timer de 5000 milissegundo y luego le he añadido el when q tarda esos 5000 milisegundos
    //para ejecutar el done ya que sino no refrescaba bien a pesar de que el json lo modificaba
    //haciendo esto modifica igual el json y ya refresca la nueva informacion 
    // lo he sacado de esta web:
    //http://stackoverflow.com/questions/14754619/jquery-ajax-success-callback-function-definition/14754681#14754681 
 
    var timer = $.Deferred();
    setTimeout(timer.resolve, 500);

   var datoPelicula = {
            id: $("#id").val(),
            titulo: $("#titulo").val(),
            director:$("#director").val(),
            sinopsis:$("#sinopsis").val(),
            fecha:$("#fecha").val()
        }
      
   var  urlModifica = "http://localhost:3000/peliculas/" + $("#id").val()

    $.ajax({      
       data: datoPelicula, 
        type:"PUT",     
        dataType: "json",
        url: urlModifica
    })
    .done(modificaCompletada(urlModifica))
    .fail(peticionFallida)
    .when(timer, ajax).done(function() {
  
    });
}


function BorrarpeticionAjaxGenerica(){  
        //Ojo me he creado el timer de 5000 milissegundo y luego le he añadido el when q tarda esos 5000 milisegundos
    //para ejecutar el done ya que sino no refrescaba bien a pesar de que el json lo borraba
    //haciendo esto borraba igual el json y ya refresca la nueva informacion 
    // lo he sacado de esta web:
    //http://stackoverflow.com/questions/14754619/jquery-ajax-success-callback-function-definition/14754681#14754681 
    var timer = $.Deferred();
    setTimeout(timer.resolve, 5000);
    var  urlBorra = "http://localhost:3000/peliculas/" + $("#id").val()
    $.ajax({      
        type:"DELETE",     
        dataType: "json",
        url: urlBorra
    })
    .done(borrarCompletada($("#id").val()))
    .fail(peticionFallida)
    .when(timer, ajax).done(function() {
  
    });
}

function borrarCompletada(valor){
    console.log("Lo ha borrado y debe de recargar la pagina" + valor);
    VerpeticionAjaxGenerica();
}



function BorrarSeleccionadospeticionAjaxGenerica(){  
        //Ojo me he creado el timer de 5000 milissegundo y luego le he añadido el when q tarda esos 5000 milisegundos
    //para ejecutar el done ya que sino no refrescaba bien a pesar de que el json lo borraba
    //haciendo esto borraba igual el json y ya refresca la nueva informacion 
    // lo he sacado de esta web:
    //http://stackoverflow.com/questions/14754619/jquery-ajax-success-callback-function-definition/14754681#14754681 
    
    $(".miclase").each(funcionDeAVerQueNaricesHagoPorFilaSeleccionada)
    
}

function modificaCompletada(valor){
    console.log("Lo ha modificado y debe de recargar la pagina" + valor);
    VerpeticionAjaxGenerica();    
}

function peticionFallida(jqXHR,status,error){
    console.log("Error al procesar la petición" );
    console.log("Status :" + status);
    console("Error! " + error);
}


$(document).ready(initializeEvents);

function initializeEvents(){
    $("tr").click(presionFila);
    $("#boton0").click(VerpeticionAjaxGenerica);
    $("#boton1").click(GuardarpeticionAjaxGenerica);
    $("#boton2").click(ModificarpeticionAjaxGenerica);
    $("#boton3").click(BorrarpeticionAjaxGenerica);
    
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
    let filaActual = $(this);  
   // filaActual.css("background-color", "#ff0000");
   //<--CLASS EN LUGAR DE METERLE UN CSS DIRECTAMENTE Y ASI LUEGO LE DIGO QUE RECORRA LA TABLAS EL QUE TENGA EL CSS Y YA ESTARIA-->
    /*console.log($mitable.)
    if ($('#miTabla >tbody >tr').length == 0){
    console.log ( "No hay filas en la tabla!!" );
}*/
    filaActual.css("background-color", "#00ff00");
    filaActual.class="miclase"; 
 
        $("#id").val($(this).find('td:eq(0)').text());
        $('#titulo').val($(this).find('td:eq(1)').text()); 
        $("#director").val($(this).find('td:eq(2)').text());
        $("#sinopsis").val($(this).find('td:eq(3)').text());
        $("#fecha").val($(this).find('td:eq(4)').text());  
   
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
        // Puede ser una cadena, un array o un object de JS
        // nombre=Ruben&nivel_de_cafe=medio
        //el"post" no necesita "data" sino no funiciona el "get"
        data: datoPelicula,         
        // Tipo de peticion http
        type:"POST",
        // tipo de dato esperado
        dataType: "json",
        // URL de comunicación con el servicio
      //  url: "https://jsonplaceholder.typicode.com/users"
       url: "http://localhost:3000/peliculas"
    })
    .done(anadeCompletada)
    .fail(peticionFallida);
}


function anadeCompletada(data, status,jqXHR){
    console.log("Petición completada con status "+ status 
    +" : " + data);
   // $("#contenido_de_ajax").html(data[0].nombre);
   // $("#contenido_de_ajax").html(data[7].username);
    //var content = $( data ).find( "#content" );
    $( "#result" ).empty().append( data );
 VerpeticionAjaxGenerica();
    
}


function peticionCompletada(data, status,jqXHR){
console.log(data);
//console.log("Petición completada con status "+ status  +" : " + data); 
//1º) borra la tabla 
$("#mitable tr:gt(0)").remove();
//2º) añado a la tabla los datos q recoge del json que esta en data

$.each(data, function(i, item) {
    //var $input = $("<input type='checkbox' id="+i+" value='first_checkbox'/>");
      var $buttonModifica = $("<input type='button' id='Modifica'+i value='Modificar'/>");
      var $buttonBorra = $("<input type='button' id='Borra'+i value='Borrar'/>");
       var valor = $('<tr>').append( 
             // $('<td>').html($input),         
            $('<td>').text(item.id),
            $('<td>').text(item.titulo),
            $('<td>').text(item.director),
            $('<td>').text(item.sinopsis),
            $('<td>').text(item.fecha),
            $('<td>').html($buttonModifica),
             $('<td>').html($buttonBorra)
        ); //.appendTo('#records_table');
//        $tr =$("tr").click(presionFila);
        $(valor).click(presionFila);
        $("#mitable").append(valor);   
      
       
    });
}


function ModificarpeticionAjaxGenerica(){  
   var datoPelicula = {
            id: $("#id").val(),
            titulo: $("#titulo").val(),
            director:$("#director").val(),
            sinopsis:$("#sinopsis").val(),
            fecha:$("#fecha").val()
        }
       /*var datoPelicula = {
            titulo: "ppp",
            director:"ssd",
            sinopsis:"tt",
            fecha:"12112016"
        }*/
       var  urlModifica = "http://localhost:3000/peliculas/" + $("#id").val()
//console.log(urlModifica);
    $.ajax({      
       data: datoPelicula, 
        type:"PUT",     
        dataType: "json",
        url: urlModifica
    })
    .done(modificaCompletada(urlModifica))
    .fail(peticionFallida);
}


function BorrarpeticionAjaxGenerica(){  
 /*  var datoPelicula = {
            id: $("#id").val(),
            titulo: $("#titulo").val(),
            director:$("#director").val(),
            sinopsis:$("#sinopsis").val(),
            fecha:$("#fecha").val()
        }*/
       /* datoPelicula = {
            id: 4,
            titulo: "ppp",
            director:"ssd",
            sinopsis:"tt",
            fecha:"12112016"
        }*/
        var  urlBorra = "http://localhost:3000/peliculas/" + $("#id").val()
    $.ajax({      
        type:"DELETE",     
        dataType: "json",
        url: urlBorra
    })
    .done(borrarCompletada($("#id").val()))
    .fail(peticionFallida);
}

function borrarCompletada(valor){
    console.log("Lo ha borrado y debe de recargar la pagina" + valor);
    VerpeticionAjaxGenerica();
}

function modificaCompletada(valor){
    console.log("Lo ha modificado y debe de recargar la pagina" + valor);
//    location.reload();
    VerpeticionAjaxGenerica();
     

}

function peticionFallida(jqXHR,status,error){
    console.log("Error al procesar la petición" );
    console.log("Status :" + status);
    console("Error! " + error);
}


/*
function Guardar(){
    //guarda los datos en la tabla los metidos por campso
    $("#descripcion").fadeOut("slow");

}

function Modificar(){
    //modificar el valor seleccionado
     $("#descripcion").fadeIn("slow");
}
function Borrar(){
    //borrar la/(s) fila(s)
     $("#descripcion").fadeIn("slow");
}
*/

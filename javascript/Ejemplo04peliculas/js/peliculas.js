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
           alert("check");
        }
         
    });
});

function presionFila(){
    let filaActual = $(this);  
   // filaActual.css("background-color", "#ff0000");
   //<--CLASS EN LUGAR DE METERLE UN CSS DIRECTAMENTE Y ASI LUEGO LE DIGO QUE RECORRA LA TABLAS EL QUE TENGA EL CSS Y YA ESTARIA-->
    /*alert($mitable.)
    if ($('#miTabla >tbody >tr').length == 0){
    alert ( "No hay filas en la tabla!!" );
}*/
    filaActual.css("background-color", "#ff0000");
    filaActual.class="miclase";
           /*  $("#id").val() = $(this)[0].val();
             $("#titulo").val() = $(this)[1].val();
           $("#director").val() = $(this)[2].val();
           $("#sinopsis").val() = $(this)[3].val();
            $("#fecha").val()  = $(this)[4].val();*/
}

function VerpeticionAjaxGenerica(){
    $.ajax({       
        type:"GET",        
        dataType: "json",
        url: "http://localhost:3000/peliculas"
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
    alert("Petición completada con status "+ status 
    +" : " + data);
   // $("#contenido_de_ajax").html(data[0].nombre);
   // $("#contenido_de_ajax").html(data[7].username);
    //var content = $( data ).find( "#content" );
    $( "#result" ).empty().append( data );
 VerpeticionAjaxGenerica();
    
}


function peticionCompletada(data, status,jqXHR){

//alert("Petición completada con status "+ status  +" : " + data); 
//1º) borra la tabla 
$("#mitable tr:gt(0)").remove();
//2º) añado a la tabla los datos q recoge del json que esta en data

$.each(data, function(i, item) {
    //var $input = $("<input type='checkbox' id="+i+" value='first_checkbox'/>");
      
       var valor = $('<tr>').append( 
             // $('<td>').html($input),         
            $('<td>').text(item.id),
            $('<td>').text(item.titulo),
            $('<td>').text(item.director),
            $('<td>').text(item.sinopsis),
            $('<td>').text(item.fecha)
        ); //.appendTo('#records_table');
//        $tr =$("tr").click(presionFila);
        $(valor).click(presionFila);
        $("#mitable").append(valor);   
      
       
    });
}


function ModificarpeticionAjaxGenerica(){  
  /* var datoPelicula = {
            id: $("#id").val(),
            titulo: $("#titulo").val(),
            director:$("#director").val(),
            sinopsis:$("#sinopsis").val(),
            fecha:$("#fecha").val()
        }*/
       var datoPelicula = {
            titulo: "ppp",
            director:"ssd",
            sinopsis:"tt",
            fecha:"12112016"
        }

    $.ajax({      
       data: datoPelicula, 
        type:"PUT",     
        dataType: "json",
        url: "http://localhost:3000/peliculas/4"
    })
    .done(modificaCompletada)
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
    $.ajax({      
        type:"DELETE",     
        dataType: "json",
        url: "http://localhost:3000/peliculas/11"
    })
    .done(borrarCompletada)
    .fail(peticionFallida);
}

function borrarCompletada(){
    alert("Lo ha hecho y debe de recargar la pagina");
    VerpeticionAjaxGenerica();
}

function modificaCompletada(){
    alert("Lo ha hecho y debe de recargar la pagina");
    VerpeticionAjaxGenerica();
/* $.each(data, function(i, item) {
  //   if (i==)
     
    var $input = $("<input type='checkbox' id="+i+" value='first_checkbox'/>");
        var $tr = $('<tr>').append( 
              $('<td>').html($input),         
            $('<td>').text(item.id),
            $('<td>').text(item.titulo),
            $('<td>').text(item.director),
            $('<td>').text(item.sinopsis),
            $('<td>').text(item.fecha)
        ); //.appendTo('#records_table');
        $('table').append($tr);
       // console.log($tr.wrap('<p>').html());
     //  alert(item);
    });*/

}

function peticionFallida(jqXHR,status,error){
    alert("Error al procesar la petición" );
    console.log("Status :" + status);
    console("Error! " + error);
}


function presionFila(){
/* como un componente para hacer onclick en una fila  */
//$(tr) no lo puedo hacer pq seria para todas las filas */
    let filaActual = $(this); 
    // cojo el this para que me coja su fila que le he dado click
    filaActual.css("background-color", "#ff0000");
}

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


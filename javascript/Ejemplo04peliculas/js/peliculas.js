$(document).ready(initializeEvents);

function initializeEvents(){
    $("tr").click(presionFila);
    $("#boton0").click(VerpeticionAjaxGenerica);
    $("#boton1").click(GuardarpeticionAjaxGenerica);
    $("#boton2").click(ModificarpeticionAjaxGenerica);
   // $("#boton3").click(BorrarpeticionAjaxGenerica);
    
}



function VerpeticionAjaxGenerica(){
    $.ajax({
        // Puede ser una cadena, un array o un object de JS
        // nombre=Ruben&nivel_de_cafe=medio
        //el"post" no necesita "data" sino no funiciona el "get"
       // data: {nombre:"Ruben",nivel_de_cafe:"medio"},
        // Tipo de peticion http
        type:"GET",
        // tipo de dato esperado
        dataType: "json",
        // URL de comunicación con el servicio
      //  url: "https://jsonplaceholder.typicode.com/users"
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
}

function peticionCompletada(data, status,jqXHR){
    alert("Petición completada con status "+ status 
    +" : " + data);
   // $("#contenido_de_ajax").html(data[0].nombre);
   // $("#contenido_de_ajax").html(data[7].username);

$.each(data, function(i, item) {
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
    });


}


function ModificarpeticionAjaxGenerica(){
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
    .done(modificaCompletada)
    .fail(peticionFallida);
}


function modificaCompletada(data, status,jqXHR){
 $.each(data, function(i, item) {
     if (i==)
     
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
    });

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


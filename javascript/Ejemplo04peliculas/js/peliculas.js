$(document).ready(initializeEvents);

function initializeEvents(){
    $("tr").click(presionFila);
    $("#boton1").click(GuardarpeticionAjaxGenerica);
    $("#boton2").click(ModificarpeticionAjaxGenerica);
    $("#boton3").click(BorrarpeticionAjaxGenerica);
    
}

function GuardarpeticionAjaxGenerica(){
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
       url: "http://localhost:3000/animales"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}

function ModificarpeticionAjaxGenerica(){
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
         url: "https://jsonplaceholder.typicode.com/users"
      // url: "http://localhost:3000/animales"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}

function peticionCompletada(data, status,jqXHR){
    alert("Petición completada con status "+ status 
    +" : " + data);
    $("#contenido_de_ajax").html(data[0].nombre)
   // $("#contenido_de_ajax").html(data[7].username);
}
function peticionFallida(jqXHR,status,error){
    alert.log("Error al procesar la petición" );
    console.log("Status :" + status);
    console("Error! " + error);
}

function BorrarpeticionAjaxGenerica(){
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
       // url: "https://jsonplaceholder.typicode.com/users"
       url: "http://localhost:3000/animales"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
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



function GuardarpeticionAjaxGenerica(){
    $.ajax({
        // Puede ser una cadena, un array o un object de JS
        // nombre=Ruben&nivel_de_cafe=medio
        data: {nombre:"Ruben",nivel_de_cafe:"medio"},
        // Tipo de peticion http
        type:"GET",
        // tipo de dato esperado
        dataType: "json",
        // URL de comunicación con el servicio
       // url: "https://jsonplaceholder.typicode.com/users"
       url: "http://localhost:3000/animales"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}
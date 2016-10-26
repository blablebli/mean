$(document).ready(inicializarEventos);
function inicializarEventos(){
    $("#peticion_ajax").click(peticionAjaxGenerica);
   /* $("#MuestraAnimales").click(peticionAjaxGenericaMuestraAnimales);
    $("#MuestraPrimerAnimal").click(peticionAjaxGenericaMuestraPrimerAnimal);
    $("#MuestraUltimoAnimal").click(peticionAjaxGenericaMuestraUltimoAnimal);
    $("#BorraPrimerAnimal").click(peticionAjaxGenericaBorraPrimerAnimal);
     $("#BorraUltimoAnimal").click(peticionAjaxGenericaBorraUltimoAnimal);
    $("#ActualizaPrimerAnimal").click(peticionAjaxGenericaActualizaPrimerAnimal);
    $("#ActualizaUltimoAnimal").click(peticionAjaxGenericaActualizaUltimoAnimal);*/

}
function peticionAjaxGenerica(){
    $.ajax({
        // Puede ser una cadena, un array o un object de JS
        // nombre=Ruben&nivel_de_cafe=medio
        // si pongo post: tengo que poner data
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

function peticionCompletada(data, status,jqXHR){
    alert("Petición completada con status "+ status 
    +" : " + data);
    $("#contenido_de_ajax").html(data[0].nombre);
    //$("#contenido_de_ajax").html(data[7].username)
}
function peticionFallida(jqXHR,status,error){
    alert.log("Error al procesar la petición" );
    console.log("Status :" + status);
    console("Error! " + error);
}

function pruebasConGetYPost(){
    $.get("http://localhost:8080/ejemplo-17-fichero_alojado_en_servidor.txt",
    resultadoGet);
    $.post("http://localhost:8080/ejemplo-17-fichero_alojado_en_servidor.txt",
    resultadoPost);
}
function resultadoGet(data,status){
    alert("Resultado : " + data);
}
function resultadoPost(){
    alert("Post correcto!");
}
/*
function peticionAjaxGenericaMuestraAnimales(){
    $.ajax({
        // Puede ser una cadena, un array o un object de JS
        // nombre=Ruben&nivel_de_cafe=medio
        data: {nombre:"Ruben",nivel_de_cafe:"medio"},
        // Tipo de peticion http
        type:"GET",
        // tipo de dato esperado
        dataType: "json",
        // URL de comunicación con el servicio
        url: "https://jsonplaceholder.typicode.com/users"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}

function peticionAjaxGenericaMuestraPrimerAnimal(){
    $.ajax({
        // Puede ser una cadena, un array o un object de JS
        // nombre=Ruben&nivel_de_cafe=medio
        data: {nombre:"Ruben",nivel_de_cafe:"medio"},
        // Tipo de peticion http
        type:"GET",
        // tipo de dato esperado
        dataType: "json",
        // URL de comunicación con el servicio
        url: "https://jsonplaceholder.typicode.com/users"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}

function peticionAjaxGenericaMuestraUltimoAnimal(){
    $.ajax({
        // Puede ser una cadena, un array o un object de JS
        // nombre=Ruben&nivel_de_cafe=medio
        data: {nombre:"Ruben",nivel_de_cafe:"medio"},
        // Tipo de peticion http
        type:"GET",
        // tipo de dato esperado
        dataType: "json",
        // URL de comunicación con el servicio
        url: "https://jsonplaceholder.typicode.com/users"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}


function peticionAjaxGenericaBorraPrimerAnimal(){
    $.ajax({
        // Puede ser una cadena, un array o un object de JS
        // nombre=Ruben&nivel_de_cafe=medio
        data: {nombre:"Ruben",nivel_de_cafe:"medio"},
        // Tipo de peticion http
        type:"GET",
        // tipo de dato esperado
        dataType: "json",
        // URL de comunicación con el servicio
        url: "https://jsonplaceholder.typicode.com/users"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}


function peticionAjaxGenericaBorraUltimoAnimal(){
    $.ajax({
        // Puede ser una cadena, un array o un object de JS
        // nombre=Ruben&nivel_de_cafe=medio
        data: {nombre:"Ruben",nivel_de_cafe:"medio"},
        // Tipo de peticion http
        type:"GET",
        // tipo de dato esperado
        dataType: "json",
        // URL de comunicación con el servicio
        url: "https://jsonplaceholder.typicode.com/users"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}

function peticionAjaxGenericaActualizaPrimerAnimal(){
    $.ajax({
        // Puede ser una cadena, un array o un object de JS
        // nombre=Ruben&nivel_de_cafe=medio
        data: {nombre:"Ruben",nivel_de_cafe:"medio"},
        // Tipo de peticion http
        type:"GET",
        // tipo de dato esperado
        dataType: "json",
        // URL de comunicación con el servicio
        url: "https://jsonplaceholder.typicode.com/users"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}

function peticionAjaxGenericaActualizaUltimoAnimal(){
    $.ajax({
        // Puede ser una cadena, un array o un object de JS
        // nombre=Ruben&nivel_de_cafe=medio
        data: {nombre:"Ruben",nivel_de_cafe:"medio"},
        // Tipo de peticion http
        type:"GET",
        // tipo de dato esperado
        dataType: "json",
        // URL de comunicación con el servicio
        url: "https://jsonplaceholder.typicode.com/users"
    })
    .done(peticionCompletada)
    .fail(peticionFallida);
}
*/

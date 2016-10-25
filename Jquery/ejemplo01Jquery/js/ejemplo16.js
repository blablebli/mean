$(document).ready(initializeEvents);
function initializeEvents(){
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
}

function hideBox(){
    $("#descripcion").fadeTo("slow",0.5).hide("slow");
}

function showBox(){
    //Complementa la acciona anterior
    $("#descripcion").show().fadeTo("slow",1);
}
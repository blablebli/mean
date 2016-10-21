$(document).ready(inicializarEventos);
/* Añado estas funciones de presionTitulo1 y presionTitulo2 a los eletos que yor quiera cuando haga click*/

//fijate que facil a sido añadir el evento click al h2 que no tiene que antes en javascript había que meterle unaddListener
//porque no lo tiene por defecto.
function inicializarEventos()
{
  $("#titulo1").click(presionTitulo1);
    $("#titulo2").click(presionTitulo2); 
}

/*Lo que hago es cambiar los colores*/
function presionTitulo1(){
    let mi_titulo=$("#titulo1"); /*Obtengo el titulo1 */
    mi_titulo.css("color","#ff0000");
    mi_titulo.css("background-color","#ffff00");
    mi_titulo.css("font-family","Courier");
}

function presionTitulo2(){
    let mi_titulo=$("#titulo2"); /*Obtengo el titulo1 */
    mi_titulo.css("color","#ffff00");
    mi_titulo.css("background-color","#ff0000");
    mi_titulo.css("font-family","Courier");
}
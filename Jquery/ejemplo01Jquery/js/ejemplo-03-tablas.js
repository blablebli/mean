$(document).ready(inicializarEventos);

function inicializarEventos(){
//si lo hiciera con javascript con document.getElement 
//tendría que hacer un array y recorriendo todos los tr para hacerlo que con jquery es más facil
$("tr").click(presionFila);
 // aqui simplemente le digo que se lo aplique a todos los tr esta funcion click

}

function presionFila(){
/* como un componente para hacer onclick en una fila  */
//$(tr) no lo puedo hacer pq seria para todas las filas */
    let filaActual = $(this); 
    // cojo el this para que me coja su fila que le he dado click
    filaActual.css("background-color", "#ff0000");
}
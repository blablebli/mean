$(document).ready(initializeEvents);

function initializeEvents(){
    $("tr").click(presionFila);
    $("#boton1").click(Guardar);
    $("#boton2").click(Modificar);
    $("#boton3").click(Borrar);
    
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


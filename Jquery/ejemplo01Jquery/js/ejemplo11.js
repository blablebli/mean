$(document).ready(initializeEvents);
function initializeEvents(){
   $("#boton1").click(deleteAll);
   $("#boton2").click(restoreAll);
   $("#boton3").click(addLastElement);
   $("#boton4").click(addFirstElement);
   $("#boton5").click(deleteLastElement);
   $("#boton6").click(deleteFirstElement);
}
/*Implemento las funciones*/
function deleteAll(){
      /*Obtengo el ul y lo vacio fijate que facil esto de empty lo tenia que hacer a mano*/
    $("ul").empty();
}

function restoreAll(){
    /*Copio el html del ul 
    <ul>
        <li> Primer Item</li>
        <li>Segundo Item</li>
        <li>Tercero Item</li>
        <li>Cuarto Item</li>
    </ul>
    */
    /*Lo que hacer es todo lo que halla en el nodo ul me lo cargo y pongo lo que tenga dentro de html*/
   /* $("ul").html(<ul>
        <li> Primer Item</li>
        <li>Segundo Item</li>
        <li>Tercero Item</li>
        <li>Cuarto Item</li>
    </ul>);*/
        // dentro de <ul> me lo cargo y pongo lo que tenga dentro de html()
    $("ul").html("<li>Primer item</li><li>Segundo item</li><li>Tercer item</li><li>Cuarto item</li>");
}

function addLastElement(){
    /*Obtengo el ul y lo vacio fijate que facil esto de empty lo tenia que hacer a mano*/
    $("ul").append("<li>Agrego un item al final</li>");

}

function addFirstElement(){
    /*Obtengo el ul y lo vacio fijate que facil esto de empty lo tenia que hacer a mano*/
    $("ul").prepend("<li>Agrego un item al principio</li>");
}

function deleteRemoveElement(){
    /*Obtengo el ul y lo vacio fijate que facil esto de empty lo tenia que hacer a mano*/
    let posicion = $("li").length-1; // aqui tengo la longiiutd
    //$("li").eq(posicion).remove();
    let liToDelete = $("li").eq(posicion);
    liToDelete.remove();
}

function deleteFirstElement(){
    /*Obtengo el ul y lo vacio fijate que facil esto de empty lo tenia que hacer a mano*/
    $("li").eq(0).remove();
}

// Lo hago aparte no se lo he hecho a un boton
function deleteFirstAndSecondElement(){
    /*OBorro el primero y el segundo con el lt less than*/
    $("li:lt(2)").remove();
}

function deletePreAndLastElement(){
    /*Obtengo el primero*/
   let posicion = $("li").length-3; // aqui tengo la longiiutd
   //despues de situarmen en el penultimo borro este y el ultimo con el gt great than
    let liToDelete = $("li:gt("+posicion+")");
    liToDelete.remove();
}



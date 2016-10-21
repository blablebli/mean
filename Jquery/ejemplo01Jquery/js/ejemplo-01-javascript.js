addEvent(window,'load',inicializarEventos,false); // lo que hace es añadir al boton primero la funcion onclick y lanza el alert

//Se crea un javascript de funciones que veremos que en jquery ya esta hecho
//En el onload le añado los eventos javascript

//Me llega el elemento el nombre del elemento la funcion/

function addEvent(elemento,nomevento,funcion,captura)
{//todo elemento del dom tendría que tener un evento atachado asociado si lo tiene se lo añado
//ejemplo un boton tiene el evento click y lo que hara sera que sea onclick otro ejemplo tiene
//el evento blur y la funcion que me creo que eria onblur
    if(elemento.attachEvent){
        elemento.attachEvent('on' + nomvento, funcion);
        return true;
    }else
    {//si el elemento del dom tiene el evento puede responder al listener
      if(elemento.addEvenListener)
      {
        elemento.addEvenListener(nomevento, funcion, captura);
        return true;
      }
      return false;
    }
}

function inicializarEventos(){
    //lo guardo
    let botonjs1= document.getElementById("botonjs1");
    //llamo a nuestro addEvent
   addEvent(botonjs1,'click', presionarBotonConJavascript,false); // el false es para decir en que fase lo quieres lanzar un poquito antes o despues
}

function presionarBotonConJavascript(e)
{
    alert("Botoón js pulsado");
}

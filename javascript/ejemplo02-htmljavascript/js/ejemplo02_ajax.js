var ajax
function construirObjetoAjax(){
    if(window.XMLHttpRequest) // si existe esta ppdad del navegador y hay algo creo el new dentro
    {
        ajax = new XMLHttpRequest();
    }
    else{
        //en caso que no lo sea voy a mirar que sea de microsoft pq no reconoce los objetos nativos y 
        //utilizaba activexobject
        ajax = new ActiveXObject("microsoft.XMLHTTP");//esto funciona hasta el ie6 los nuevos ya no estan
    }
}

//ojo si yo quiero procesar los datos de ajayx me tengo que crear la funcion 
function procesarRespuesta(){
    //el 4 es el estado final
    if(ajax.readyState ==4){
        //el httpstatus es 200 todo correcto, 404 not found, 501... errores,  
        if(ajax.status == 200)
        {
            //AHORA LE DIGO LO QUE QUIERO HACER CON EL OBJETO AJAX QUE ME LLEGA EN MICASOcon el ajax.response
            //LO VOY A METER EN EL NAVEGADOR DONDE YO QUIERA se lo meto por ejemplo al id

            document.getElementById("resultado").innerHTML = ajax.responseText;
        }else
        {
            //"servicio temporal no disponible"
        }
    }
}

function hacerPeticion(){
    //4 pasos
    construirObjetoAjax(); //1ºpara hacer la peticion construyo el objeto echo
    ajax.onreadystatechange = procesarRespuesta//2º que es l oque va a hacer cuando cambie el estado de ajax
    // los estados son iniciada la conexion con el servidor,iniciada con el 0, iniciada 
                                                //con el 1 pero no hecho el send, 
                                                  //  el 2 inciada hecha con el send, 
                                                   // 3 interactiva pero no completa,     
                                                   // 4 compelta..
    //cuando estaba iniciando se ponia un gift mientras cargaba la pagina ;

    // Ojo le doy la fución al objeto ajax cuando cambien el estado pero no la ejecuto que la ejecutara 
    //cuando cambie el codigo
    ajax.open('GET', "http://localhost:8080/ejemplo02.html"); //3ºle digo la url paso lo q abre.
   
    ajax.send(null);//4º IMPORTANTE hasta que no haga send no la envia la peticion y abre la url de los pasos anteriores
//ES COMO EN GOOGLE HASTA QUE NO LEDOY ENTER NO BUSCA NO HACE EL SEND ESTA ESCUCHANDO EL SERVIDOR WEB Y HASTA Q NO HACE EL SEND NO LA RECIBE
//SI YO ABRO EL GOOGLE Y CIERRO LA PANTALLA EL BUSCADOR NO HACE NADA
    //pero ajax no puede hacer todas las peticiones que solemos querer tiene limitaciones put get post delete
}
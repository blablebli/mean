var http=require('http');
//utilizo un nuevo modulo que es un buffer list bf 
//la cache no cuenta como memoria del sistema optimiza para q vaya más rapid 
//y el buffer es para envio y recepcion continuo del dato.
var bl=requier('bl');

http.get("http://www.google.es"),(response){
     //Cuando la comunicacion es lenta q va enviando como cachitos
     //y cuando termina el pipe de enviar al buffer entonces sera cuando lo envía
    response.pipe(       
        bl((error,dara)=>{
            if(error){
                return console.error("Error al procesar la petición",error);
            }else{
                //cuando se ha recibido ya todo el string
                data = data.toString();
                console.log("Número de caracteres: " + data.lenght);
                console.log("data:\n" +data);

            }
        })
    );

}

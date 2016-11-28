var http = require("http");
var bl =require ("bl");
var results = [];
var urls = ["http://www.google.es","http://ww.amazon.com"];
var count = 0;

//este es el script q ejecutara las a todas las peticiones de forma asyncrona
    for(let i=0; i<urls.length;i++)
    {
        //esta funcion la tengo q crear
        httpGet(i);
    }

function httpGet(indice){
    console.log("Comprobando " + urls[indice]);
   //si no entiendo el lambda hacer la funcion en su lugar
    http.get(urls[indice],(respuesta)=>{
        //en la parte respuesta es asyncrona pq no le digo yo cuando tiene que devolver.
         // sin lambda estan facil como esto una funcion anonima 
          //respuesta.pipe(bl(function(error,datos){
        respuesta.pipe(bl((error,datos)=>{
            if(error)
            {
             console.error(error);
            }else{
                    results[indice] = datos.toString();
                    count++; // incremento el contador y si es igual a 2
                    if(count===urls.length){
                        mostrarResultados();
                    }
            }
        }))
    })
}

// despues cuando haya echo tdas las peticiones get q muestre los resultados
function mostrarResultados(){
    for(let i=0; i<urls.length;i++)
    {
        console.log("URL: " + urls[i]+
   "\nNumeros caracteres: " + results[i].length)
    }
}


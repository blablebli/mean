var express = require("express");
var app = express();

function evaluaElVerboHttp(request,response){
    //mando la ruta y el verbo para q vea el cliente q corresponde con el correcto
    response.send("Ruta " + request.originalUrl + "Verbo: " + request.method);
}

//creo 3 verbos para mirar la funcion q he puesto
app.post ("/",evaluaElVerboHttp);
app.put ("/",evaluaElVerboHttp);
app.delete ("/",evaluaElVerboHttp);

//le pongo otra ruta y q coga todos los verbos más parecido a lo q hago con el http da igual lo q hagas 
//lo voy a devolver sin importar el verbo
app.all("/paratodos", evaluaElVerboHttp);
//uso patrones le digo que empiece por inicio que contega lo q le de la gana y termine por la palabra
app.all("/inicio*fin", evaluaElVerboHttp);

//esto es rest comunicacion mediante PATH y pongo al lado una funcion por ejemplo con lambda en este caso
//otroseria con uan funcion
//recuerda que rest es distinto de json pq puede devolver xml o pdf 
//pero el formato más eficiente el json con respecto a los otros es más eficiente +
//"/clientes/:idCliente?*/facturas/*:idFactura" si pongo detras de idCliente ?* sacaria las factura idfactura de todos los clientes
app.get("/clientes/:idCliente/facturas/*:idFactura", 
                  (request,response)=>{
                  //console.log("Resultados:", request.params);
                    //si la respeusta coincide con estas condiciones devuelve algo
                  response.send("Resultados: \n\tCliente: " + request.params.idCliente  +  " \n\tFactura: " + request.params.idFactura 
                               + "\n\t json: "  + JSON.stringify(request.params));
                  }
       )

// el get no lo hice con funcion sino a mano
app.get("/",
    (request,response)=>{
         //el requeste me da a lo bruto la ruta
        console.log("Acceso a la ruta",request) ;
        //otra forma mapea el objeto a texto plano
       // console.log("Acceso a la ruta" + JSON.stringify(request.params)); 

        //Ahroa cojo el response y se lo mando algo al cliente para q le llegue la peticion hecho sino no hace nada
        response.send("Respuesta recibida!");  
     }
    );
app.get("/save/:fichero.:extension", (request,response)=>{
    //cons esto si yo pongo clientes.pdf crea un fichero bajandome una libreria q cree pdf y me lo haría
    response.send("Ahora genero un fichero de tipo:  " + request.params.extension);
    }
)
    
    
function funcionIntermedia(request, response,next)
{
    console.log("Ejecuta a las: " +new Date());
  // esto lo pondria en la shell cuando vea mongodb y mongoose ahora no va el db no existe 
  //lo que hace que cada vez un update añade en el hits al valor q le llega añade uno de la direccion original q le llega
  //y el true dice q sino existe q lo cree con valor inicial uno.
  // db.analytics.update({url:request.originalUrl},{$set:{hits:{$inc:1}},true)
  //esto me daria {url: hits:2318 } {url: /clienteshits:52234 }
    next();// manejador q cuando termina la funcion pasa a la siguiente
}

app.get("/concatenado", 
              funcionIntermedia,
              //siempre la funcion final le tengo q enviar algo al cliente 
              (reques,response)=>{
                    response.send("Enviado");
              }
              );

//concateno 3 funciones en este caso la misma
app.get("/concatenado2", 
              funcionIntermedia,
              funcionIntermedia,
              funcionIntermedia,
              //siempre la funcion final le tengo q enviar algo al cliente 
              (reques,response)=>{
                    response.send("Enviado");
              }
              );
            //concateno 3 funciones en este caso la misma

function funcionIntermediaFin(request, response,next)
{// console.log("Ejecuta a las: " +new Date());
 response.send("fin"); // veo que sino pongo response.find en el encadenado se para --> enseña el fin en el postman 
 //pero no enseña
 //Ahroa podria poner esto
    /*if(noAutenticado)
    {
        response.send("fin");
    }else
    {
        next();
    }*/
}
app.get("/concatenado3", 
              funcionIntermedia,
              funcionIntermediaFin,
              funcionIntermedia,
              //siempre la funcion final le tengo q enviar algo al cliente 
              (reques,response)=>{
                    response.send("Enviado");
              }
              );
    //ahroa ya puedo levantar el servidor

//Lo pongo todo en una ruta conjunta
app.route("/rutaconjunta")
 .get(evaluaElVerboHttp)
 .post(evaluaElVerboHttp)
 .put(evaluaElVerboHttp)
 .delete(evaluaElVerboHttp);


 var router = express.Router();//he creado un objeto de express 
 //pero no se le he asignado ahora a ningun app
 router.use(funcionIntermedia)// Si le pongo el use todas las funciones utilizaran esto
 //ejemplo si yo quisiera saber cuantas peticiones han hecho en un log lo podría dar aquí.
 router.get("/conrouter",evaluaElVerboHttp)
  router.post("/conrouterpost",evaluaElVerboHttp)
  //asigno ese enrutador a un path
  app.use("/cosacuca",router);
  //de tal manera q ahora puedo generar arboles de peticiones q seran (/cosacuca)

  //Finalmente se suele hacer las rutas en un fichero por ejemplo de empleados
  var router = require("../rutasDeClientes.js")
  // y luego abajo le digo donde usarlo con el app.use("/cosacuca",router); 
  //y esta separado por ficheros los distintos negocios.

    app.listen(8080);
//para q me diga q ha cargado el modulo
    console.log("Servidor iniciado");
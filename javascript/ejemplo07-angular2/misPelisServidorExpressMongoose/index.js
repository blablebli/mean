var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect("localhost:27017/test")

var Pelicula = require("./modeloSchemaPeli.js");

 console.log("Servidor EMPIEZA");

// el get no lo hice con funcion sino a mano
app.get("/",
    (request,response)=>{
         //el requeste me da a lo bruto la ruta
      //  console.log("Acceso a la ruta",request.parmas) ;
        //otra forma mapea el objeto a texto plano
        console.log("Acceso a la ruta" + JSON.stringify(request.params)); 
        //getPeliculas(20,0);
                /*var esdla = new Pelicula(
                    {titulo:"El señor de los arillos",
                    autor:"JJ",
                    sinopsis:"buen resumen"});
                esdla.save((error)=>{
                    if(error){
                        console.error("Error al guardar: ",error)
                    }else{
                        console.log("Pelicula guardada " + esdla._id)
                    }
                });*/
            //Ahroa cojo el response y se lo mando algo al cliente para q le llegue la peticion hecho sino no hace nada
        // response.send("Respuesta recibida del root!");  
         response.send(JSON.stringify({ 'titulo': 'PeliBBdd1', 'autor':'Desde Express', 'sinopsis':'Sin bbdd todavia'}));
    //response.send(JSON.stringify({titulo: 'PeliBBdd1', autor:'Desde Express', sinopsis:'Sin bbdd todavia'}));
        }
    );// CIERRO EL GET



app.get("/listar",
    (request,response)=>{
         //el requeste me da a lo bruto la ruta
       // console.log("Acceso a la ruta", JSON.stringify(request.params)) ;
     console.log("Acceso a la ruta");
            Pelicula.find({}, function (err, docs) {
                    response.json(docs);
                // response.send(docs);
                });

app.get("/listar/:_id",
  (request,response)=>{
   // console.log("Acceso a la ruta", JSON.stringify(request.params)) ;
   console.log("Acceso a la ruta id");
        Pelicula.find({id:_id}, function (err, docs) {
                response.json(docs);
       // response.send(docs);
    });

  });


   /* var esdla = new Pelicula(
    {titulo:"Peli2",
    autor:"blable",
    sinopsis:"hoy es 7 de diciembre"});
esdla.save((error)=>{
    if(error){
        console.error("Error al guardar: ",error)
    }else{
        console.log("Pelicula guardada " + esdla._id)
    }
});*/
    
    
    
    
        //otra forma mapea el objeto a texto plano
       // console.log("Acceso a la ruta" + JSON.stringify(request.params)); 

        //Ahroa cojo el response y se lo mando algo al cliente para q le llegue la peticion hecho sino no hace nada
        //response.send("Respuesta recibida del root!");  
       // response.send(JSON.stringify({ 'titulo': 'PeliBBdd1', 'autor':'Desde Express', 'sinopsis':'Sin bbdd todavia'}));
 
// response.send(JSON.stringify(getPeliculas(20,0));

 /*response.send(JSON.stringify(
          {
        'pelisExternas':[
            { 'titulo':'Externas titulo 1', 'autor':'adfa', 'sinopsis':'Dsada'},
            { 'titulo':'Externas titulo 2', 'autor':'adfa', 'sinopsis':'Dsada'},
            { 'titulo':'Externas titulo 3', 'autor':'adfa', 'sinopsis':'Dsada'},
            { 'titulo':'Externas titulo 4', 'autor':'adfa', 'sinopsis':'Dsada'},
            { 'titulo':'Externas titulo 5', 'autor':'adfa', 'sinopsis':'Dsada'},
            { 'titulo':'Externas titulo 6', 'autor':'adfa', 'sinopsis':'Dsada'}
        ]
    }
 ));*/
        // response.send(JSON.stringify({ titulo: 'PeliBBdd1', autor:'Desde Express', sinopsis:'Sin bbdd todavia'}));
         
     }
    );// CIERRO EL GET


   /* router.get("/mydata", restrict, (req: Request, res: Response) => {
    res.send({ title: 'hello', myVar:'world'});
    // or
    res.send(JSON.stringify({ title: 'hello', myVar:'world'}));
});router.get("/mydata", restrict, (req: Request, res: Response) => {
    res.send({ title: 'hello', myVar:'world'});
    // or
    res.send(JSON.stringify({ title: 'hello', myVar:'world'}));
});*/

app.get("/mispelis",
    (request,response)=>{
         //el requeste me da a lo bruto la ruta
        console.log("Acceso a la ruta",request) ;
        //otra forma mapea el objeto a texto plano
       // console.log("Acceso a la ruta" + JSON.stringify(request.params)); 

        //Ahroa cojo el response y se lo mando algo al cliente para q le llegue la peticion hecho sino no hace nada
        response.send("Respuesta recibida de mis pelis!");  
     }
    );
/*



app.get("/save/:fichero.:extension", (request,response)=>{
    //cons esto si yo pongo clientes.pdf crea un fichero bajandome una libreria q cree pdf y me lo haría
    response.send("Ahora genero un fichero de tipo:  " + request.params.extension);
    }
)
    

*/
    app.listen(3300);
  //      app.listen(4200);
//para q me diga q ha cargado el modulo
    console.log("Servidor iniciado");
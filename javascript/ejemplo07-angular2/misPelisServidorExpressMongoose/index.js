var express = require("express");
var app = express();
var bodyParser     =        require("body-parser");
var mongoose = require("mongoose");
var db=mongoose.connect("localhost:27017/test");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var Pelicula = require("./modeloSchemaPeli.js");
var PeliculaMongooseModel = mongoose.model('Pelicula');

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

//GET - Return all registers
/*exports.findAll = function(req, res) {
 Client.find(function(err, clients) {
 if(err) res.send(500, err.message);
 console.log('GET /clients')
 res.status(200).jsonp(clients);
 });
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
 Client.findById(req.params.id, function(err, client) {
 if(err) return res.send(500, err.message);
 console.log('GET /clients/' + req.params.id);
 res.status(200).jsonp(client);
 });
};*/

//POST - Insert a new register
app.post("/listar", function (req, res) {

 console.log('POST');
 console.log(req.body);
/*  console.log('entra');
  console.log( req.body.titulo);
   console.log('entra2');
  console.log( req.body.name);
   console.log('entra3');
  console.log( req.body.sinopsis);
  console.log('entra4');*/  
 var pelicula = new Pelicula({
 titulo: req.body.titulo,
 autor: req.body.autor,
 sinopsis: req.body.sinopsis
 });
 //console.log('entra5');
 pelicula.save(function(err, pelicula) {
 if(err) return res.send(500, err.message);
// res.status(200).jsonp(peli);
res.json({});

 });
});

//PUT - Update a register already exists
// ----------------------------------------------------
//app.route('/listar/:listarTitulo');

app.put("/listar", function(req, res) {
// PeliculaMongooseModel.find({titulo:req.params.titulo}, function(err, peli) {
     Pelicula.find({titulo: +"'"+req.params.titulo+"'"}, function(err, peli) {
  if (peli){
    console.log(req.body);
     /* peli.titulo = req.body.titulo;
      peli.autor = req.body.autor;
      peli.sinopsis = req.body.sinopsis;
      /*Pelicula.save();
      res.send('Pelicula edited');*/

      console.log(peli.titulo + "--" + peli.autor + "--" + peli.sinopsis);
 var update = { titulo : req.body.titulo, autor : req.body.autor, sinopsis : req.body.sinopsis }; // 4

        PeliculaMongooseModel.update({titulo:+"'"+req.params.titulo+"'"}, update, function(err) { // 5
            if(err) {
                return res.send(500, err);
            }

            res.json(peli);
        });

/*      peli.save(function(err) {
            if(err) return res.send(500, err.message);
// res.status(200).jsonp(peli);
        res.json({});

         });*/
    }else{
      res.send('Pelicula doesnt exist');
    }
//res.json({});*/

// });
 });
});

//DELETE - Delete a register with specified ID
app.delete = function(req, res) {
 Pelicula.findById(req.params.id, function(err, peli) {
 peli.remove(function(err) {
 if(err) return res.send(500, err.message);
 res.json({ message: 'Successfully deleted' });
 });
 });
};

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
var express = require("express");
var app = express();
var bodyParser     =        require("body-parser");
var mongoose = require("mongoose");
//var db=mongoose.connect("localhost:27017/test");
//login
var passport	= require('passport');
var config      = require('./config/database'); // get db config file
var User        = require('./app/models/user'); // get the mongoose model
var port        = process.env.PORT || 8080;
var jwt         = require('jwt-simple');
//añado esto
// var morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//inicio login
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
// log to console
//app.use(morgan('dev'));
 
// Use the passport package in our application
app.use(passport.initialize());

 


// demo Route (GET http://localhost:8080)
app.get('/', function(req, res) {
  res.send('Hello! The API is at http://localhost:' + port + '/api');
});
// demo Route (GET http://localhost:8080)
// ...
  
// connect to database
mongoose.connect(config.database);

// pass passport for configuration
require('./config/passport')(passport);
 
// bundle our routes
var apiRoutes = express.Router();
 
// create a new user account (POST http://localhost:8080/api/signup)
apiRoutes.post('/signup', function(req, res) {
    console.log("Entra en el post de signup");
  if (!req.body.name || !req.body.password) {
      console.log("vacio");
    res.json({success: false, msg: 'Please pass name and password.'});
  } else {
      console.log("nombre"+ req.body.name);
    var newUser = new User({
      name: req.body.name,
      password: req.body.password
    });
    // save the user
    console.log("nombre"+ req.body.name);
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});
// create a new user account (POST http://localhost:8080/signup)
// ...

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function(req, res) {
    console.log("Entra en el post de authenticate");
  User.findOne({
    name: req.body.name
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.encode(user, config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

apiRoutes.get('/memberinfo', passport.authenticate('jwt', { session: false}), function(req, res) {
  console.log("Entra al get memberinfo con authenticate");
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
        }
    });
  } else {
    res.status(403).send({success: false, msg: 'No token provided.'});
  }
});
 
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
// connect the api routes under /api/*
app.use('/api', apiRoutes);
// Start the server
//app.listen(port);
console.log('There will be dragons: http://localhost:' + port);

/////fin login
/* */
var Pelicula = require("./modeloSchemaPeli.js");
var PeliculaMongooseModel = mongoose.model('Pelicula');



var http = require('http').Server(app);
var io = require('socket.io')(http);
var sockets = [];
io.origins('http://localhost:4200');
// Por defecto tenemos ya namespace
// http://localhost:3000/chat/socket.io
var chat = io.of("/chat");
chat.on('connection',(socket)=>{
    console.log("Cliente conectado!!");
    sockets.push(socket);
    socket.on('mando-un-mensaje',(mensaje)=>{
        console.log("Mensaje recibido : ",mensaje);
         
        mensaje.user = socket.id;
        if(sockets.length > 3){
            sockets[3].emit('mando-un-mensaje',{user:"tu mismo",content:"Solo para ti"});
        }
        socket.emit('mando-un-mensaje',mensaje); // yo 
        
        chat.emit('mando-un-mensaje',mensaje);// a todos
        //socket.broadcast.emit('mando-un-mensaje',mensaje);// todos menos yo!  
    });
});
chat.on('disconnect',(socket)=>{
    console.log("Cliente desconectado!!")
});

http.listen(3000,()=>{
    console.log("Iniciado el http listen del chat en *:3000");
})



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
/*Pelicula.findOneAndUpdate({titulo:req.params.titulo }, { titulo:req.params.titulo, autor:req.params.autor,sinopsis:req.params.sinopsis }, function(err, peli) {
 if (err) throw err;

  // we have the updated user returned to us
  console.log(peli);
});*/
     Pelicula.find({titulo:req.params.titulo}, function(err, peli) {
  if (peli){
    console.log(req.body);
     /* peli.titulo = req.body.titulo;
      peli.autor = req.body.autor;
      peli.sinopsis = req.body.sinopsis;
      
      peli.save(function(err) {
            if(err) return res.send(500, err.message);
// res.status(200).jsonp(peli);
        res.json({});

         });*/

      console.log(peli.titulo + "--" + peli.autor + "--" + peli.sinopsis);
 var update = { titulo : req.body.titulo, autor : req.body.autor, sinopsis : req.body.sinopsis }; // 4

        PeliculaMongooseModel.update({titulo:req.params.titulo}, update, function(err) { // 5
            if(err) {
                return res.send(500, err);
            }

            res.json(peli);
        });


    }else{
      res.send('Pelicula doesnt exist');
    }
//res.json({});*/

// });
 });
});


app.put("/listar", function(req, res) 
{
// PeliculaMongooseModel.find({titulo:req.params.titulo}, function(err, peli) {
     Pelicula.findById({titulo:req.params.titulo}, function(err, peli)
      {
            if (peli){
                console.log(req.body);
                peli.titulo = req.body.titulo;
                peli.autor = req.body.autor;
                peli.sinopsis = req.body.sinopsis;
            
                    peli.save(function(err) 
                    {
                            if(err) return res.send(500, err.message);
                    /* res.status(200).jsonp(peli);
                            res.json({});*/
                    console.log('User successfully updated!');

                    });
            }else{
            res.send('Pelicula doesnt exist');
            }
                    //res.json({});*/

                    // });
        });
        });


     /* console.log(peli.titulo + "--" + peli.autor + "--" + peli.sinopsis);
 var update = { titulo : req.body.titulo, autor : req.body.autor, sinopsis : req.body.sinopsis }; // 4

        PeliculaMongooseModel.updateById({titulo:req.params.titulo}, update, function(err) { // 5
            if(err) {
                return res.send(500, err);
            }

            res.json(peli);
        });*/

    
//DELETE - Delete a register with specified ID
app.delete("/listar", function(req, res) {
 Pelicula.findById(req.params.id, function(err, peli) {
 peli.remove(function(err) {
 if(err) return res.send(500, err.message);
 res.json({ message: 'Successfully deleted' });
 });
 });
});

  
    
    
    
    
 /* 

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
*/

app.listen(3300);
    //app.listen(3300);
  //      app.listen(4200);
//para q me diga q ha cargado el modulo
    console.log("Servidor iniciado en el puerto 3300");
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var passport	= require('passport');
var config      = require('./config/database'); // get db config file
var User        = require('./app/models/user'); // get the mongoose model
var port        = process.env.PORT || 8080;
var jwt         = require('jwt-simple');
 
// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
// log to console //esto es para el allow control access
app.use(morgan('dev'));
 
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
 //Aqui simplemente es crear el usuario y lo guardo en la bbdd no tiene seguridad hasta ahora no he hecho nada
// create a new user account (POST http://localhost:8080/api/signup)
apiRoutes.post('/signup', function(req, res) {
  if (!req.body.name || !req.body.password) {
    res.json({success: false, msg: 'Please pass name and password.'});
  } else {
    // creo mi usuario y lo doy de alta
    var newUser = new User({
      name: req.body.name,
      password: req.body.password
    });
    // save the user
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

//Aqui esta la chica hago una pagina con login miro si esta el usuario luis en la bbdd con el findOne
//y si esta Luis miro q coincide la contraseña, por si lo ha metido mal 
//si la contraseña esta bien, devuelvo el token con los datos q me mandan y q recogo en angular y que servira de comunicacion.
apiRoutes.post('/authenticate', function(req, res) {
  User.findOne({ // me encuenta el usuario
    name: req.body.name
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      //si el password es correcto genero un nuevo token y lo devuelo
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.encode(user, config.secret); // aqui el usuario y su password lo encripto y genero el token
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token}); // devuelvo el token si funciona
        } else {
          res.send({success: false, msg: 'Authentication failed. Wrong password.'});//devuelvo q ha fallado
        }
      });
    }
  });
});
//una vez generado el token el cliente esta obligado  a mandar con cualquier peticion el token si viene con memberinfo
//addemás ese token que viene tiene q empezar con jwt
apiRoutes.get('/memberinfo', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers); // primero cojo el token
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    //decodifico el token y miro a ver si coincide en la bbdd. Como en la bbdd tengo 
    //el nombre si decodificar miro si por ejemplo luis esta alli
    User.findOne({
      name: decoded.name
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          // aqui ya te dice q has tenido suerte
          res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
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
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);
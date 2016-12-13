var express = require('express');
var passport = require('passport');
var DropboxStrategy = require('passport-dropbox');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var app= express(); // que crea la aplicacion

//si voy a tulizr session tengo q inicializar previo el passport 
//en el anterior ejemplo no lo necesite pq no utilize session
app.use(passport.initialize());

//paso3 utilizo la sesion
var session= require('express-session');

let users = {};
app.use(passport.initialize());
app.use(session(
    {
        secret: 'clave secreta',
        resave: false,
        saveUninitialized: true,
        cookie:{ secure: false } // si pongo true es ssl y q seria https en desarrollo false en produccion pondria true
    }
));

//ahora le digo como tiene serializar y deserializar para almacenar la informacion del usuario 
//q le teng q decir q quiero almacenar muchas veces no ser guarda todo el usuario sino solo el id o el token es este caso todo el usuario.
passport.serializeUser((user,done)=>{
//aqui serializo el usuario y q continue
    done(null,user);
})

passport.deserializeUser((user,done)=>{
//aqui deserializo el usuario y q continue
    done(null,user);
})

//aqui tengo q almacenar la informacion de session por lo tanto añado más cosas
//La estrategis de dropbox lleva un objeto con unas ppdad concreat
//y una funcion q tiene un toke el tokesecre el profile y el next

passport.use(new DropboxStrategy({ // aqui como me comunico con el DropboxStrategy necesito estas 3 entradas
 //Paso1 cogo los valores del dropbox
   consumerKey:'xeux9nizpz1f0nt',
   consumerSecret:'rap1y44klyjhb4n',
    callbackURL: 'http://localhost:8080/dropbox'
    },
    (token,tokeSecret,profile,next)=>{

// paso 2 me da el profile todos los valores
 console.log("Perfil de dropbox : ",profile);
//en la versino anterior no necesitaba session pero en angular tenia q mandar cada vez
//paso5
        if(users[profile.id]) {// tendria q ver q el usuario esta en bbdd en este caso lo miro en lav ariable de memoria
            next(null,users[profile.id])
        }else{ // si el usuario no estuviera en mi bbdd lo guardaria lo daria de alta
            users[profile.id]= profile;// lo guardo en memoria en una varialble global el objeto completo
            // aqui lo guardaria en mongodb el token
             next(null,profile);// 
        }
}))

///paso 6 le digo q coga mi estrategia del dropbox y si devuelve la estrategia true 
//coge del 3 le digo q ejecutela funcion de tercer parametro que devuelva cualquiere cosa
app.get("/dropbox", passport.authenticate('dropbox'),(request,response)=>{
        response.send("Soy feliz");
});

app.listen(8080);

/*
/*
 linkedin lo q me falta es sacar el clientId y el clientSecret
 
 passport.use(new LinkedInStrategy({
  clientID: LINKEDIN_KEY,
  clientSecret: LINKEDIN_SECRET,
  callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_basicprofile'],
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}));*/

/* con linkedin asi seria la utilizacion de autentificacion
and then authenticate as:

app.get('/auth/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE'  }),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  });

the login callback:

app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

*/
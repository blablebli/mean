var express = require('express');
//1º añado ahora la seguridad
var passport    = require('passport');

var app= express();

//para evitar el problema de acceso Access-Control-Allos-Origin
//Otra opcion es con app.user(cors);
//en lugar del cors q con eso ya estaria lo hago a mano con el next
// esta escuchando y enviandocualquier peticion
//Filosofia del middelware  es cualquier cosa q hace reques response y next y algo dentro
app.use((request, response,next)=>{
    //con esto se evita cualquier peticion hara esto lo primero de hacerla y es q este autentificado
    response.header('Access-Control-Allow-Origin', request.headers.origin);
  response.header('Access-Control-Allow-Headers', 'Authorization')
    next();
})
//2º) le digo la extrategia q voy a usar BasicStrategy
var Strategy    = require('passport-http').BasicStrategy;

//3º) Ahora le digo q voy a usar de la estrategia.
passport.use(new Strategy((username,password,done)=>{
    // Cuando se use la estrategia q me lo vea
    console.log("username :" + username + " pass: "+ password);
    //si es igual a algo particular
    if(username == "luis" && password == "luis")
    {
        done(null, true);
    }
    else{
        done(null, false);
    }
}));

//4ºPaso  añado al get como argumento passport.authenticate('basic', {session:false}) y ya tiene seguridad
//ya no accede todos. 
app.get("/home", passport.authenticate('basic', {session:false}),(request,response)=>{
    console.log("Acesso permitido");
    response.send("Acceso concedido");
})

app.listen(8080);
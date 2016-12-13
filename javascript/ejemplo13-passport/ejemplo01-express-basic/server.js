var express = require('express');
//1º añado ahora la seguridad
var passport = require('passport');
var app= express();

//2º) le digo la extrategia q voy a usar BasicStrategy
var Strategy = require('passport-http').BasicStrategy;

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
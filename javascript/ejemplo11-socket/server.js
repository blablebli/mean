var app= require('express')();
var http= requrire('http').Server(app);
var io = require('socket.io')(http);
io.origins('http://localhost:4200');

//Por defecto tenemos ya namespace
//http://localhost:3000/socket.io
//Lo primero es como pongo la oreja estoy escuchando.
io.on('connection', (socket)=>{
    console.log("Cliente conectado");
    io.on('mando-un-mensaje',(mensaje)=>{
     //como respuesta mandaré q he recibido un mensaje
        console.log("Mensaje recibido:" + mensaje);
        //si el servidor quire enviarle algo al usuario lo hace con el emit
        //En este caso es el servidor  tengo 3 formas de enviar un mensaje
        sockect.emit('mando-un-mensjase',mensaje);// este soy yo el servivor  y puedo emitir
        //si el socket es el cliente, si al "io" le hago emit son son todos lo recibiran incluido yo  el que lo envio
        io.emit('mando-un-mensaje', mensaje);  // Si hago un chat empleo el de todos y yo tambien.
        socket.broadcast.emit('mando-unm-mensaje', mensaje); // todos menos yo 
    });
});

io.on('disconnect', (socket)=>{
    console.log("Cliente desconectado");
});
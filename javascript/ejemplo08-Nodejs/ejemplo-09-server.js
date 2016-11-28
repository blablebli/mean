var net = require("net"); // utilio la libreria para la conexion net ahora ya no es http

//me creo mi fucno miSocket
var server = net.createServer(miSocket);

function miSocket(socket){
    socket.end("Hola caracola!!!\n");
}

//ahora creo para levantar y escuchar el socket

server.listen(8888);
console.log("Servidor iniciado en el puerto 8888");

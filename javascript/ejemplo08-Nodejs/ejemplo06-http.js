let http = require("http");
//ESto es cliente que consume un servicio ,es decir el servidor puede tener varios clientes q hacer por ejemplo tengo que coger los tiempos de cada uno de ellos y devolver 
// solo las peticiones  las más veces.
http.get("http://www.google.es/jkasdfhjkl",(respuesta)=>{
    respuesta.setEncoding("utf8");
    respuesta.on("data",console.log);
    respuesta.on("error",console.error);
}).on("error",console.error);
let fs= require('fs')
//voy a contar palabras de un fichero
//necesito para ello leer del disco duro con el fileSystem fs

//hay un export q me lee ficheros
/*el 0 el node
1 la ruta del fichero
el 2 para ponere el fichero q yo quiera*/
let fichero= process.argv[2];
let contenido= fs.readFileSync(fichero);// le paso el fichero para q lo lea ojo es sync asi q bloquearia y no hay q hacerlo 
//en nodejs pq no es porogramacion asincrona solo si fuera un programa standalone.
//lo convierto en string el objeto q me devuelve los divido por filas y le digoq me de la longitud
let numeroDeFilas= contenido.toString().split('\n').length;
console.log("Filas del fichero: " + fichero + "\nLineas " + numeroDeFilas);
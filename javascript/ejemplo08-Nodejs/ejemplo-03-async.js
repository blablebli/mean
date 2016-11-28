let fs= require('fs')
//voy a contar palabras de un fichero
//necesito para ello leer del disco duro con el fileSystem fs

//hay un export q me lee ficheros
/*el 0 el node
1 la ruta del fichero
el 2 para ponere el fichero q yo quiera*/
let fichero= process.argv[2];
//Diferencia con el ejercicio 2  es q ahora es async
//Lo puedo hacer con lambda en lugar de con la funcion asyncrona es lo mismo y más limpio
//fs.readFileS(fichero,(error,contenido)=>{}); 
fs.readFile(fichero,miFuncionAsincrona);
//y me creo la funcion
function miFuncionAsincrona(error,contenido){
    if(error){
        console.error("Error al ejecutar la funcion asincrona", error);
    }else
    {
        let numeroDeFilas= contenido.toString().split('\n').length;
        console.log("Filas del fichero: " + fichero + "\nLineas " + numeroDeFilas);
    }
}


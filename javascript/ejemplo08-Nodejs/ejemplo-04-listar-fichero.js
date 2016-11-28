let fs = require("fs");
let path = require("path");
let directorio = process.argv[2];// path del directorio
let extension = process.argv[3];// extension a buscar
if(process.argv.length < 4){
    console.log("USAGE: ");
    return 0;
}
//el readdir lo q pide como argumento una funcion
fs.readdir(directorio,operarConResultados);

function operarConResultados(error,ficheros){
    if(error){
        console.error("Que habrá pasado!",error);
    }else{
        console.log("Funciones normales");
        //aqui lo recorro con el foreach
        ficheros.forEach(operacionPorFichero)
    }
}

function operacionPorFichero(fichero){
    
    if(path.extname(fichero)==extension){
        console.log("Normal"+fichero);
    }
}
/*hago el mismo de arriba fs.readdir(directorio,operarConResultados);pero sin la necesidad de llamar a una funcion
y hago lo mismo de laos 3 funcionesp ero haciendolo aqui */
fs.readdir(directorio,(error,ficheros)=>{
    if(error){
        console.error("Que habrá pasado!",error);
    }else{
        console.log("Expresiones Lambda");
         //aqui lo recorro con el foreach
        ficheros.forEach(
            (fichero)=>{
                if(path.extname(fichero)==extension){
                    console.log("Lambda" + fichero);
                }
            })
    }
})
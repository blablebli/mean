let moduloDeFiltrado = require("./ejemplo-05-listar-ficheros-module.js")
let directorio = process.argv[2];// path del directorio
let extension = process.argv[3];// extension a buscar

function queHacerCuandoDevuelvaLosFicheros(error,arrayDeFicheros){
    if(error){
        console.error("Error al listar",error);
    }else{
            //fat arrow que es la lambda "=>"que las funciones tiene más visivilidad
    //utilizo el foreach para recorrerlo y que extraiga los datos

        ficheros.forEach((fichero)=>{
            console.log(fichero);
        })
    }
}
moduloDeFiltrado(directorio,extension,queHacerCuandoDevuelvaLosFicheros)

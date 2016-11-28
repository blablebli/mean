let fs = require("fs");
let path = require("path");

module.exports = function (directorio,extension,callback){
    //fat arrow que es la lambda "=>"que las funciones tiene más visivilidad
    fs.readdir(directorio,(error,ficheros)=>{
        if(error){
            //console.error("Que habrá pasado!",error);
            callback(error);
        }else{
            //console.log("Expresiones Lambda");
            // filtro el contenido de ficheros
            //con filter le digo si el fichero es igual a algo q lo devuelva
               //fat arrow que es la lambda "=>"que las funciones tiene más visivilidad

            ficheros = ficheros.filter((fichero)=>{
                return path.extname(fichero) === "." + extension;
            });
            callback(null,ficheros);
        }
    })
}
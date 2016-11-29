//1º Carga del modulo
var mongoose = require("mongoose");
//2º Conectar a la base de de datos
mongoose.connect("mongodb://localhost/test");
//3º Genero el modelo (dentro de model tiene q ser una clase, 
//  me creo el Libro (q corresponderá a la la colección) 
//y le digo los campos)
var Libro = mongoose.model("Libro",{
    titulo: String,
    autor: String,
    paginas: Number
});

//4º Estas creando el objeto dentro del constructor le doy los valores
var esdla =new Libro(
                    {titulo:"El señor de los anillos", 
                    autor:"JJ",
                    paginas:3500})
                    // No hace falta q metiera todos los campos
//5º) Grado el libro q es asincrono es una función q lo hago con lambda y que recibe
//el error en el caso de que hay error
esdla.save((error)=>{
    if(error)
    {
        console.error("Error al guarda:"+error);
    }else{
        console.log("Pelicula guardada" + esdla._id);
    }
});



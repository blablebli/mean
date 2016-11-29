var mongoose = require("mongoose");
//2º Conectar a la base de de datos
mongoose.connect("mongodb://localhost/test");
//3ºDefinicion del esquema antes lo cree a vuelo, ahora creo una variable de tip schema
var Schema= mongoose.Schema;
//Ahora creo el schema no la clase como antes
//Cuando alguien reserve un libro se pueda establecer o no
var LibroSchema = new Schema({
    titulo: String,
    autor: String,
    siponis: String,
    fecha: Date,
    categoria: String,
    // me creo uno más complejo podria ser Direccion{calle piso letra}
    campos_biblioteca:
    {
        ejemplares: Number,
        reservas: Number, 
        ultima_reserva: Date
    }
});
// si pusiera no reserava a ejemplares ya no se puede reservar.
//2 clientes q accedan no van a poder pq uno accede al documento y el otro a la coleccion asi no llegara ninguno a -1
//inc --> incrementa 1 --> inc-1 decrementa.
//aqui le digo creame la clase libro,
var Libro = mongoose.model("Libro", LibroSchema) 
var lotr = new Libro(
    {
        titulo:"Lor of the rings",        
        campos_biblioteca:{
            ultima_reserva: new Date()
        }
    }) 

    //guardo:
    lotr.save((error)=>
    {
        if(error)
        {
            console.error("Error al guarda: " +error);
        }else{
            console.log("Pelicula guardada" + lotr._id);
            Libro.find((error,data)=>{
                  console.log("data");
         });
        }
     });

     //Listo: // atento ahora le pregunto a libro q es la coleccion 
   Libro.find((error,data)=>
    {
        console.log(data);
     });//el find te devuelve un documento pq lo hago por id el find
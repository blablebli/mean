var mongoose = require("mongoose");
//2º Conectar a la base de de datos --> ESTO NO LO HAGO EN EL MODELO ELCONECTAR A LA BBDD
//mongoose.connect("mongodb://localhost/test");
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

///Ahora lo tengo q exportar el modulo q creo con este fichero.
module.exports = mongoose.model("Libro",LibroSchema);
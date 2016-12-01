var mongoose = require("mongoose");
//2º Conectar a la base de de datos --> ESTO NO LO HAGO EN EL MODELO ELCONECTAR A LA BBDD
//mongoose.connect("mongodb://localhost/test");
//3ºDefinicion del esquema antes lo cree a vuelo, ahora creo una variable de tip schema
var Schema= mongoose.Schema;
//Ahora creo el schema no la clase como antes
//Cuando alguien reserve un libro se pueda establecer o no
var LibroSchema = new Schema({
    // voy a poner validacion sobre el titulo
    titulo: {
            type: String,
            required: true,
            //2 paso le añado un validate que tiene más opciones
             required: [true, "requerido macho"],
             validate:{
                 validator: (valor)=>{
                     return /^[A-Z]/.test(valor); // q el primer caracter sea mayusculas
                 },
                 message: "No empieza por mayusculas"
             }
            // todas estan validaciones pueden ser para aplicaciones restfull q venga de los verbos yo como estoy en el servidor valido los datos
    }    
    ,
    autor: String,
    siponis: String,
    //fecha: Date,
fecha: {
    type:Date,
    required: true,
    index:true // esto cuando el sistema lance la primera coleccion me creara un indice
},

   // categoria: String,//me creo como enun la categoria
   categoria:{
    type: String,
       enum:["aventuras", "terror","novela"],
       required:true
   },
    // me creo uno más complejo podria ser Direccion{calle piso letra}
    campos_biblioteca:
    {
        ejemplares: Number,
        //reservas: Number,
        reservas:
        {
            type: Number,
            min:[1,"al menos una reserva,no"] // le digo el minimo y le añado el mensaje q tiene q avisar
            //Puedo meterle un max simplemente ir a la documentacion de los validates
        },
        ultima_reserva: Date
    }
});

//si quiero hacer un index más complejo hago esto
LibroSchema.index({fecha:1,"campos_bibliteca.reservas":-1});

///Ahora lo tengo q exportar el modulo q creo con este fichero.
module.exports = mongoose.model("Libro",LibroSchema);
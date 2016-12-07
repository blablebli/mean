var mongoose = require("mongoose");
// definicion del esquema
var Schema = mongoose.Schema;
var PeliculaSchema = new Schema({
    titulo:     String,
    autor:      String,
    sinopsis:   String
   
})
module.exports = mongoose.model("Pelicula",PeliculaSchema);
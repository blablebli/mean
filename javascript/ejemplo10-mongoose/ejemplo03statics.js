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

// quiero q me busce el titulo por libro, de forma estatica creo un metodo 
//esto es propio de Mongoose, le asigno un lambda
// tiene q tener el titulo y un componente cb q es propio de mongoose

//Busca por titulo de forma generaca
LibroSchema.statics.findByTitle = (title,cb) =>{
    // this en este caso es la clase y tiene un metodo q se llama find q es igual al q se lanza de la shell
   console.log("Buscando por titulo:" + title);
    return Libro.find({titulo:title,cb}) // el cb es un parametro q es un param propio de mongoose.
}
//Me defino otro metodo estatico morzilla en vinagre
LibroSchema.statics.morzillaEnVinagre = (title,cb) =>{ 
   console.log("Buscando por titulo:" + title);

   // return Libro.find({titulo:new RegExp(title),cb}) // es como si fuera un like  Quiero buscar libros q empiezen por "e" por ejemplo
    return Libro.find({titulo:new RegExp(title,"i"),cb}); // para q sea case insesite le pongo "i" en el regexs
    //console.log( "numero resultados:"+ Libro.find({titulo:new RegExp(title,"i"),cb}).count());
    //console.log( "numero resultados:"+ Libro.count({titulo:new RegExp(title),cb}));
}

//Recuerda clase una Libro
var Libro = mongoose.model("Libro", LibroSchema) 

// Aqui buscaria los q empiezan por 
//Libro.findByTitle("esdla") // ahora ya puedo buscar sobre ello.

// Aqui buscaria los q empiezan por anillos
Libro.morzillaEnVinagre("anillos", (error,data)=>{
    //no se pq no me entra
    if(error){
        console.log("Error");
        log.error("Error al procesar la busqueda");
    }else{
        console.log("Libros para la consulta find({titulo:/anillos)");
        //el data es una lista de libros y me creo lo q hago de cada libro con una lamda
        data.forEach((libro)=>
         {
             console.log("Libro encontrado:" + libro.titulo);
         }
        )
    }
}); // Ahora buscaria por los LIBROS q empiezan por ANILLO, Y SE LO MANDO //A UNA FUNCION ASINCRONA Q ES LO Q HAYRA CUANDO LE LLEGE LOS DATOS

/*
metodos propios de la instancia:
    init 
    validate
    save 
    remove 

a nivel de clase:
    count
    find
    findOne
    findOneAndUpdate
    findOneAndDelete
    insertMany
    update
*/

//no define elfinfbyid no hace falta definirlo directamente
Libro.findById("583d500e84d42b160883bb6d", (error,libro)=>{
    if(error)
    {
        console.error("Error!");
    }else{
          console.log("Libro con id:"+libro._id + "\n\tLibro: " +libro) ;  
          // Esto es secundario de poner un metodo de instancia como no tengo categorias no devolvera nada
          /*libro.findBySimilar((error,data)=>{
              //me llega todos los libros similaresif
                if(error)
                {
                    console.error("Error!");
                }else{
                    data.forEach((libro)=>
                    {
                         console.log("Libro encontrado:" + libro.titulo);
                    });
                }
          })*/
    } 
});

//esto va a nivel de clase en lugar de static method q es un metodo de instancia donde la ejecuto
// aqui si que utilizo el this en lugar de libros es para buscar casos similares.
/*
LibroSchema.methods.findBySimilar = (cb) =>{
    // this en este caso es la clase y tiene un metodo q se llama find q es igual al q se lanza de la shell
   console.log("Buscando por categoria:" + this.categoria);
    return this.find({categoria:this.categoria,cb}) // el cb es un parametro q es un param propio de mongoose.
}*/

/*
Libro.morzillaEnVinagre("anillos", (error,data)=>{
    if(error){
        console.log("Error");
        log.error("Error al procesar la busqueda");
    }else{
        console.log("Libros para la consulta find({titulo:/anillos)");
        //el data es una lista de libros y me creo lo q hago de cada libro con una lamda
        data.forEach((this.similar)=>
         {
             console.log("Libro encontrado:" + libro.titulo);
         }
        )
    }
}); */



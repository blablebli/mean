var mongoose= require("mongoose");
//2º Conectar a la base de de datos --> ESTO NO LO HAGO EN EL MODELO ELCONECTAR A LA BBDD
mongoose.connect("mongodb://localhost/test")
var Libro = require("./ejemplo04model");// en lugar  de hacer esto estaria  mejor inyectarlo en el constructor 
//Comentario Libro esta clase es un dao y nunca deberia devolver un libro --> recuerda q le paso a sc--> si hago complejas funcionalidades->
//queda acoplado el objeto libro q le paso a express 

//Asyncrono cuidado pq podra insertar  y q no haya borrado o o al reves.

/*Mongoose supports all the CRUD operations:
Create –> modelObj.save(callback)
Read –> Model.find().exec(callback)
Update –> modelObj.update(props, callback) –> Model.update(condition, props, cb)
Remove –> modelObj.remove(callback) –> Model.remove(condition, props, cb)
*/

//Tengo q poner en todas las funciones un 2º parametro q sea una funcion asyncrona a la q debe llamar 
// el no lo ha hecho pq no tiene tiempo.asi q lo q ha hecho es sin asyncrona.

//Express --> Con el rest tengo q crear las rutas


function getLibros(limit,skip){
    //return Libro.find() // paginad! y sino viene nada skip0 y limit 20 nunca devolver todo imagina q es un big data 1millon datos cascaria.

}

function getLibroById(_id){
// Concepto importante aqui 
    //aqui hace la funciona asyncrona con lambda q como se lo q hace q defino dentro de la lamda
// sin no supiera lo q tiene q hacer no lo defino en el lamda lo q haga le paso el
//el parametro la funcion y ya ella se encargar de haberlo -->getLibroByIdPasoAsincronafuncionqnoselqhacecuandotermina(_id, funcionAsincrona){//le paso la funciona q ejectura cuando termine
   //Lo veo en la otra funcion 
Libro.findById(_id,(error,libro)=>{
    //TODO:
})
}


//ejemplo de asyncrona
function getLibroByIdPasoAsincronafuncionqnoselqhacecuandotermina(_id, funcionAsincrona){//le paso la funciona q ejectura cuando termine
Libro.findById(_id,(error,funcionAsincrona));//este es q cuando haga la funcion lo  ejecutará la parte asincrona,.
// Concepto importante aqui 
//si sabes lo q tienes q hacer de manera asincronalo haces con la lambda que
//si no lo sabes delegas y q lo haga la funcionasincrona
}

function saveLibro(libro){
    // aqui esta mi catastrofe pq es de mongoose alguien lo ha creado y se lee el acoplamiento
    //new Libro()--> Así me creo un libro
    //Ahroa si quiero pasar parametros
    //new Libro({clave:"valor"})--> 
    //Con jsonserver le pasaba un json ahora le puedo pasar al new
    // newLibro({clave:"valor", save:fucntion(){}})//estaria sobreescribien allí 
Libro.save((error)=>{
//solo puede producir un error

}); 
}

function updateLibro(libro){
//todo
libro.categoria = "terror"; // ya hago aqui un cambio por ejemplo 
//Voy aver si tiene el libro "id" o no
saveLibro(libro);// si tiene en labbdd id lo guarda y si no lo tiene crea uno nuevo
}

function updateLibro1(libro){
//todo
//getLibroByid(libro._id);// que lo busco si  persiste en memoria
libro.categoria = "terror"; // ya hago aqui un cambio por ejemplo 
//Voy aver si tiene el libro "id" o no
saveLibro(libro);// si tiene en labbdd id lo guarda y si no lo tiene crea uno nuevo
}



function findAndupdateLibro(libro){


}

function deleteLibro() {
    //asi con este mejor q el delete pq asi me doy cuenta de q sean 
    Libro.findByIdAndRemove(_id,()=>
    {

    });
    Libro.delete()
}

//aqui lo borro sin buscarlo
function deleteLibro2() {  
    Libro.delete()
}
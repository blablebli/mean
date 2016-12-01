var mongoose= require("mongoose");
//2º Conectar a la base de de datos --> ESTO NO LO HAGO EN EL MODELO ELCONECTAR A LA BBDD
mongoose.connect("mongodb://localhost/test")
var Libro = require("./ejemplo05model");// en lugar  de hacer esto estaria  mejor inyectarlo en el constructor 
//Comentario Libro esta clase es un dao y nunca deberia devolver un libro --> recuerda q le paso a sc--> si hago complejas funcionalidades->
//queda acoplado el objeto libro q le paso a express 

//1º voy a crear un libro y lo voy a guardar
//milibroDeHistoria = new Libro;// 1 paso comprueebo q esto da error pq el campo tutlo es requerido
milibroDeHistoria = new Libro({
   // titulo:"Mi libro de historia"
   /*campos_biblioteca:{
       reservas: -7 // le pongo una condicion q no la cumple pq tiene q ser al menos 1
    }*/
     titulo:"Mi libro de historia", // lo pongo en minusculas para q de error
     campos_biblioteca:{
         
       reservas: -7 // le pongo una condicion q no la cumple pq tiene q ser al menos 1
    },
    categoria:"terror"
});
//2º en el save como no vienen datos tengo q poner 
milibroDeHistoria.save((error)=>{
    if(error){
        //Veamos como capturamos las excepciones a mano.
            console.error("Pues no se ha guardado");
            lista_campos =["titulo", "campos_biblioteca.reservas","categoria"];
            //saco todos los campos q pueden dar errores en un array y lo saco facil
            lista_campos.forEach((campo)=>{
                if(error.errors[campo]){
                    console.error(error.errors[campo].message);
                }
            }            
            )
            // lo de abajo sería sin array como sacarlo
            /*
            if(error.errors['titulo']){
                console.error(error.errors['titulo'].message)
            }
             if(error.errors['campos_biblioteca.reservas']){
                console.error(error.errors['campos_biblioteca.reservas'].message)
            }
            */
    }else{
        console.log("Guardado con id: "+ milibroDeHistoria._id);
    }
})


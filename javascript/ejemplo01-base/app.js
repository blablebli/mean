console.log("Hola mundo!");
variablesGlobales = "varaibleGlobal";
var variablesGlobalesConVar = "Sigue siendo una variable global";
/*function mi_funcion(){
    var otraVariable ="Esto es una variable local";
    for(var i=0;i <10; i++)
     {
         console.log("Valor de i" +i);
     }
         console.log("Valor de i" +i);
}

function mi_funcion(){
    let otraVariable ="Esto es una variable local"
    for(let i=0;i <10; i++)
     {
         console.log("Valor de i" +i);
     }
         console.log("Valor de i" +i); // aqui dar´ia un errro pq el let solo es dentro de la funcion.
}
console.log(mi_funcion); // no ejecutara ninguna funcion pq mi_funcion sin parentesis es una variable nueva que no esta definida
console.log(mi_funcion());// llama a la segunda funcion pq he machacado la funcion*/

function mi_funcion_con_var(){
    var otraVariable ="Esto es una variable local";
    for(var i=0;i <10; i++)
     {
         console.log("Valor de i" +i);
     }
         console.log("Valor de i" +i);
}

function mi_funcion_con_let(){
    let otraVariable ="Esto es una variable local"
    for(let i=0;i <10; i++)
     {
         console.log("Valor de i" +i);
     }
       //  console.log("Valor de i" +i); // aqui dar´ia un errro pq el let solo es dentro de la funcion.
}
mi_funcion_con_var();
mi_funcion_con_let(); ///ojo las funciones podrían estar encima de las funciones pq el codigo de las funciones se recargan antes y por eso lo leeria si lo pusiera antes de la definicion.

console.log("==2 Tipo de datos==");
var tipoDeDatoNumerico = 7;
var tipoDeDatoCadena = "Siete";
// Referencia de tipoDeDatoCadena sera por ejemplo 0x2345712
var fechaDeEstreno = new Date(); //el año pongamos que es 2016

console.log("REsultado typeOf numerico "+typeof tipoDeDatoNumerico);
console.log("REsultado typeOf cadena "+typeof tipoDeDatoCadena);
console.log("REsultado typeOf new Date() "+typeof fechaDeEstreno);

console.log("==3 Numerico number es un objeto pq se hace un new ==");
//si le paso el valor a la funcion es por referencia pq es un objeto
// let numero = new Number(3.43543);
//function pruebaNumerico(numero){ 
// los return dentro de la funcion es cuando le paso por valor pero aqui se lo paso por referencia y no hace falta return para q devuelva el valor.
//deberia para cambiar dentro de la funcion un "set" o un "new" para crear un nuevo objeto 

pruebaNumerico();
function pruebaNumerico(){
    let numero = new Number(3.43543);// el let es como var pero más estrictro como vimos ayer
     console.log("Valor almacenado"+ numero.valueOf());
     console.log("Valor almacenado"+ numero.toFixed());//redondeo a un valor estandar
     console.log("Valor almacenado"+ numero.toFixed(4));//redondeo a 4 digitos

     //al no hacer set no le cambio el valor del objeto cuando salga de la funcion son metodos que no cambia.
}
console.log("==4 Referencias ==");

// Referencia de tipoDeDatoCadena sera por ejemplo 0x2345712 le paso la referencia.
var  otraFecha = fechaDeEstreno; //es otra variable que apunta a la misma referencia que fechaDeEstreno 

otraFecha.setFullYear(1989);// le cambio la fecha a otraFecha y apunta al mismo sitio pero ambas tiene el mismo valor
// tanto fechadeEstreno y otraEstreno  apuntando al mismo sitio
console.log("Fecha de estreno" + fechaDeEstreno.getFullYear());
cambiarYear(otraFecha);

//cambiar año le paso la fecha y el va a coger la fecha
function cambiarYear(fecha){ // se crea otra variable fecha que apunta a la misma referencia 
    //TODOasegurarse que lo que llega  es fecha le mandaremos distintos tipos en lso que fecha sea cadena
    fecha.setFullYear(2011);// cambio la fechade 1989 al 2011 //no hace ningun new solo cambia el valor a 2011

    //que va a poner en los 3 sistios
    console.log("1 Fecha de estreno" + fechaDeEstreno.getFullYear()); // aqui el valor cambiaa de 1989 a 2011 y los 
    //3 objetos que apuntan al mismo sitio tiene el mismo valor fecha, otraFecha y fechaDeEstreno

}
//que va a poner en los 3 sistios
//aqui ya solo tengo 2 variable porque fecha desaparece y apuntan ambas a 2011
console.log("2 Fecha de estreno" + otraFecha.getFullYear()); // 2011
console.log("3 Fecha de estreno" + fechaDeEstreno.getFullYear());// 2011

console.log("===5 ver callee que devuelve el nº de parametros esperados==");
function pruebaDeArgumentos(argumento1){

    console.log("Nº de parametros enviados" + arguments.length); 
    console.log("Nº de parametros esperados" + arguments.callee.length);
    //recorro el array para mostrarlo por la pantalla
    for(let i=0; i<arguments.length;i++)
    {
        console.log("Posicion : "+ i + "valor: " + arguments[i]);
    }
}
//Llamo a la función 3 veces con distintos argumentos recuerda que es como la funcion es como una variable
// y le da igual los parametros que tenga  

pruebaDeArgumentos(); // 0 enviados pero el esperado es 1 el de la fucnion
pruebaDeArgumentos(1); // 1 
pruebaDeArgumentos("hola", 7,2, "otro", new Date());
//esto sirve pq por ejemplo si le mando 1 parametro le digo que haga algo y si tiene mś que haga algo
//ejerecicio de callee  crear una funcion sumar
// 1 no puede aceptar menos de 2 params
//   y  si recibe 2 o mas devuelve la suma de todos
// 2 parte si no es numerico no suma se hace un typeof
// 3 se mostrara un log de los no nume
function sumar(valor1, valor2)
{
    if (arguments.length>=2)
    {
        var suma = 0;
        for(let i=0; i<arguments.length;i++)
        {
            if(!isNaN(arguments[i]))
            {
                
                suma += arguments[i];
           }
           else{
               console.log("Este valor no es numerico " +arguments[i] + "es de tipo " + typeof arguments[i]);
           }
            
        }
        console.log("Suma: " + suma);
    }
    else{
        console.log("No se acepta menos de 2 parametros");
    }
}

// sumar(1,2);
//sumar(1);
sumar(1,"hola", true, undefined,  "2016-08-03", new Date(), 3);
console.log("==6 Inicio de ejemplos JS con Arrays ==");

console.log("Adios mundo cruel!");


console.log("Adios mundo cruel!");

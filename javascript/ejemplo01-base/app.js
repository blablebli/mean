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
//Pruebo la funcion con distintos parametros
// sumar(1,2);
//sumar(1);
sumar(1,"hola", true, undefined,  "2016-08-03", new Date(), 3);
console.log("==6 Inicio de ejemplos JS con Arrays ==");

testConArrays();
function  testConArrays(){
    let miArray = new Array();
    miArray[0]=7;
    miArray[1]="valor"; // no es tipado puedo meter los quiero
    //miArray.pop // borra un elemento
    //miArray.push(); mete un valor
    let otroArray = []; //he creado un array vacio que es lo mismo que crearlo con el new Array
    let otro  = ["uno", 2, new Date()];
    //Arrays asociativos
    let otroArrayAsociativo = new Array(); // aqui no hay posicion 0 1 o 2
    otroArrayAsociativo['uno']=1;
    otroArrayAsociativo['dos']=2;
    console.log(otroArrayAsociativo['uno']); // luego evolucionan por aqui los objetos y los json que me devuelve por lo que yo digo y no por la posicion


//vamos a a ver la evolucion a objerto a partir de un array
    let persona = new Array();
//le asocio al array es la misma forma.
     persona.nombre = "Ruben";
     persona. apellido ="Gomez";

     //como una funcion es una variable espercial con una referencia y por eso no pongo parentesis
     persona.pruebaDeArgumentos = pruebaDeArgumentos;
     //si la llamara tendría que poner los parentesis persona.pruebaDeArgumentos()
     persona.pruebaDeArgumentos(); // llamao a la funcion 
//Si pogo esto me devuelve el valor si pongo el parentesis de lo que devuelva la funcion antes lo hque 
//hacia era asignar una referencia y no devolvia valor hasta q nolo llamaba
       persona.pruebaDeArgumentos = pruebaDeArgumentos();
     
     console.log(persona.nombre + persona.apellido);

     

}

console.log("Adios mundo cruel!");


//Creo clase a partir de funciones
function MiClase(campo1,campo2)
{ // el this quiere decir que se crea a nivel de instancia
    this.clave1 = campo1;
    this.clave2 = campo2;
    // para crear métodos lo hago con las funciones anónimas
    this.miMetodoMal = function () {
        return "mal hecho desde el metodo de la clase: "
     + this.clave1 + " - " + this.clave2};

    //Error pq si creo 1000 objetos se creara 1000 veces esta función siempre haciendo lo mismo
    //y sera un problema de rendimiento
    // para evitar esto se hace algo por arriba para no crearlo 1000 veces que sería un prototipado 
}

//Solucion para el problema del metodo Esto lo que hace crea a nivel del objeto padre pero solo lo crea una vez 
MiClase.prototype.miMetodoBienPrototipado = function () {
        return "mal hecho desde el metodo de la clase: "
     + this.clave1 + " - " + this.clave2};

   

var miObjeto = new MiClase("uno", "dos"); //veo que es un artificio para crear clases
//si yo quiero ver el contenido
console.log("el valor de la clave1 es: " +miObjeto.clave1);
console.log("Mi objeto tiene:" + miObjeto.miMetodoMal());
console.log("Mi objeto tiene:" + miObjeto.miMetodoBienPrototipado());

//hago un ejercicio con prototype dada la clase array le añado un metodo contiene qule asigno
//una funcion anonima que recibe un parametro que es objeto y quiero comparar que este objeto esta dentro
 //del array en cada posicion de for tengo mi elemento en el this[i]

Array.prototype.contiene = function(objeto) 
{
    for(let i=0; i< this.length ; i++)
    {
        let elementoActual = this[i];
        if (elementoActual == objeto){
            return true;
        }
    }
    return false;
}

let miarraydeprueba = [1,2,3,7,10];
                                                   
console.log("Tiene valor " + miarraydeprueba.contiene(3));
//me devolvera true;*/


/texto a validar/. test("si hay texto a validar true");
//recuerdo el array asociativo
let mi_info = [{uno:1,dos:2,tres:{uno:1,dos:2,tres:3}},{uno:1,dos:2,tres:3}];
console.log("Fin de objeto");

console.log("Inicio Ajax")

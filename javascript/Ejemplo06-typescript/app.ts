let variable = 2019;
//variable ='texto';
var otraVariable :number = 7;
otraVariable = 14;
//otraVariable = '16';


interface Tiempo{
    dia:number;
    mes:number;
    anio:number;
}

var miCumpleanios : Tiempo = {dia:3, mes:11, anio:1978};

console.log("El día de mi cumple es: " + miCumpleanios.dia);
console.log("Antes de cumplir años es: " + miCumpleanios.dia);
console.log("Antes de cumplir años es: " + miCumpleanios.dia);
cumpliAnnios(miCumpleanios);

console.log("Despues de cumplir años es: " + miCumpleanios.dia);

function cumpliAnnios(fechaDeCumpleaninos:Tiempo): void{
    fechaDeCumpleaninos.anio++;
}


//Definicones de clases // veo que no tiene constructores de metodos de instancia parece un interfaz
//la ventaja del interfaz es que puedo meter un constructor q tiene la ventaja de inicializar una clase

class Persona{
    nombre: string;
    apellido1:string;
    apellido2 : string;

    constructor(nombre:string, apellido1:string, apellido2: string){
this.nombre = nombre;
this.apellido1 = apellido1;
this.apellido2 = apellido2;
    }

    stringify():string{
        return  this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }

}

/* sin metodo constructor
let ruben = new Persona();
ruben.nombre ="Ruben";
ruben.apellido1 ="Gomez";
ruben.apellido2 ="Garcia";*/

//con constructor
let ruben = new Persona("Ruben", "Gomez", "Garcia");
let luis = new Persona("Luis", "Gomez", "Garcia");
let alberto = new Persona("Alberto", "Gomez", "Garcia");

console.log(ruben.stringify());
console.log(luis.stringify());
console.log(alberto.stringify());

//==================herencia!==================================
class Ciudadano extends Persona{
    identidad : string;
   /* constructor(nombre:string, apellido1:string, apellido2:string, identidad: string){
    super(nombre,apellido1,apellido2); // no copio el constructor el padre sabe almacenar nombre y apellidos
    this.identidad = identidad;*/
//otra posibilidad es c rear el constructor  con menos valores es igual que el anterior pero el profe prefiere el de arriba
      constructor( identidad: string){
    super(null,null,null); // no copio el constructor el padre sabe almacenar nombre y apellidos
    this.identidad = identidad;
}
//sobreescribo el metodostring del padre
    stringify():string{
           return super.stringify() + "" + this.identidad;
    }
}

/*var ciudadanoKane = new Ciudadano("kane", null, null, "1");
    console.log(ciudadanoKane.stringify());*/

//este es con el otro constructor


var ciudadanoKane = new Ciudadano("1");
    console.log(ciudadanoKane.stringify());


///===========Polimorfismo=================////
//Aqui veo que otra persona puede ser persona y ciudadano este es el polimorfismo para el profesor en lugar del otro.
//una persona puede ser ciudadano, un ciudadano es persona pero al reves no tiene porque

    var otraPersona: Persona = ciudadanoKane;
    console.log(otraPersona.stringify());

    //no puede acceder a la identidad otraPersona pq es propio de ciudadano, pero ciudadno claor que si.


//Ahora voy a crear algo más grande que persoan por ejemplo servivo y voy a ver los estaticos
class SerVivo{
    //me creo que sea variable estatico para que sea para todos lo conozca.
    static totalDeSeresVivos: number=0;
    clasificacion:string;
    constructor(clasificacion: string){
        //Accedo con "this"" a la ppdad propia del objeto
            this.clasificacion = clasificacion;
            //no accedo con "this"" pq no es propio del objeto sino le pregunto a la clase
            SerVivo.totalDeSeresVivos +=1
    }
    //Atento este metodo no existe
stringify():string{
       return " clasificacion: " + this.clasificacion
}

}

let pez1: SerVivo = new SerVivo("marino");
let pez2: SerVivo = new SerVivo("marino");
let pez3: SerVivo = new SerVivo("marino");

let tigre: SerVivo = new SerVivo("terrestre");
let leon: SerVivo = new SerVivo("terrestre");

//ahora quiero saber el total de seres vivos
console.log("Total de seres vivos = " + SerVivo.totalDeSeresVivos);

//***fin estaticos vamos a ver nuevos eejemplos
//vamos aver ahora la encapsulacion de los parametros desde fuera y se tenga que cerear desde metodos
//queremos con esto evitar meter la pata
class Padre{
    public almacenPublico: number;
    protected almacenProtegido: number;
    private almacenPrivado: number;
    dameElAlmacenProtegido(){
        return this.almacenProtegido;
    }
}

let padre = new Padre();
// tengo acceso de lectuar y escritura
padre.almacenPublico = 77;
//Desde la instancia no son accesible las variables privadas
//el padre no puede acceder al protegido pero el hijo si

//Veamso ahora class  hijo y que tengo acceso
class HijoDePadre extends Padre{
    constructor(otroValor: number){
        super();
        //Veo que desde el hijo no tengo acceso al atributo privado del padre 
        //Pero si veo que tengo acceso al protegido
        //this.almacenProtegido = 25;
        this.almacenProtegido = otroValor; 
    }
}

//pero es cuiroso que la instancia no puede acceder a alamcenProtegido

//Por otro lado para acceder al a variable protegida

    let hijoDePadre= new HijoDePadre(22);
    let hijoDePadre2= new HijoDePadre(23);
    hijoDePadre.almacenPublico;

// la instancia de no tiene accesodesde dentro no tengo acceso el que lo tiene es el padre

// Ahora le doy valor 
hijoDePadre.dameElAlmacenProtegido();

//* Abstracto la ventaja con respecto al padre de SErvivo es que no permite instanciar al padrey hace un contrato hijo.//
abstract class SerVivoAbstracto{
    //me creo que sea variable estatico para que sea para todos lo conozca.
    static totalDeSeresVivos: number=0;
    clasificacion:string;
    constructor(clasificacion: string){
        //Accedo con "this"" a la ppdad propia del objeto
            this.clasificacion = clasificacion;
            //no accedo con "this"" pq no es propio del objeto sino le pregunto a la clase
            SerVivoAbstracto.totalDeSeresVivos +=1
    }
    //Atento este metodo no existe
    stringify():string{
       return " clasificacion: " + this.clasificacion
    }
    // no tengo pq definir el metodo ya lo haran  mis hijos solo obligo a que lo tengan 
    abstract desplazamiento(): string;
    abstract alimentarse(): string;
    // asi si tengo policias politicos podre ordenarlos por ejmplo si los tengo en un array y que corran
      abstract valorParaOrdenar(): number;

}

//  Veo que la clase no tiene posibilidad de instancias
//let ser1: SerVivoAbstracto = new SerVivoAbstracto();

class Politico extends SerVivoAbstracto{
    constructor(){
        super("cucaracha");
    }
    //obligatiriamebnte tengo que definir el metodo abstacto
    desplazamiento(): string{
        return ("Voy en coche oficial");
    }
//obligatiriamebnte tengo que definir el metodo abstacto
    alimentarse(): string{
        return "Dame dinero en sobres";
    }
    valorParaOrdenar():number{
        return 1;
    }
}


// Veo que el hijo si lo puede instancias
let politico: Politico = new Politico();

//la clasica pregunta de "is a""  si es entonces es un clase  por ejemplo persona es una clase
//pero si digo perro la persona "has a " tiene perro entonces es un atributo de persona y podemos acceder 
// a ella.


//singleton lo que yo quiero es comprobar que solo hay 1 instancia en memoria

class SerDos {
    private static instance: SerDos;
 //la idea es que el constructor el privador para que no se pueda crear tantos objetos como yo quiera
    private constructor(clasificacion:string)
    {

    }
    static instaceOf():SerDos{
        if(!SerDos.instance){
        //sino existe lo crea
        //el new

    }    
    return SerDos.instance;
 } 

//Como es estatico para que tenga acceso
// SerDos.instanceOf();

 //otra forma de singleton es poner publico el constructor y no hacer el new
 /*class SerTres {
    private static instance: SerTres;
 //la idea es que el constructor el privador para que no se pueda crear tantos objetos como yo quiera
    public constructor(clasificacion:string)
    {
           if(!SerTres.instance){
        //sino existe lo crea
             SerTres.instance = this;

    }            
 } */


// Funciones lambda
//en javascript tenia funciones anonimas
let funcionJavascript = function(uno, dos){
    return uno + dos;

}

// con la flecha me quito la palabra funcion
let funcionJavascriptfuncionLambda = (uno:number, dos: number)=>{
    return uno + dos;

}




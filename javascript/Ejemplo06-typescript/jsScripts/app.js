var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var variable = 2019;
//variable ='texto';
var otraVariable = 7;
otraVariable = 14;
var miCumpleanios = { dia: 3, mes: 11, anio: 1978 };
console.log("El día de mi cumple es: " + miCumpleanios.dia);
console.log("Antes de cumplir años es: " + miCumpleanios.dia);
console.log("Antes de cumplir años es: " + miCumpleanios.dia);
cumpliAnnios(miCumpleanios);
console.log("Despues de cumplir años es: " + miCumpleanios.dia);
function cumpliAnnios(fechaDeCumpleaninos) {
    fechaDeCumpleaninos.anio++;
}
//Definicones de clases // veo que no tiene constructores de metodos de instancia parece un interfaz
//la ventaja del interfaz es que puedo meter un constructor q tiene la ventaja de inicializar una clase
var Persona = (function () {
    function Persona(nombre, apellido1, apellido2) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    Persona.prototype.stringify = function () {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    };
    return Persona;
}());
/* sin metodo constructor
let ruben = new Persona();
ruben.nombre ="Ruben";
ruben.apellido1 ="Gomez";
ruben.apellido2 ="Garcia";*/
//con constructor
var ruben = new Persona("Ruben", "Gomez", "Garcia");
var luis = new Persona("Luis", "Gomez", "Garcia");
var alberto = new Persona("Alberto", "Gomez", "Garcia");
console.log(ruben.stringify());
console.log(luis.stringify());
console.log(alberto.stringify());
//==================herencia!==================================
var Ciudadano = (function (_super) {
    __extends(Ciudadano, _super);
    /* constructor(nombre:string, apellido1:string, apellido2:string, identidad: string){
     super(nombre,apellido1,apellido2); // no copio el constructor el padre sabe almacenar nombre y apellidos
     this.identidad = identidad;*/
    //otra posibilidad es c rear el constructor  con menos valores es igual que el anterior pero el profe prefiere el de arriba
    function Ciudadano(identidad) {
        _super.call(this, null, null, null); // no copio el constructor el padre sabe almacenar nombre y apellidos
        this.identidad = identidad;
    }
    //sobreescribo el metodostring del padre
    Ciudadano.prototype.stringify = function () {
        return _super.prototype.stringify.call(this) + "" + this.identidad;
    };
    return Ciudadano;
}(Persona));
/*var ciudadanoKane = new Ciudadano("kane", null, null, "1");
    console.log(ciudadanoKane.stringify());*/
//este es con el otro constructor
var ciudadanoKane = new Ciudadano("1");
console.log(ciudadanoKane.stringify());
///===========Polimorfismo=================////
//Aqui veo que otra persona puede ser persona y ciudadano este es el polimorfismo para el profesor en lugar del otro.
//una persona puede ser ciudadano, un ciudadano es persona pero al reves no tiene porque
var otraPersona = ciudadanoKane;
console.log(otraPersona.stringify());
//no puede acceder a la identidad otraPersona pq es propio de ciudadano, pero ciudadno claor que si.
//Ahora voy a crear algo más grande que persoan por ejemplo servivo y voy a ver los estaticos
var SerVivo = (function () {
    function SerVivo(clasificacion) {
        //Accedo con "this"" a la ppdad propia del objeto
        this.clasificacion = clasificacion;
        //no accedo con "this"" pq no es propio del objeto sino le pregunto a la clase
        SerVivo.totalDeSeresVivos += 1;
    }
    //Atento este metodo no existe
    SerVivo.prototype.stringify = function () {
        return " clasificacion: " + this.clasificacion;
    };
    //me creo que sea variable estatico para que sea para todos lo conozca.
    SerVivo.totalDeSeresVivos = 0;
    return SerVivo;
}());
var pez1 = new SerVivo("marino");
var pez2 = new SerVivo("marino");
var pez3 = new SerVivo("marino");
var tigre = new SerVivo("terrestre");
var leon = new SerVivo("terrestre");
//ahora quiero saber el total de seres vivos
console.log("Total de seres vivos = " + SerVivo.totalDeSeresVivos);
//***fin estaticos vamos a ver nuevos eejemplos
//vamos aver ahora la encapsulacion de los parametros desde fuera y se tenga que cerear desde metodos
//queremos con esto evitar meter la pata
var Padre = (function () {
    function Padre() {
    }
    Padre.prototype.dameElAlmacenProtegido = function () {
        return this.almacenProtegido;
    };
    return Padre;
}());
var padre = new Padre();
// tengo acceso de lectuar y escritura
padre.almacenPublico = 77;
//Desde la instancia no son accesible las variables privadas
//el padre no puede acceder al protegido pero el hijo si
//Veamso ahora class  hijo y que tengo acceso
var HijoDePadre = (function (_super) {
    __extends(HijoDePadre, _super);
    function HijoDePadre(otroValor) {
        _super.call(this);
        //Veo que desde el hijo no tengo acceso al atributo privado del padre 
        //Pero si veo que tengo acceso al protegido
        //this.almacenProtegido = 25;
        this.almacenProtegido = otroValor;
    }
    return HijoDePadre;
}(Padre));
//pero es cuiroso que la instancia no puede acceder a alamcenProtegido
//Por otro lado para acceder al a variable protegida
var hijoDePadre = new HijoDePadre(22);
var hijoDePadre2 = new HijoDePadre(23);
hijoDePadre.almacenPublico;
// la instancia de no tiene accesodesde dentro no tengo acceso el que lo tiene es el padre
// Ahora le doy valor 
hijoDePadre.dameElAlmacenProtegido();
//* Abstracto la ventaja con respecto al padre de SErvivo es que no permite instanciar al padrey hace un contrato hijo.//
var SerVivoAbstracto = (function () {
    function SerVivoAbstracto(clasificacion) {
        //Accedo con "this"" a la ppdad propia del objeto
        this.clasificacion = clasificacion;
        //no accedo con "this"" pq no es propio del objeto sino le pregunto a la clase
        SerVivoAbstracto.totalDeSeresVivos += 1;
    }
    //Atento este metodo no existe
    SerVivoAbstracto.prototype.stringify = function () {
        return " clasificacion: " + this.clasificacion;
    };
    //me creo que sea variable estatico para que sea para todos lo conozca.
    SerVivoAbstracto.totalDeSeresVivos = 0;
    return SerVivoAbstracto;
}());
//  Veo que la clase no tiene posibilidad de instancias
//let ser1: SerVivoAbstracto = new SerVivoAbstracto();
var Politico = (function (_super) {
    __extends(Politico, _super);
    function Politico() {
        _super.call(this, "cucaracha");
    }
    //obligatiriamebnte tengo que definir el metodo abstacto
    Politico.prototype.desplazamiento = function () {
        return ("Voy en coche oficial");
    };
    //obligatiriamebnte tengo que definir el metodo abstacto
    Politico.prototype.alimentarse = function () {
        return "Dame dinero en sobres";
    };
    Politico.prototype.valorParaOrdenar = function () {
        return 1;
    };
    return Politico;
}(SerVivoAbstracto));
// Veo que el hijo si lo puede instancias
var politico = new Politico();
//la clasica pregunta de "is a""  si es entonces es un clase  por ejemplo persona es una clase
//pero si digo perro la persona "has a " tiene perro entonces es un atributo de persona y podemos acceder 
// a ella.
//singleton lo que yo quiero es comprobar que solo hay 1 instancia en memoria
var SerDos = (function () {
    //la idea es que el constructor el privador para que no se pueda crear tantos objetos como yo quiera
    function SerDos(clasificacion) {
    }
    SerDos.instaceOf = function () {
        if (!SerDos.instance) {
        }
        return SerDos.instance;
    };
    return SerDos;
}());
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
var funcionJavascript = function (uno, dos) {
    return uno + dos;
};
// con la flecha me quito la palabra funcion
var funcionJavascriptfuncionLambda = function (uno, dos) {
    return uno + dos;
};
//# sourceMappingURL=app.js.map
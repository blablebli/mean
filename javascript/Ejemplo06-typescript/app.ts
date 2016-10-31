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
        return  this.nombre + "" + this.apellido1 + "" + this.apellido2;
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

//herencia!
class Ciudadano extends Persona{
    identidad : string;
    constructor(nombre:string, apellido1:string, apellido2:string, identidad: string){
    super(nombre,apellido1,apellido2); // no copio el constructor el padre sabe almacenar nombre y apellidos
    this.identidad = identidad;
}
//sobreescribo el metodostring del padre
    stringify():string{
           return super.stringify() + "" + this.identidad;
    }
}

var ciudadanoKane = new Ciudadano("kane", null, null, "1");
    console.log(ciudadanoKane.stringify());





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
        return this.nombre + "" + this.apellido1 + "" + this.apellido2;
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
//herencia!
var Ciudadano = (function (_super) {
    __extends(Ciudadano, _super);
    function Ciudadano(nombre, apellido1, apellido2, identidad) {
        _super.call(this, nombre, apellido1, apellido2); // no copio el constructor el padre sabe almacenar nombre y apellidos
        this.identidad = identidad;
    }
    //sobreescribo el metodostring del padre
    Ciudadano.prototype.stringify = function () {
        return _super.prototype.stringify.call(this) + "" + this.identidad;
    };
    return Ciudadano;
}(Persona));
var ciudadanoKane = new Ciudadano("kane", null, null, "1");
console.log(ciudadanoKane.stringify());
//# sourceMappingURL=app.js.map
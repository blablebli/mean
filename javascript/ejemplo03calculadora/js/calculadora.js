//Mejor sería crear una clase calculadora pq así tendria el modelo que me lo llevo
//y así solo tendrái que hacer una clase intermedia que llame a la clase calculadora y lo que hacer
//es pintar el resultado y que recoga los valores mediante un getElementeNTiD

/*var a=0;
var b=0;
var puntoA = false;
var puntoB = false;
var botonIgual = false;

//calculadora = new Calculadora(); // cosa nueva del teacher

var memoria;
operacion = "";

function PintaResultado(valorNumero)
{//ingresar en el input el valor que me llega cojo el 1 y lo planto
    if (operacion == "")
    {
        if (!puntoA){
            a = a & valorNumero;
            document.getElementById('resultado') = a;
        }

    }
    else{
        if (!puntoB){
            if (!botonIgual)
            {
            b = b & valorNumero;
            document.getElementById('resultado') = b;
            }
            else
            {//si le ha dado a la operaacion igual
                //document.getElementById('resultado') = '';
            }
        }
    }
    
}

//recogo la operacion para delegar en calcladora.js
function operacion(valorOperacion)
{//si le doy al mas se tiene que guardar el 1, si 
    //todo en caso de que me llegue igual 
    //llamar a la calculadora con el valor de memoria el valor del display y sumarlo
    operacion = valorOperacion
//profesor
    calculadora.sumar(memoria, document.getElementById("resultado"));
    //calculadora.prototype.sumar;
}

function Resultado()
{
    switch(valorOperacion)
    {
        case '+':            
            return a + b;
        case '-':           
            return a-b;
        case '*':
            
            return a*b;
        case '/':
             if (b>0)              
             return a/b;
    }
   
}



function limpiarTotal(borraResultado){
    a=0;
    b=0;
    operacion="";
    if (borraResultado)
    {
         document.getElementById('resultado') = '';
    }
}
function limpiarParcial()
{
    if ((a>0) & (b>0))
    {
        b=0;
    } else{
        a=0;
    }
}*/


function Calculadora(){
 
};
 

function Calculadora(clave1, clave2){
  this.clave1 = campo1;
  this.clave2 = campo2;
};
 

//Calculadora.prototype.sumar(clave1, clave2) = function () {
    Calculadora.prototype.sumar = function () {
        //return this.clave1 +this.clave2;
        return clave1 +clave2;
    };

//Calculadora.prototype.restar(clave1, clave2) = function () {
    Calculadora.prototype.restar = function () {
        return clave1 - clave2;
    };

//Calculadora.prototype.multiplicar(clave1, clave2) = function () {
    Calculadora.prototype.multiplicar= function () {
        return clave1 * clave2;
    };

//Calculadora.prototype.dividir(clave1, clave2) = function () {
    Calculadora.prototype.dividir = function () {
      if (this.clave2>0)             
      {    
        return clave1 / clave2;
      }
    };


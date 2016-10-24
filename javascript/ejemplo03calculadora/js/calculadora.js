//Mejor sería crear una clase calculadora pq así tendria el modelo que me lo llevo
//y así solo tendrái que hacer una clase intermedia que llame a la clase calculadora y lo que hacer
//es pintar el resultado y que recoga los valores mediante un getElementeNTiD


/*
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

 //var memoria='';

function Calculadora(clave1, clave2){
 this.clave1 = 0;
 this.clave2 = 0;
 
};


Calculadora.prototype.sumar = function sumar(){
        return eval( parseInt(this.clave1) +  parseInt(this.clave2));
    }

function restar(){
        return eval( parseInt(this.clave1) -  parseInt(this.clave2));
    }

function multiplicar(){
        return eval( parseInt(this.clave1) *  parseInt(this.clave2));
    }

function dividir(){
        if (this.clave2>0)             
      {    
         return eval( parseInt(this.clave1) /  parseInt(this.clave2));
      }
    }




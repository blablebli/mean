//Mejor sería crear una clase calculadora pq así tendria el modelo que me lo llevo
//y así solo tendrái que hacer una clase intermedia que llame a la clase calculadora y lo que hacer
//es pintar el resultado y que recoga los valores mediante un getElementeNTiD

var a=0;
var b=0;
var puntoA = false;
var puntoB = false;
var botonIgual = false;

operacion = "";

function PintaResultado(valorNumero)
{
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

function operacion(valorOperacion)
{
    operacion = valorOperacion
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
}

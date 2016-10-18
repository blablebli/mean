//Mejor sería crear una clase calculadora pq así tendria el modelo que me lo llevo
//y así solo tendrái que hacer una clase intermedia que llame a la clase calculadora y lo que hacer
//es pintar el resultado y que recoga los valores mediante un getElementeNTiD

var a=0;
var b=0;
operacion = "";
function numero(valorNumero)
{
    if (operacion == "")
    {
        a = a +valorNumero;
    }
    else{
        b = b + valorNumero;
    }
}

function operacion(valorOperacion)
{
    switch(valorOperacion)
    {
        case '+':
            operacion = '+';
            return a + b;
        case '-':
            operacion = '-';
            return a-b;
        case '*':
            operacion = '*';
            return a*b;
        case '/':
             if (b>0)
                operacion ='/' 
                return a/b;

    }
}

function limpiarTotal(){
    a=0;
    b=0;
    operacion="";
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

//se encarga de pintar

var memoria='';
operacionString = "";
punto = false;
seConvierteEnBotonIgual=false;

calculadora = new Calculadora(0,0);

function PintaResultado(valorNumero)
{  
  
  if (operacionString == "" )
    {// concatena el valor a mostrar en pantalla el primer valor
        if (!punto){  
             document.getElementById("txtresultado").value = document.getElementById("txtresultado").value + valorNumero; 
        }
    }
    else{ // concatena el valor a mostrar en pantalla en el segundo valor
        if (!punto){        

            // ha dado click en operacion y tengo el primer valor en memoria
            if (!seConvierteEnBotonIgual)
            {   //concatena segundo valor 
                 document.getElementById("txtresultado").value = document.getElementById("txtresultado").value + valorNumero; 
                   //aqui si sigue haciendo operaciones despues de haber dado igual y tengo en memoria el valor anterior   

            }
            else
            { // Aqui el igual pinta el valor del resultado de la operacoin que viene en valor numero
                // y el resultado lo guarde en memoria en la funcion de operaigual al final despues de realizar la operacion                       
                document.getElementById("txtresultado").value =  valorNumero;  
            }
        }     
    } 
}

function PintaPunto(){
    if (!punto)
    {
        punto = true;
    }else{
        alert ("No puede haber 2 puntos");
    }
}

function operacion(valorOperacion)
{
      
if(!seConvierteEnBotonIgual){
    memoria = document.getElementById("txtresultado").value;
// duda en lugar de memoria podría ser calculadora.clave1 y no necesito memoria
     document.getElementById("txtresultado").value="";
     operacionString  = valorOperacion; 
   
      punto = false;
      seConvierteEnBotonIgual =true;
 
}else{
operacionIgual(false);

}
}

//recogo la operacion para delegar en calcladora.js
function operacionIgual(DabotonIgual)
{
    if (eval(DabotonIgual))
    {
        seConvierteEnBotonIgual= false;
    }else{
        seConvierteEnBotonIgual = true;
    }


    calculadora.clave1= memoria;
    calculadora.clave2= document.getElementById("txtresultado").value;

    switch(operacionString)
    {
        case '+': 
           // PintaResultado(calculadora.sumar());
             document.getElementById("txtresultado").value =  calculadora.sumar();
            break;
        case '-': 
            //PintaResultado( calculadora.restar());  
           document.getElementById("txtresultado").value = calculadora.restar() 
            break;
        case '*':            
            //PintaResultado(calculadora.multiplicar());
             document.getElementById("txtresultado").value =calculadora.multiplicar()
            break;
        case '/':        
           // PintaResultado(calculadora.dividir()); 
           document.getElementById("txtresultado").value = calculadora.dividir();     
            break;
    } 
        punto = false;  
        calculadora.clave1= 0;
        calculadora.clave2 = 0;
        // paso despues de pintar resultado guardo su valor en memoria
          memoria = document.getElementById("txtresultado").value;        
}


function limpiarTotal()
{
    var memoria=0;
    operacionString = "";
    punto = false;
    botonIgual=false;
    document.getElementById("txtresultado").value ="";
    calculadora.clave1= 0;
    calculadora.clave2= 0;
    valorNumero=0
    
}

function limpiarUltimaTecla(){
    texto=document.getElementById("txtresultado").value.length;
if (texto>0)
{
    if ((punto) && document.getElementById("txtresultado").value.substring( texto-1,texto)==".")
    {
        punto=false;
    }
    document.getElementById("txtresultado").value= document.getElementById("txtresultado").value.substring(0, texto-1);
}
}

function limpiarParcial()
{
    document.getElementById("txtresultado").value ="";
    punto = false;
}
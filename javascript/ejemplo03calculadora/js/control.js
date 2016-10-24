//se encarga de pintar

var memoria='';
operacionString = "";
punto = false;
botonIgual=false;

calculadora = new Calculadora(0,0);

function PintaResultado(valorNumero)
{
  //  alert ("PintaResultadoentra" +memoria);
  if (operacionString == "" )
    {
        if (!punto){          
            valorNumero = memoria + valorNumero;            
            document.getElementById("txtresultado").value = valorNumero; 
            memoria = document.getElementById("txtresultado").value;
        }
    }
    else{
        if (!punto){
            if (!botonIgual)
            {                      
                 document.getElementById("txtresultado").value = valorNumero; 
                 memoria = valorNumero; 
            }
            else
            {
               document.getElementById("txtresultado").value = valorNumero;
                memoria = valorNumero; 
               botonIgual= false; 
            }
        }
       // operacionString = "";  
       // memoria =  valorNumero;    
    } 

   // alert ("PintaResultadoSale"+memoria);
}s

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
    calculadora.valor1= memoria;
 
     operacionString  = valorOperacion; 
     PintaResultado("");
      punto = false;
     // memoria ="";   
    //calculadora.prototype.sumar; en la parte de calculadora.js
}

//recogo la operacion para delegar en calcladora.js
function operacionIgual()
{//si le doy al mas se tiene que guardar el 1, si 
    //todo en caso de que me llegue igual 
    //llamar a la calculadora con el valor de memoria el valor del display y sumarlo

    //profesor
    botonIgual= true;
    calculadora.clave1= memoria;
    calculadora.clave2= document.getElementById("txtresultado").value;
memoria ="";
    switch(operacionString)
    {
        case '+': 
            PintaResultado(calculadora.sumar());  
            break;
        case '-': 
            PintaResultado( calculadora.restar());   
            break;
        case '*':            
            PintaResultado(calculadora.multiplicar());
            break;
        case '/':        
            PintaResultado(calculadora.dividir());       
            break;
    } 
        punto = false;       
    
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
    //alert ("Limpia memoria:"+ memoria);
}
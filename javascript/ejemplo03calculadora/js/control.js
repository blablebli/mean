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
            {       //aqui si sigue haciendo operaciones despues de haber dado igual y tengo en memoria el valor anterior
               
                // document.getElementById("txtresultado").value = document.getElementById("txtresultado").value + valorNumero; 
 //document.getElementById("txtresultado").value = memoria + valorNumero; 


 // necesito tener en memoria el valor del total

 //si entra aqui cuando hace mas la primera vez no le puedo asociar ese valor que entra segundo en memoria tengo el valor priero
                // memoria = valorNumero;

            }
            else
            { // en el igual no concateno nada                       
             document.getElementById("txtresultado").value =  valorNumero;
               botonIgual= false; 
            }
        }
       // operacionString = "";  
       // memoria =  valorNumero;    
    } 

   // alert ("PintaResultadoSale"+memoria);
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
    calculadora.valor1= memoria;
     document.getElementById("txtresultado").value="";
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
        // lo guardo para si quiere seguir sumando     
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
    //alert ("Limpia memoria:"+ memoria);
}
//se encarga de pintar

var memoria='';
operacion = "";
punto = false;

calculadora = new Calculadora();

function PintaResultado(valorNumero)
{//ingresar en el input el valor que me llega cojo el 1 y lo planto
    //document.getElementById("txtresultado").setAttribute("value",valorNumero);

  if (operacion == "" )
    {
        if (!punto){          
            valorNumero = memoria + valorNumero;            
            document.getElementById("txtresultado").value = valorNumero; 
            memoria = document.getElementById("txtresultado").value;
        }

    }
   /* else{
       /* if (!puntoB){
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
    }*/
}

function PintaPunto(){
    if (!punto)
    {
        punto = true;
    }else{
        alert ("No puede haber 2 puntos");
    }
}

//recogo la operacion para delegar en calcladora.js
function operacion(valorOperacion)
{//si le doy al mas se tiene que guardar el 1, si 
    //todo en caso de que me llegue igual 
    //llamar a la calculadora con el valor de memoria el valor del display y sumarlo
 calculadora = new Calculadora(memoria,document.getElementById("resultado"));
//profesor
 switch(valorOperacion)
    {
        case '+':            
            PintaResultado(calculadora.sumar());
        case '-':           
           PintaResultado( calculadora.restar());
        case '*':            
            PintaResultado(calculadora.multiplicar());
        case '/':
            PintaResultado(calculadora.dividir());
           
    }
   
    
    
    
    
    //calculadora.prototype.sumar; en la parte de calculadora.js
}

function Calculadora(clave1, clave2){
 this.clave1 = 0;
 this.clave2 = 0;

};


Calculadora.prototype.sumar = function sumar(){
  if (comprueba_decimal())
 {
      return eval( parseFloat(this.clave1) +  parseFloat(this.clave2));
 } else
 {
    return eval( parseInt(this.clave1) +  parseInt(this.clave2));
 }  
    }

Calculadora.prototype.restar =function restar(){
      return eval( parseInt(this.clave1) -  parseInt(this.clave2));
      
    }

Calculadora.prototype.multiplicar =function multiplicar(){
     return eval( parseInt(this.clave1) *  parseInt(this.clave2));
      
    }

Calculadora.prototype.dividir =function dividir(){
        if (this.clave2>0)             
      {    
      return   eval( parseInt(this.clave1) /  parseInt(this.clave2));
       
      }
    }

   function comprueba_decimal()
    {
      if (clave1.includes(".") ||clave2.includes("."))
      {
          return true;
      }else
      {
        return false;
      }
    }

    




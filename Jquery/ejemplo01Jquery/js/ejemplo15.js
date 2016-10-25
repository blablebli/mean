$(document).ready(initializeEvents);
function initializeEvents(){
    //Le digo todos los p que este en parrafos y cada uno de ellos le aplique la funcion markbysyze
     $("#parrafos p").each(markBySize);

}

function markBySize(){
    //en caso de que sea menor q 100 quiero que lo resalte 
   if($(this).text().length<100){
        $(this).css("background-color","#ff0");
    }
}


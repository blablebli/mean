$(document).ready(inicializaEventoConJquery);
//mejor que el window cojo el document pq asi es cuando esta cargado
//paso al elto. y llamo a la función

function presionarBotonConJquery()
{
       alert("Boton jQuery pulsado" ); 
}
/*yo agrego a cualquier componente el evento click para todos aunque el elto no lo tenga 
  y por eso le tenia que añadir en javascript el addEvent para aquellos que no tienen el click como evento
  por ejemplo el texto no lo tiene y cuando yo le añado $("").click el lo recoge directamente.*/
function inicializaEventoConJquery()
{
    $("#botonjquery1").click(presionarBotonConJquery());
    $("#botonjquery2").click(presionarBotonConJquery());
}
$(document).ready(initializeEvents);
function initializeEvents(){
    $("td").mousedown(downEvent);
    $("td").mouseup(upEvent);
}

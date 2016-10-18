var apiBaseUrl = "http://gateway.marvel.com/v1/public/";
var pubKey = "941910ed5545bcd215ba9bd3a90f93b3";
var method = "characters";

$.ajax({
    type: "GET",
    url: apiBaseUrl + method,
    data: { apikey: pubKey },
    dataType: "json",
    async: false,
    contentType: "application/json"
})
.then(function(data) {
    $("#request").text(apiBaseUrl + method);
    $(".json").text(JSON.stringify(data, null, 4)); 
}, 
    function(error) {
        debugger;
        alert('failed! ' + error.responseText);
    });

    //console.log("Entra");


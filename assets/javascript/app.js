$(document).ready(function(){

// Starting simpsons array
var simpsons = ["Homer Simpson", "Bart Simpson", "Hank Scorpio", "Steamed Hams"];

function gifDisplay(){
    var simpsons = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + simpsons + "&api_key=vg5alhPz8WeDUOcOxfVceiZVFh3DTWUY&limit=10";

    //Ajax call
    $.ajax({
        url: queryUrl,
        method: "GET"
    })

    .then(function(response){



        
    })
}





})
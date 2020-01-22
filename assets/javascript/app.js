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
        // Remove GIFs from GIF div
        $(".gifDiv").empty();

        // For loop and variables for sizing, rating, still/animate, and adding HTLM
        for (let i = 0; i < response.length; i++){
            var rating = response.data[i].rating;
            var ratingDiv = $("<p>").html("Ratins: " + rating);
            var still = response.data[i].images.fixed_height_still.url;
            var animate = response.data[i].images.fixed_height.url;
            var newGifDiv = $('<div calss="newGifDiv>');
            var gif = $('<img calss="gifImage');

            // Setting GIFs to still
            gif.attr("scr", still);
            gif.attr("data-still", still);
            gif.attr("data-animate", animate);
            gif.attr("data-state", "still");

            // Attaching ratings after their GIF
            newGifDiv.append(ratingDiv);
            newGifDiv.prepend(gif);
            $(".gifDiv").prepend(newGifDiv);
        }
    })
}

        // On click to animate GIFs




        // Add new button function and append to current buttons



        // Creating new button when a new GIF is searched

})
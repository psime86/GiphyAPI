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
        console.log(response);
        // Remove GIFs from GIF div
        $(".gifDiv").empty();

        // For loop and variables for sizing, rating, still/animate, and adding HTLM
        for (var i = 0; i < response.data.length; i++){
            var rating = response.data[i].rating;
            var ratingDiv = $("<p>").html("Rating: " + rating);
            var still = response.data[i].images.fixed_height_still.url;
            var animate = response.data[i].images.fixed_height.url;
            var newGifDiv = $("<div calss='newGifDiv'>");
            var gif = $('<img calss="gifImage">');

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
        $(".gifDiv").on("click", ".gifImage", function(){
            var state = $(this).attr("data-state");

            // If else animate/still
            if (state === "still"){
                $(this).attr("src", $(this).data("animate"));
                $(this).attr("data-state", "animate");
            }
            else{
                $(this).attr("src", $(this).data("still"));
                $(this).attr("data-state", "still");
            }
        })

        // Add new button function and append to current buttons
        function addButtons(){
            $(".buttons").empty();
            for (var i = 0; i < simpsons.length; i++){
                var addButton = $("<button class='newButton'>");
                addButton.addClass("simpsons");
                addButton.attr("data-name", simpsons[i]);
                addButton.html(simpsons[i]);
                $(".buttons").append(addButton);
            }
        }

        // Creating new button when a new GIF is searched
        $(".search").on("click", function(event){
            event.preventDefault();
            var gifs = $(".search-bar").val().trim();
            simpsons.push(gifs);
            $(".search-bar").val("")
            addButtons();
        })
    
        $(document).on("click", ".simpsons", gifDisplay);
        addButtons();
})
function JaredFunction()
{
    var div = document.getElementById("mainframe");
    div.innerHTML = "";
    var deckID = 0;
    var remaining = 0;

    var myurl = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    console.log(myurl);
    fetch(myurl)
        .then(function(response)
        {
            return response.json();
        }).then(function(json)
        {
            console.log(json);

            for (let i = 0; i < 52; i++)
            {
                var newImg = document.createElement("img");
                newImg.src = json["cards"][i].image;
                newImg.style = "margin:50px";
                div.appendChild(newImg);
            }

            console.log(remaining);
        });
}

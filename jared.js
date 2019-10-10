function JaredFunction()
{
    var div = document.getElementById("mainframe");
    var deckID = 0;
    var remaining = 0;

    var myurl = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
    console.log(myurl);
    fetch(myurl)
        .then(function(response)
        {
            return response.json();
        }).then(function(json)
        {
            console.log(json);

            deckID = json["deck_id"];
            remaining = json["remaining"];
            var newImg = document.createElement("img");
            newImg.src = json["cards"][0].image;
            div.appendChild(newImg);
        });

    while (remaining > 0)
    {
        sleep(1000);
        var myurl = "https://deckofcardsapi.com/api/<<" + deckID + ">>/new/draw/?count=1";
        console.log(myurl);
        fetch(myurl)
            .then(function(response)
            {
                return response.json();
            }).then(function(json)
            {
                console.log(json);

                remaining = json["remaining"];

                var newImg = document.createElement("img");
                newImg.src = json["cards"][0].image;
                div.appendChild(newImg);
            });

        var newtest = document.createElement("p")
        newtest.innerHTML = "test";
        div.appendChild(newtest);
        remaining--;
    }
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

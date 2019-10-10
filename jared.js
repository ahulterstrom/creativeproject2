function JaredFunction() {
    var div = document.getElementById("mainframe");

    var myurl = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
    console.log(myurl);
    fetch(myurl, { mode: 'cors' })
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            
            var newImg = document.createElement("img");
            newImg.src = json["cards"][0].image;
            div.appendChild(newImg);
        });
}
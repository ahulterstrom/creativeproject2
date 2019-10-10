var myurl = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
console.log(myurl);
fetch(myurl, { mode: 'cors' })
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
<<<<<<< HEAD
        document.getElementById("cardimage").src = json["cards"][0].image;
=======
        document.getElementById("cardimage").src = json["img"];
>>>>>>> fixed getElmentbyID
    });

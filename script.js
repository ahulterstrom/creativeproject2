// var myurl = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
// console.log(myurl);
// fetch(myurl)
//     .then(function(response) {
//         return response.json();
//     }).then(function(json) {
//         console.log(json);
//         document.getElementById("cardimage").src = json["cards"][0].image;
//     });


function Reset(){
    document.getElementById("mainframe").innerHTML = "<p>placeholder</p>";
}

Reset();
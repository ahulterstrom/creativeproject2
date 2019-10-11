// var myurl = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
// console.log(myurl);
// fetch(myurl)
//     .then(function(response) {
//         return response.json();
//     }).then(function(json) {
//         console.log(json);
//         document.getElementById("cardimage").src = json["cards"][0].image;
//     });


function Reset() {
    console.log("Reset() called");
    document.getElementById("mainframe").innerHTML = mainpagehtml;
    document.getElementById("mainframe2").innerHTML = "";
    document.getElementById("mainframe3").innerHTML = "";
}

var mainpagehtml = document.getElementById('mainframe').innerHTML;

//Reset();

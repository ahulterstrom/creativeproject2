/* global fetch */
var myurl;
var div = document.getElementById("mainframe");
var deck_id;

function StephenFunction() {
    myurl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    fetch(myurl)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        deck_id = json.deck_id;
    });
    let html = "<p>Stephen</p>";
    html += "<input type='button' id='stephenbutton' value='Next Card' onclick='nextCard()'> ";
    html += "<input type='button' id='stephenbutton' value='New Deck' onclick='StephenFunction()'> ";
    html += "<hr>";
    document.getElementById("mainframe").innerHTML = html;
}

function nextCard() {
    myurl = "https://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=1";
    fetch(myurl)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);

        var newImg = document.createElement("img");
            newImg.src = json["cards"][0].image;
            div.appendChild(newImg);
    });
}
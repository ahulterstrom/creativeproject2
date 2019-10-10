/* global fetch */
var myurl;
var div = document.getElementById("mainframe");
var deck_id;

function StephenFunction() {
    let html = "";
    html += "<input type='button' id='stephenbutton' value='New Sorted Deck' onclick='newSortedDeck()'> ";
    html += "<input type='button' id='stephenbutton' value='New Shuffled Deck' onclick='newShuffledDeck()'> ";
    html += "<hr>";
    document.getElementById("mainframe").innerHTML = html;
}

function newSortedDeck() {
    myurl = "https://deckofcardsapi.com/api/deck/new/";
    fetch(myurl)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            deck_id = json.deck_id;
        });
    let html = "";
    html += "<input type='button' id='stephenbutton' value='New Sorted Deck' onclick='newSortedDeck()'> ";
    html += "<input type='button' id='stephenbutton' value='New Shuffled Deck' onclick='newShuffledDeck()'> ";
    html += "<input type='button' id='stephenbutton' value='Next Card' onclick='nextCard()'> ";
    html += "<h1>Sorted Deck:</h1>";
    html += "<hr>";
    document.getElementById("mainframe").innerHTML = html;
}

function newShuffledDeck() {
    myurl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    fetch(myurl)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            deck_id = json.deck_id;
        });
    let html = "";
    html += "<input type='button' id='stephenbutton' value='New Sorted Deck' onclick='newSortedDeck()'> ";
    html += "<input type='button' id='stephenbutton' value='New Shuffled Deck' onclick='newShuffledDeck()'> ";
    html += "<input type='button' id='stephenbutton' value='Next Card' onclick='nextCard()'> ";
    html += "<h1>Shuffled Deck:</h1>";
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

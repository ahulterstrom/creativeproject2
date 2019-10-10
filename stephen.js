/* global fetch */
var myurl;
var div = document.getElementById("mainframe");
var deck_id;
var num_cards;
var num_drawn;

function StephenFunction() {
    num_cards = 1;
    let html = "";
    html += "<input type='button' id='stephenbutton' value='New Sorted Deck' onclick='newSortedDeck()'> ";
    html += "<input type='button' id='stephenbutton' value='New Shuffled Deck' onclick='newShuffledDeck()'> ";
    html += "<hr>";
    document.getElementById("mainframe").innerHTML = html;
}

function newSortedDeck() {
    num_drawn = 0;
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
    html += "<input type='button' id='stephenbutton' value='Next Card(s)' onclick='nextCard()'> <br> <br> ";
    html += "<form>";
    html += "<label>Number of cards to draw: </label>";
    html += "<input id='numInput' type='text' value='1'></input> ";
    html += "</form>";
    html += "<h1>Sorted Deck: </h1>";
    html += "<hr>";
    document.getElementById("mainframe").innerHTML = html;
}

function newShuffledDeck() {
    num_drawn = 0;
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
    html += "<input type='button' id='stephenbutton' value='Next Card(s)' onclick='nextCard()'> <br> <br> ";
    html += "<form>";
    html += "<label>Number of cards to draw: </label>";
    html += "<input id='numInput' type='text' value='1'></input> ";
    html += "</form>";
    html += "<h1>Shuffled Deck: </h1>";
    html += "<hr>";
    document.getElementById("mainframe").innerHTML = html;
}

function nextCard() {
    changeNum();
    myurl = "https://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=" + num_cards;
    fetch(myurl)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);

            for (let i = 0; i < num_cards; i++) {
                num_drawn += 1;
                if (num_drawn >= 53) return;
                var newImg = document.createElement("img");
                newImg.src = json["cards"][i].image;
                newImg.style = "margin:20px";
                div.appendChild(newImg);
            }
        });
}

function changeNum() {
    event.preventDefault();
    const value = document.getElementById("numInput").value;
    if (value === "") {
        return;
    }
    else if (!isNaN(value)) {
        num_cards = value;
    }
}
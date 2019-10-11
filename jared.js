var cards_left = 51;
var score = 0;
var cards;

function JaredFunction()
{
    var div = document.getElementById("mainframe");
    div.innerHTML = "";
    document.getElementById("mainframe2").innerHTML = "";
    document.getElementById("mainframe3").innerHTML = "";
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

            cards = json["cards"];

            console.log(cards);
            console.log(cards[cards_left]);
            
            var header = document.createElement("h1");
            header.innerHTML = "Guess a Card"
            header.style = "margin:20px";
            div.appendChild(header);

            // var newForm = document.createElement("form");
            // newForm.label = document.createAttribute("label");
            // newForm.label.innerHTML = "Guess what the next card is (ei. KS = King of Spades):";
            // newForm.input = document.createAttribute("input");
            // newForm.input.id = "guess";
            // newForm.input.type = "text";
            // newForm.input.value = "";
            // div.appendChild(newForm);;

            div.innerHTML += "<form>";
            div.innerHTML += "<label style='margin:20px'>  Guess what the next card is (ei. KS = King of Spades):  </label>";
            div.innerHTML += "<input id='guess' type='text' value=''></input> ";
            div.innerHTML += "</form>";

            div.innerHTML += "<input type='button' value='Make Guess' onclick='MakeGuess()'> <br> <br> ";


            console.log(remaining);
        });
}

function MakeGuess()
{
    var div = document.getElementById("mainframe");
    

    var guess = document.getElementById("guess").value;
    console.log(guess);
    if (guess === cards[cards_left].code)
    {
        score++;
    }
    

    div.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Guess a Card"
    header.style = "margin:20px";
    div.appendChild(header);
    
    div.innerHTML += "<p> Score = " + score + "</p>";
    div.innerHTML += "<p> Cards Left = " + cards_left + "</p>";

    // var newForm = document.createElement("form");
    // newForm.label = document.createAttribute("label");
    // newForm.label.innerHTML = "Guess what the next card is (ei. KS = King of Spades):";
    // newForm.input = document.createAttribute("input");
    // newForm.input.id = "guess";
    // newForm.input.type = "text";
    // newForm.input.value = "";
    // div.appendChild(newForm);;

    div.innerHTML += "<form>";
    div.innerHTML += "<label style='margin:20px'>  Guess what the next card is (ei. KS = King of Spades):  </label>";
    div.innerHTML += "<input id='guess' type='text' value='" + guess + "'></input> ";
    div.innerHTML += "</form>";

    div.innerHTML += "<input type='button' value='Make Guess' onclick='MakeGuess()'> <br> <br> ";
    
    var newImg = document.createElement("img");
    newImg.src = cards[cards_left].image;
    newImg.style = "margin:10px";
    console.log(newImg);
    console.log(div);
    div.appendChild(newImg);
    
    cards_left--;
}

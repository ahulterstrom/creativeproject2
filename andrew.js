
function AndrewFunction() {
    let cardsarray = [];
    document.getElementById("mainframe").innerHTML = "";

    // document.getElementById("mainframe").innerHTML = "<p>Andrew</p>";
    console.log("Called AndrewFunction()");

    var myurl = "https://deckofcardsapi.com/api/deck/new/draw/?count=5";
    console.log(myurl);
    fetch(myurl)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            // document.getElementById("cardimage").src = json["cards"][0].image;
            
            for (i = 0; i < json.cards.length; i++) {
                cardsarray.push(json.cards[i]);
                cardsarray.push(json.cards[i]);
            }
            shuffleArray(cardsarray);
            console.log(cardsarray);
            createBoard(cardsarray);
            // for (i=0; i< cardsarray.length; i++){

            // }

        });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createBoard(cardsarray) {
        
        for(i=0;i<cardsarray.length;i++){
            createCard(i);
        }
    }
    function createCard(i){
            var node = document.getElementById('mainframe');
            
            //Create the div to hold the card
            var newDiv = document.createElement('div');
            newDiv.id = "matchcard" + i;
            newDiv.className = "match-card";
            newDiv.onclick = function () { cardClicked(i) };
            
            //Create an inner div for the card
            var newDivInner = document.createElement('div');
            newDivInner.className = "match-card-inner";
            
            //Create the Front
            var newDivFront = document.createElement('div');
            newDivFront.className = "match-card-front";
            var newDivImg = document.createElement('img');
            newDivImg.id = ("card" + i + "front");
            newDivImg.src = cardsarray[i].image;
            newDivFront.append(newDivImg);
            
            //Create the Back
            var newDivBack = document.createElement('div');
            newDivBack.className = "match-card-back";
            var newDivImgBack = document.createElement('img');
            newDivImgBack.id = ("card" + i + "back");
            // newDivImgBack.className = "hidden";
            newDivImgBack.src = "Back.png";
            newDivBack.append(newDivImgBack);
            
            newDivInner.append(newDivFront, newDivBack);
            newDiv.append(newDivInner);
            node.appendChild(newDiv);
    }
    
    function cardClicked(id){
        console.log("-----");
        console.log(id);
        console.log(cardsarray);
        //let info = {card: cardsarray[id].code, location: id};
        console.log(cardsarray[id]);
        console.log("Card " + cardsarray[id].code +  " was clicked");
        console.log("Card is located in the " + id + "th position");
    }
    
    function flipCard(id){
        
        
        
        
    }
}

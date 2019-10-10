function AndrewFunction() {
    let cardsarray = [];
    let flipped = [];
    let matched = [];
    let quotesarray = [];
    let acceptingInput = true;
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
        var node = document.getElementById('mainframe');
        var titleDiv = document.createElement('div');
        titleDiv.id = ('titlearea');
        var h2 = document.createElement('h2');
        h2.innerHTML = "Welcome to the Ron Swanson Matching Game!";
        var p = document.createElement('p');
        p.id = ('instructions');
        titleDiv.append(h2,p);
        var matchingDiv = document.createElement('div');
        matchingDiv.id = ('matchingarea');
        var buttonsDiv = document.createElement('div');
        buttonsDiv.id = ('buttonsarea');
        
        
        
        
        
        
        node.append(titleDiv, matchingDiv, buttonsDiv);
        for (i = 0; i < cardsarray.length; i++) {
            createCard(i);
        }
        document.getElementById("instructions").innerHTML = "Click the cards to flip them over and try to find matching pairs. <br>For each match you find you will be rewarded with a Ron Swanson Quote."
    }

    function createCard(i) {
        var node = document.getElementById('matchingarea');

        //Create the div to hold the card
        var newDiv = document.createElement('div');
        newDiv.id = "match-card" + i;
        newDiv.className = "match-card flipped";
        // newDiv.setAttribute('draggable', false);
        newDiv.onclick = function() { cardClicked(i) };

        //Create an inner div for the card
        var newDivInner = document.createElement('div');
        newDivInner.className = "match-card-inner";

        //Create the Front
        var newDivFront = document.createElement('div');
        newDivFront.className = "match-card-front";
        var newDivImg = document.createElement('img');
        newDivImg.id = ("card" + i + "front");
        newDivImg.className = "match-card-img";
        newDivImg.src = cardsarray[i].image;
        newDivImg.setAttribute('draggable', false);
        newDivFront.append(newDivImg);

        //Create the Back
        var newDivBack = document.createElement('div');
        newDivBack.className = "match-card-back";
        var newDivImgBack = document.createElement('img');
        newDivImgBack.id = ("card" + i + "back");
        newDivImgBack.className = "match-card-img";
        // newDivImgBack.className = "hidden";
        newDivImgBack.src = "Back.png";
        newDivImgBack.setAttribute('draggable', false);
        newDivBack.append(newDivImgBack);

        newDivInner.append(newDivFront, newDivBack);
        newDiv.append(newDivInner);
        node.append(newDiv);
    }

    function cardClicked(id) {
        console.log("-------You clicked on a card-------");
        if (!acceptingInput){
            console.log("please wait");
            return;
        }
        if (isMatched(id)){
            console.log("already matched!");
            return;
        }
        if (flipped[0] == id){
            console.log("can't click the same card twice")
            return;
        }
        acceptingInput = false;
        //let info = {card: cardsarray[id].code, location: id};
        console.log(cardsarray[id]);
        console.log("Card " + cardsarray[id].code + " was clicked");
        console.log("Card is located in the " + id + "th position");

    
        flipped.push(id);
        flipCard(id);
        setTimeout( function() {
        console.log("after holding");
        if (flipped.length >= 2){
            //check for match
            console.log("flipped is: ");
            console.log(flipped);
            var card1 = cardsarray[flipped[0]].code;
            var card2 = cardsarray[flipped[1]].code;
            if (card1 == card2){
                //it's a match!
                console.log("it's a match!");
                document.getElementById("match-card" + flipped[0]).style.opacity = .3;
                document.getElementById("match-card" + flipped[1]).style.opacity = .3;
                matched.push(flipped[0]);
                matched.push(flipped[1]);
                //check if the player won
                if(matched.length == cardsarray.length){
                    console.log("We have a winner!")
                }
            }
            
            flipAllDown()
        }
        setInstructionText();
        acceptingInput = true;
        }, 500 );
        
    }



    function flipCard(id) {
        var element = document.getElementById("match-card" + id);
        element.classList.toggle("flipped");
    }
    function flipAllDown(){
        for (i=0;i<cardsarray.length;i++){
            if(!isMatched(i)){
                document.getElementById("match-card" + i).className = "match-card flipped";
            }
            else{
                document.getElementById("match-card" + i).className = "match-card";
            }
        }
        flipped = [];
    }
    function isMatched(id){
        for (cardid=0;cardid<matched.length;cardid++){
            if (matched[cardid] == id){
                return true;
            }
        }
        return false;
    }
    function setInstructionText(){
        if (matched.length == 0){
            if(flipped.length == 0){
                document.getElementById('instructions').innerHTML = "Click to flip over a card"
            }
            else{
                document.getElementById('instructions').innerHTML = "Click another card to try to find a match!"
            }
        }
        else if (matched.length/2 >= 1){
            if (quotesarray.length < (matched.length/2)){
                updateQuote();
            }
        }
        if (matched.length == cardsarray.length){
               document.getElementById('instructions').innerHTML += "<br>You won! Great job!"
        }
    }
    function* quoteGenerator() {
    	while (true) {
    		yield fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
        		.then(res => res.json());
     	}
    }
    function updateQuote() {
    	quoteGenerator().next().value.then(function (data) {
    		document.getElementById('instructions').innerHTML = `"${data[0]}"` + " -Ron Swanson";
    		quotesarray.push(`"${data[0]}"`);
    	});
    }
}

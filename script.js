var myurl = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
console.log(myurl);
fetch(myurl, { mode: 'cors' })
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        // document.getElementById("cardimage").src = json["cards"][0].image;
    });


function Reset(){
    document.getElementById("mainframe").innerHTML = "<p>placeholder</p>";
}

Reset();

function AndrewFunction(){
    let inner 
    // document.getElementById("mainframe").innerHTML = "<p>Andrew</p>";
    
    
    
    var node = document.getElementById('mainframe');
    var newDiv = document.createElement('div');
    newDiv.id = ("pokedexitem" + iCount);
    newDiv.className = "pokedexitem";
    newDiv.onclick = function () { pokemonClicked(id) };
    var newDivImg = document.createElement('img');
    newDivImg.id = ("pokesprite" + iCount);
    newDivImg.className = "pokesprite";
    newDivImg.src = "";
    var newDivImgBack = document.createElement('img');
    newDivImgBack.id = ("pokespriteback" + iCount);
    newDivImgBack.className = "hidden";
    newDivImgBack.src = "";
    var newDivPname = document.createElement('p');
    newDivPname.id = ("pokename" + iCount);
    newDivPname.className = "pokename";
    newDiv.append(newDivImg, newDivPname, newDivImgBack);
    node.appendChild(newDiv);
    
}

function JaredFunction(){
    document.getElementById("mainframe").innerHTML = "<p>Jard</p>";
}

function StephenFunction(){
    let html = "<p>Stephen</p>";
    
    document.getElementById("mainframe").innerHTML = html;
}
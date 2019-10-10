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



function AndrewFunction(){

    // document.getElementById("mainframe").innerHTML = "<p>Andrew</p>";
    console.log("Called AndrewFunction()");
    
    
    var node = document.getElementById('mainframe');
    var newDiv = document.createElement('div');
    newDiv.id = "mydivid";
    newDiv.className = "mydivclass";
    // newDiv.onclick = function () { pokemonClicked(id) };
    var newDivImg = document.createElement('img');
    newDivImg.id = ("cardimage");
    // newDivImg.className = "pokesprite";
    newDivImg.src = "Back.png";
    var newDivImgBack = document.createElement('img');
    newDivImgBack.id = ("cardimage");
    // newDivImgBack.className = "hidden";
    newDivImgBack.src = "";
    var newDivPname = document.createElement('p');
    newDivPname.id = ("cardname");
    // newDivPname.className = "cardname";
    newDiv.append(newDivImg, newDivPname, newDivImgBack);
    node.appendChild(newDiv);
    
    
    
}



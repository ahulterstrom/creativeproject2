var myurl = "https://cors-anywhere.herokuapp.com";
myurl += "/xkcd.com/info.0.json";
console.log(myurl);
fetch(myurl, { mode: 'cors' })
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        document.getElementById("image").src = json["img"];
    });

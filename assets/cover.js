// "https://api.unsplash.com/photos/random/?client_id=aSTKqULcInf4ssTpbJKUfMsQhT3BRcBGFLPL3U7zJOU&orientation=landscape&query=cocktail"
var coverApi = "aSTKqULcInf4ssTpbJKUfMsQhT3BRcBGFLPL3U7zJOU"

let imageEl = document.querySelector(".backgroundImage")
// gets random image from Unsplash to display on webpage
let endpoint = "https://api.unsplash.com/photos/random/?client_id=" + coverApi + "&orientation=landscape&query=cocktail";

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        imageEl.src = jsonData.urls.regular;
    })
    
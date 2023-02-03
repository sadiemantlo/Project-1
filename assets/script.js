var userInput = document.getElementById('user-input');
var searchBttn = document.getElementById('search-bttn');

searchBttn.addEventListener('click', function() {
    var getRecipe = 'https://thecocktaildb.com/api/json/v1/1/random.php';
        fetch(getRecipe)
            .then(response => response.json())
            .then(data => { 
                console.log(data);
                 });

})

// 'https://thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput.value;

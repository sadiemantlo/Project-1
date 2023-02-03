var searchBttn = document.getElementById('search-bttn');
var drinkNameEl = document.getElementById('drink-name');
var ing1El = document.getElementById('ing1');
var ing2El = document.getElementById('ing2');
var ing3El = document.getElementById('ing3');
var instructionsEl = document.getElementById('instructions');
var imgEl = document.getElementById('img');
var saveBttn = document.getElementById('save-bttn');

searchBttn.addEventListener('click', function() {
    var getRecipe = 'https://thecocktaildb.com/api/json/v1/1/random.php';
        fetch(getRecipe)
            .then(response => response.json())
            .then(data => { 
                console.log(data);
                var drinkName = data.drinks[0].strDrink;
                var ing1 = data.drinks[0].strIngredient1;
                var ing2 = data.drinks[0].strIngredient2;
                var ing3 = data.drinks[0].strIngredient3;
                var instructions = data.drinks[0].strInstructions;
                var img = data.drinks[0].strDrinkThumb;
                drinkNameEl.innerText = drinkName;
                ing1El.innerText = ing1;
                ing2El.innerText = ing2;
                ing3El.innerText = ing3;
                instructionsEl.innerText = instructions;
                imgEl.src = img;
                 });

})

$(function () {
    // event listner for save buttons and saving to local storage
    $('#saveBtn').click(function() {
      var blockEl = $(this).parent();
      var savedDrinks = blockEl.children(h1).val();
      localStorage.setItem('drink-name', savedDrinks);
    })

  });

//   saveBttn.addEventListener('click', function() {
//     var savedDrinks = drinkNameEl.textContent
//     localStorage.setItem('drink-name', savedDrinks)
//   })

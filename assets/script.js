var searchBttn = document.getElementById('search-bttn');
var drinkNameEl = document.getElementById('drink-name');
var ing1El = document.getElementById('ing1');
var ing2El = document.getElementById('ing2');
var ing3El = document.getElementById('ing3');
var instructionsEl = document.getElementById('instructions');
var imgEl = document.getElementById('img');
var saveBttn = document.getElementById('save-bttn');
var list = document.getElementById('local-storage');

searchBttn.addEventListener('click', function () {
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
      var measure1 = data.drinks[0].strMeasure1;
      var measure2 = data.drinks[0].strMeasure2;
      var measure3 = data.drinks[0].strMeasure3;
      drinkNameEl.innerText = drinkName;
      ing1El.innerText = measure1 + ing1;
      ing2El.innerText = measure2 + ing2;
      ing3El.innerText = measure3 + ing3;
      instructionsEl.innerText = instructions;
      imgEl.src = img;
    })

});


function save() {
  console.log('clicked');
  var savedDrinks = drinkNameEl.textContent;
  console.log(savedDrinks);
  localStorage.setItem('drink-name', savedDrinks)
}
saveBttn.addEventListener('click', save);

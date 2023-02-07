var searchBttn = document.getElementById('search-bttn');
var drinkNameEl = document.getElementById('drink-name');
var ing1El = document.getElementById('ing1');
var ing2El = document.getElementById('ing2');
var ing3El = document.getElementById('ing3');
var ing4El = document.getElementById('ing4');
var instructionsEl = document.getElementById('instructions');
var imgEl = document.getElementById('img');
var saveBttn = document.getElementById('save-bttn');
var list = document.getElementById('local-storage');
var information = document.getElementById('information');

searchBttn.addEventListener('click', function () {
  var getRecipe = 'https://thecocktaildb.com/api/json/v1/1/random.php';
  fetch(getRecipe)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      for (const ingredient in data.drinks[0]) {
        if (data.drinks[0][ingredient] !== null) {
          var drinkName = data.drinks[0].strDrink;
          var ing1 = data.drinks[0].strIngredient1;
          var ing2 = data.drinks[0].strIngredient2;
          var ing3 = data.drinks[0].strIngredient3;
          var ing4 = data.drinks[0].strIngredient4;
          var instructions = data.drinks[0].strInstructions;
          var img = data.drinks[0].strDrinkThumb;
          var measure1 = data.drinks[0].strMeasure1;
          var measure2 = data.drinks[0].strMeasure2;
          var measure3 = data.drinks[0].strMeasure3;
          var measure4 = data.drinks[0].strMeasure4;
          drinkNameEl.innerText = drinkName;
          ing1El.innerText = measure1 + ing1;
          ing2El.innerText = measure2 + ing2;
          ing3El.innerText = measure3 + ing3;
          ing4El.innerText = measure4 + ing4;
          instructionsEl.innerText = instructions;
          imgEl.src = img;
        }
      }

    })

});


function save(event) {
  event.preventDefault();
  console.log('clicked');
  var drinkHistory = JSON.parse(localStorage.getItem('drink-name')) || []
  var savedDrinks = drinkNameEl.textContent;
  console.log(savedDrinks);
  console.log(drinkHistory);
  localStorage.setItem('drink-name', savedDrinks)
  drinkHistory.push(savedDrinks)
  localStorage.setItem('drink-name', JSON.stringify(drinkHistory));
  list.innerHTML = '';
  for (i = 0; i < drinkHistory.length; i++) {
    var button = document.createElement('button');
    button.textContent = drinkHistory[i];
    button.setAttribute('drink-name', drinkHistory[i].replaceAll(" ", "_"));
    button.classList.add('favorite-bttns');
    list.appendChild(button);

  }
}

saveBttn.addEventListener('click', save);

function populateFavoriteList() {
  var drinkHistory = JSON.parse(localStorage.getItem('drink-name')) || []
  var savedDrinks = drinkNameEl.textContent;
  console.log(savedDrinks);
  console.log(drinkHistory);
  localStorage.setItem('drink-name', savedDrinks)
  drinkHistory.push(savedDrinks)
  localStorage.setItem('drink-name', JSON.stringify(drinkHistory));
  list.innerHTML = '';
  for (i = 0; i < drinkHistory.length; i++) {
    var button = document.createElement('button');
    button.textContent = drinkHistory[i];
    list.appendChild(button);
  }
}
populateFavoriteList();

function favoriteBttn(event) {
  event.preventDefault();
  console.log(event.target.getAttribute('drink-name'));
  var cocktail = event.target.getAttribute('drink-name');
  var getFavorites = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail;
  fetch(getFavorites)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      for (const ingredient in data.drinks[0]) {
        if (data.drinks[0][ingredient] !== null) {
          var drinkName = data.drinks[0].strDrink;
          var ing1 = data.drinks[0].strIngredient1;
          var ing2 = data.drinks[0].strIngredient2;
          var ing3 = data.drinks[0].strIngredient3;
          var ing4 = data.drinks[0].strIngredient4;
          var instructions = data.drinks[0].strInstructions;
          var img = data.drinks[0].strDrinkThumb;
          var measure1 = data.drinks[0].strMeasure1;
          var measure2 = data.drinks[0].strMeasure2;
          var measure3 = data.drinks[0].strMeasure3;
          var measure4 = data.drinks[0].strMeasure4;
          drinkNameEl.innerText = drinkName;
          ing1El.innerText = measure1 + ing1;
          ing2El.innerText = measure2 + ing2;
          ing3El.innerText = measure3 + ing3;
          ing4El.innerText = measure4 + ing4;
          instructionsEl.innerText = instructions;
          imgEl.src = img;
        }
      }

    })
}
list.addEventListener('click', favoriteBttn);
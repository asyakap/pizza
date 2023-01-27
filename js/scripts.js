//Business Logic 

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.PizzaPrice = function () {
  let pizzaPriceSize = 0;
  let pizzaPriceToppings = 0;
  let pizzaPrice = [];
  let toppings = [];
  pizzaPrice.push(pizzaPriceSize);
  pizzaPrice.push(pizzaPriceToppings);
  pizzaPrice.push(toppings);
  return pizzaPrice;
};


let pizzaOrder = new Pizza(0, []);
console.log(pizzaOrder);
let price = pizzaOrder.PizzaPrice();
console.log(price);
let pizzaList = [];

//User Interface Logic
function smallSize(event) {
  priceSize = 15;
  document.getElementById("small").src = "img/pizzachecked.jpg";
  document.getElementById("medium").src = "img/pizza.jpg";
  document.getElementById("large").src = "img/pizza.jpg";
  price[0] = priceSize;
  pizzaOrder.size = "small";
  console.log(price[0]);
  return price[0];
}
function mediumSize(event) {
  priceSize = 20;
  document.getElementById("medium").src = "img/pizzachecked.jpg";
  document.getElementById("small").src = "img/pizza.jpg";
  document.getElementById("large").src = "img/pizza.jpg";
  price[0] = priceSize;
  pizzaOrder.size = "medium";
  console.log(price[0]);
  return price[0];
}
function largeSize(event) {
  priceSize = 25;
  document.getElementById("large").src = "img/pizzachecked.jpg";
  document.getElementById("small").src = "img/pizza.jpg";
  document.getElementById("medium").src = "img/pizza.jpg";
  price[0] = priceSize;
  pizzaOrder.size = "large";
  console.log(price[0]);
  return price[0];
}

let hamTimesClicked = 0;
function ham(event) {
  priceToppings = price[1] + 2;
  hamTimesClicked += 1;
  console.log(hamTimesClicked);
  if (hamTimesClicked % 2 == 0) {
    priceToppings = price[1] - 2;
    document.getElementById("ham").src = "img/ham.jpg";
  }
  else {

    document.getElementById("ham").src = "img/checkedHam.jpg";
    price[2].push(" ham");
  }
  console.log(priceToppings);
  price[1] = priceToppings;
  return price[1];
}

let salamiTimesClicked = 0;
function salami(event) {
  priceToppings = price[1] + 2;
  salamiTimesClicked += 1;
  if (salamiTimesClicked % 2 == 0) {
    priceToppings = price[1] - 2;
    document.getElementById("salami").src = "img/salami.jpg";
  }
  else {
    document.getElementById("salami").src = "img/checkedSalami.jpg";
    price[2].push(" salami");
  }
  console.log(priceToppings);
  price[1] = priceToppings;
  return price[1];
}

let cheeseTimesClicked = 0;
function cheese(event) {
  priceToppings = price[1] + 2;
  cheeseTimesClicked += 1;
  if (cheeseTimesClicked % 2 == 0) {
    priceToppings = price[1] - 2;
    document.getElementById("cheese").src = "img/cheese.jpg";
  }
  else {
    document.getElementById("cheese").src = "img/extraCheese.jpg";
    price[2].push(" extra cheese");
  }
  console.log(priceToppings);
  price[1] = priceToppings;
  return price[1];
}

let mushroomsTimesClicked = 0;
function mushrooms(event) {
  priceToppings = price[1] + 2;
  mushroomsTimesClicked += 1;
  if (mushroomsTimesClicked % 2 == 0) {
    priceToppings = price[1] - 2;
    document.getElementById("mushrooms").src = "img/Mushrooms.jpg";
  }
  else {
    document.getElementById("mushrooms").src = "img/mushroomsChecked.jpg";
    price[2].push(" mushrooms");
  }
  console.log(priceToppings);
  price[1] = priceToppings;
  return price[1];
}

let tomatoesTimesClicked = 0;
function tomatoes(event) {
  priceToppings = price[1] + 2;
  tomatoesTimesClicked += 1;
  if (tomatoesTimesClicked % 2 == 0) {
    priceToppings = price[1] - 2;
    document.getElementById("tomatoes").src = "img/tomatoes.jpg";
  }
  else {
    document.getElementById("tomatoes").src = "img/checkedTomatoes.jpg";
    price[2].push(" tomatoes");
  }
  console.log(priceToppings);
  price[1] = priceToppings;
  return price[1];
}

let onionsTimesClicked = 0;
function onions(event) {
  priceToppings = price[1] + 2;
  onionsTimesClicked += 1;
  if (onionsTimesClicked % 2 == 0) {
    priceToppings = price[1] - 2;
    document.getElementById("onions").src = "img/onions.jpg";
  }
  else {
    document.getElementById("onions").src = "img/onionsChecked.jpg";
    price[2].push(" onions");
  }
  console.log(priceToppings);
  price[1] = priceToppings;
  return price[1];
}


function finalizeOrder(event) {
  let finalPrice = 0;
  pizzaList.forEach(function (element) {
    finalPrice += element[0] + element[1];
  })
  document.getElementById("finalCheck").innerText = "Your order total is $" + finalPrice;
  document.getElementById("hidden").style.display = "block";
}

let count = 0;
function orderMore(event) {
  if (price[0] === 0) {
    document.getElementById("output1").innerText = "Please Select Pizza Size!"
  }
  else {
    pizzaList.push(price);
    let finalPrice = price[0] + price[1];
    count += 1;
    id = "output" + count;
    if (price[2].length === 0) {
      document.getElementById(id).innerText = count + ") " + pizzaOrder.size + " pizza. - $" + finalPrice;
    } else {
      document.getElementById(id).innerText = count + ") " + pizzaOrder.size + " pizza with " + price[2] + " - $" + finalPrice;
    }
    finalPrice = 0;
    price = [0, 0, []];
    pizzaOrder.size = [];
    hamTimesClicked = 0;
    salamiTimesClicked = 0;
    cheeseTimesClicked = 0;
    mushroomsTimesClicked = 0;
    tomatoesTimesClicked = 0;
    onionsTimesClicked = 0;
    document.getElementById("small").src = "img/pizza.jpg";
    document.getElementById("medium").src = "img/pizza.jpg";
    document.getElementById("large").src = "img/pizza.jpg";
    document.getElementById("ham").src = "img/ham.jpg";
    document.getElementById("salami").src = "img/salami.jpg";
    document.getElementById("cheese").src = "img/cheese.jpg";
    document.getElementById("mushrooms").src = "img/mushrooms.jpg";
    document.getElementById("tomatoes").src = "img/tomatoes.jpg";
    document.getElementById("onions").src = "img/onions.jpg";
  }
}

function success() {
  document.getElementById("hangon").innerText = "Hang on, your pizza is on the way!"
  document.getElementById("delivery").src = "img/delivery.gif"
}

window.addEventListener("load", function () {
  document.getElementById("small").addEventListener("click", smallSize);
  document.getElementById("medium").addEventListener("click", mediumSize);
  document.getElementById("large").addEventListener("click", largeSize);
  document.getElementById("ham").addEventListener("click", ham);
  document.getElementById("salami").addEventListener("click", salami);
  document.getElementById("cheese").addEventListener("click", cheese);
  document.getElementById("mushrooms").addEventListener("click", mushrooms);
  document.getElementById("tomatoes").addEventListener("click", tomatoes);
  document.getElementById("onions").addEventListener("click", onions);
  document.getElementById("onions").addEventListener("click", onions);
  document.getElementById("order").addEventListener("click", finalizeOrder);
  document.getElementById("orderMore").addEventListener("click", orderMore);
  document.getElementById("order1").addEventListener("click", success);

});
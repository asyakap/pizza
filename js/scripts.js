//Business Logic 

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.PizzaPrice = function () {
  let pizzaPriceSize = 15;
  let pizzaPriceToppings = 0;
  let pizzaPrice = [];
  pizzaPrice.push(pizzaPriceSize);
  pizzaPrice.push(pizzaPriceToppings);
  return pizzaPrice;
};


let pizzaOrder = new Pizza(0, []);
console.log(pizzaOrder);
let price = pizzaOrder.PizzaPrice();
console.log(price);

//User Interface Logic
function smallSize(event) {
  priceSize = 15;
  document.getElementById("small").src = "img/pizzachecked.jpg";
  document.getElementById("medium").src = "img/pizza.jpg";
  document.getElementById("large").src = "img/pizza.jpg";
  price[0] = priceSize;
  console.log(price[0]);
  return price[0];
}
function mediumSize(event) {
  priceSize = 20;
  document.getElementById("medium").src = "img/pizzachecked.jpg";
  document.getElementById("small").src = "img/pizza.jpg";
  document.getElementById("large").src = "img/pizza.jpg";
  price[0] = priceSize;
  console.log(price[0]);
  return price[0];
}
function largeSize(event) {
  priceSize = 25;
  document.getElementById("large").src = "img/pizzachecked.jpg";
  document.getElementById("small").src = "img/pizza.jpg";
  document.getElementById("medium").src = "img/pizza.jpg";
  price[0] = priceSize;
  console.log(price[0]);
  return price[0];
}

let hamTimesClicked = 0;
function ham(event) {
  hamTimesClicked += 1;
  console.log(hamTimesClicked);
  if (hamTimesClicked % 2 == 0) {
    priceToppings = price[1] - 2;
    document.getElementById("ham").src = "img/ham.jpg";
  }
  else {
    priceToppings = price[1] + 2;
    document.getElementById("ham").src = "img/checkedham.jpg";
  }
  console.log(priceToppings);
  price[1] = priceToppings;
  return price[1];
}

let salamiTimesClicked = 0;
function salami(event) {
  salamiTimesClicked += 1;
  if (salamiTimesClicked % 2 == 0) {
    priceToppings = price[1] - 2;
    document.getElementById("salami").src = "img/salami.jpg";
  }
  else {
    priceToppings = price[1] + 2;
    document.getElementById("salami").src = "img/checkedSalami.jpg";
  }
  console.log(priceToppings);
  price[1] = priceToppings;
  return price[1];
}

let cheeseTimesClicked = 0;
function cheese(event) {
  cheeseTimesClicked += 1;
  if (cheeseTimesClicked % 2 == 0) {
    priceToppings = price[1] - 2;
    document.getElementById("cheese").src = "img/cheese.jpg";
  }
  else {
    priceToppings = price[1] + 2;
    document.getElementById("cheese").src = "img/extraCheese.jpg";
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
    document.getElementById("mushrooms").src = "img/mushrooms.jpg";
  }
  else {
    document.getElementById("mushrooms").src = "img/mushroomsChecked.jpg";
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
  }
  console.log(priceToppings);
  price[1] = priceToppings;
  return price[1];
}

function finalizeOrder(event) {
  let finalPrice = price[0] + price[1];
  document.getElementById("output").innerText = "Final cost is $" + finalPrice;
}

window.addEventListener("load", function () {
  console.log(document.getElementById("small"));
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
  document.getElementById("order").addEventListener("click", finalizeOrder)

});
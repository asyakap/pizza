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

function ham(event) {
  priceToppings = price[1] + 2; 
  document.getElementById("ham").src = "img/checkedham.jpg";
  console.log(priceToppings);
  price[1] = priceToppings;
  return price[1];
}

function salami(event) {
  priceToppings = price[1] + 2; 
  document.getElementById("salami").src = "img/checkedSalami.jpg";
  console.log(priceToppings);
  price[1] = priceToppings;
  return price[1];
}

function cheese(event) {
  priceToppings = price[1] + 2; 
  document.getElementById("cheese").src = "img/extraCheese.jpg";
  console.log(priceToppings);
  price[1] = priceToppings;
  return price[1];
}




window.addEventListener("load", function () {
  console.log(document.getElementById("small"));
document.getElementById("small").addEventListener("click", smallSize);
document.getElementById("medium").addEventListener("click", mediumSize);
document.getElementById("large").addEventListener("click", largeSize);
document.getElementById("ham").addEventListener("click", ham);
document.getElementById("salami").addEventListener("click", salami);
document.getElementById("cheese").addEventListener("click", cheese);
});
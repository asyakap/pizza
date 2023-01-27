//Business Logic 

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.PizzaPrice = function () {
  let pizzaPrice = 15;
  return pizzaPrice;
}; 


let pizzaOrder = new Pizza(0, []);
console.log(pizzaOrder);
let price = pizzaOrder.PizzaPrice();
console.log(price);

//User Interface Logic
function smallSize(event) {
  price = price;
  document.getElementById("small").src = "img/pizzachecked.jpg";
  document.getElementById("medium").src = "img/pizza.jpg";
  document.getElementById("large").src = "img/pizza.jpg";
}
function mediumSize(event) {
  price = price + 5; 
  document.getElementById("medium").src = "img/pizzachecked.jpg";
  document.getElementById("small").src = "img/pizza.jpg";
  document.getElementById("large").src = "img/pizza.jpg";
  console.log(price);
  return price;
}
function largeSize(event) {
  price = price + 10; 
  document.getElementById("large").src = "img/pizzachecked.jpg";
  document.getElementById("small").src = "img/pizza.jpg";
  document.getElementById("medium").src = "img/pizza.jpg";
  console.log(price);
  return price;
}

function ham(event) {
  price = price + 2; 
  document.getElementById("ham").src = "img/checkedham.jpg";
  console.log(price);
  return price;
}




window.addEventListener("load", function () {
  console.log(document.getElementById("small"));
document.getElementById("small").addEventListener("click", smallSize);
document.getElementById("medium").addEventListener("click", mediumSize);
document.getElementById("large").addEventListener("click", largeSize);
document.getElementById("ham").addEventListener("click", ham);

});
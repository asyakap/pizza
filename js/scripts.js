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
  let pizzaPrice = price;
  document.getElementById("small").src = "img/pizzachecked.jpg";
  document.getElementById("medium").src = "img/pizza.jpg";
  document.getElementById("large").src = "img/pizza.jpg";
}
function mediumSize(event) {
  let pizzaPrice = price + 5; 
  document.getElementById("medium").src = "img/pizzachecked.jpg";
  document.getElementById("small").src = "img/pizza.jpg";
  document.getElementById("large").src = "img/pizza.jpg";
  console.log(pizzaPrice);
}
function largeSize(event) {
  let pizzaPrice = price + 10; 
  document.getElementById("large").src = "img/pizzachecked.jpg";
  document.getElementById("small").src = "img/pizza.jpg";
  document.getElementById("medium").src = "img/pizza.jpg";
  console.log(pizzaPrice);
}




window.addEventListener("load", function () {
  console.log(document.getElementById("small"));
document.getElementById("small").addEventListener("click", smallSize);
document.getElementById("medium").addEventListener("click", mediumSize);
document.getElementById("large").addEventListener("click", largeSize);

});
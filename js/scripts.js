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
let pizzaPrice = pizzaOrder.PizzaPrice();
console.log(pizzaPrice);

//User Interface Logic
function smallSize(pizzaPrice, event) {
  pizzaPrice = pizzaPrice;
  console.log(pizzaPrice);
}
function mediumSize(pizzaPrice, event) {
  pizzaPrice = pizzaPrice + 5; 
  console.log(pizzaPrice);
}
function largeSize(pizzaPrice, event) {
  pizzaPrice = pizzaPrice + 10; 
  console.log(pizzaPrice);
}




window.addEventListener("load", function () {
  console.log(document.getElementById("small"));
document.getElementById("small").addEventListener("click", smallSize);
document.getElementById("medium").addEventListener("click", mediumSize);
document.getElementById("large").addEventListener("click", largeSize);

});
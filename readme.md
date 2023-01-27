# Pizza Parlore

## Technologies Used

* _HTML_
* _CSS_
* JavaScript

## Description

_This webpage takes user's input on pizza size and topings and calculates the price of the pizza._


## Setup/Installation Requirements

* _You need a web browser_
* _Open the following page from you browser: https://asyakap.github.io/pizza/_


## Known Bugs

* _No known bugs_


## License

_If you run into a problem or in case you have any ideas or concerns please contact me._

Copyright (c) _01/27/2023_ _Asia Kaplanyan_

## Tests

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: let pizzaOrder = new Pizza("small", ["tomatoes", "onions"]);
Expected Output: Pizza {size: "small", toppings: ["tomatoes", "onions"]}



Describe: Pizza.prototype.PizzaPrice ()

Test: "It should return an array with prices for pizza size and pizza toppings"
Code: let price = pizzaOrder.PizzaPrice();
Expected Output: [0, 0]



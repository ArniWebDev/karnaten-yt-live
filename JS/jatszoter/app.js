// Fuggvenyek

// ES5 fuggveny syntax name, param, statement

function elsoFunction(param1, param2) {
  console.log(param1 + " " + param2);
  return param1.length;
}

const masodikFuggveny = function() {
  console.log("function(expression)");
};

const arrowFuggveny = () => {
  console.log("ez egy arrow function");
};

masodikFuggveny();
arrowFuggveny();

// void

// return value

// function declaration vs. function expression

// ES6 arrow function(expression) syntax

// Ciklusok - for ciklus - for (i = 0; i < 10; i++) {}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

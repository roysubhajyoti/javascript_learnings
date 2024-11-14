debugger;
console.log("Hoisting");
console.log(userName);
var userName = "SJR";
console.log(userName);

hi();
// function definition
//function declaration
function hi() {
  console.log("hi");
}

sayHi();
//function definition
// function expression as = is there in function definition
const sayHi = function () {
  // anonymous function
  console.log("sayHi");
};

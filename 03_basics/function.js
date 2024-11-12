function add1(a, b) {
  console.log(a + b);
}
add1("hello ", " world");

function sayName() {
  console.log("SUBHAJYOTI");
}

sayName; //this is reference of the function
sayName(); //this is to execute the function

//with rest paarmeter
let add = function sum(...numbers) {
  console.log(numbers);
  const sumwithnum = numbers.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return sumwithnum;
};

console.log(add(1, 2, 3));

//with arugents

function sumwitharguments() {
  console.log(arguments);
  const argToArray = Array.from(arguments);
  console.log(argToArray);
  let arrytoSum = argToArray.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return arrytoSum;
}

console.log(sumwitharguments(1, 2, 3, 4, 5));

//function can send function as argument :

function x(callback) {
  console.log("hello");
  callback();
}
function y() {
  console.log("bye");
}

x(y);

//function by object passing :

function greeting({ city, name }) {
  /*{city,name} ---> this curly braces is for destructuring */
  console.log(`welcome Mr. ${name} from city ${city}`);
}

greeting({ name: "Subhajyoti", city: "kolkata" }); // sending object as argument

function loginUserMessage(username = "Subha") {
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("SUBHAJYOTI"));
//expected output: SUBHAJYOTI just logged in
console.log(loginUserMessage());
//expected output:Subha just logged in

//shoping cart parameter :
//method 1: with arguments :
function calcucalteCartPrice() {
  console.log(arguments);
  const reduceToarray = Array.from(arguments);
  let sum = 0;
  for (let i = 0; i < reduceToarray.length; i++) sum += reduceToarray[i];

  return sum;
}

let cartSumValue = calcucalteCartPrice(20, 50, 500, 800, 5000);
console.log(cartSumValue);
//expected op: 6370

//method 2:using rest parameter(...)

function cartAddPrice(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
}

console.log(cartAddPrice(20, 40, 80, 9000, 65));
//exxpected op: 9205

//how to pass objects into a function
const user = {
  name: "subha",
  age: 23,
};

function handleObject(anyobject) {
  console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
}
//handleObject(user);
//expected output:username is Subha and age is 23
handleObject({
  name: "SJR",
  age: 23,
});

//create an array pass it to function and then return 2nd element of that array

const array2return = [100, 200, 300, 400];
let arrayElereturn = (anyarray) => anyarray[2];

let ele = arrayElereturn(array2return);
console.log(ele);

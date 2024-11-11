console.log("arrays");

const fruitsArray = ["apple", "banana", "grapes", "Dates"];
const fruitsArray2 = ["apple", "banana", "grapes", "Dates"];

const number = [1, 2, 3, 4, 5, 6, 7, 9, 10];

// multidimensional Array
// deep copy shallow copy

const fruits = ["apple", "banana"];
const fruits2 = [];
//shallow copy myFruits = fruits;
const myFruits = [];
// old version of shallow copy method

// Object.assign(myFruits, fruits); //deep copy
// myFruits.push("guava");

//fruits2 = fruits; //error assignment to const variable;

//ES6 use sprade operator --> shallow copy in modern way

const user1 = {
  firstName: "Subhajyoti",
  LastName: "Roy",
};

const user2 = { ...user1 };
/* meaning of the " ...user1 " is that 
 copy all the properties of the user1 object and put in user2 which is a new
 object and remember it only deep copied the top level  and hence it's also an example of shallow copy */

/*So we have seen two types 
 1. Object.assign(target,source);
 2.const user = {...user2}

 both only deep copied top level other levels are shallow hence it's an example of shallow copy*/

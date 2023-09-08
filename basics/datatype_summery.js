//based on how it stores in memory it is of two type --->
/*
1. primitive: 
7 types : string,number,null,boolean,undefiend,symbol(for uniqueness),BigInt

# JavaScript is a dynamically typed language. 
Because data type will automatically assigned at the time of compilation or code execution.

*/

//symbol
const Id =Symbol("123"); //its return type will also be a symbol
const anotherId=Symbol("123")
console.log(Id == anotherId); //that's why it is used for uniqueness property


/*

2.Reference (Non-primitive)
function,Array,objects
*/
//array

const myArray=["hello","I'm","SJR"];
console.log(typeof myArray);

//function: type --> function object

let myFuction = function(){
    console.log("hello world");
}

console.log(typeof myFuction);

//object : represented by curly braces and in pairs

let myobject={
    name:"Subhajutoti",
    age:23,
    city:"kolkata"
}


console.log(myobject);
console.log(typeof myobject);


//#########################################################################################################################

// stack(primitive)   heap(Non-premitive)

//stack : no change in original name as we get only the copy of myName assign to the anotherName
let myName="Subhajytoi"
let anotherName=myName
console.log(anotherName);
anotherName="SJR"
console.log(anotherName);
console.log(myName);

//heap: in heap when assignment happens it is always by reference that is why orihi=ginal value gets change

let userOne={
    email:"Subhajyoti@google.com",
    EmpId:"278999"
}

let userTwo=userOne;
console.log(userTwo);
userTwo.email="sjr@google.com";

console.log(userOne);
console.log(i=userTwo);

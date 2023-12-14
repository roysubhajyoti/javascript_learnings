//objects

//Singleton design pattern exposes a single instance that can be used by multiple components. Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally. This is one of the basic types of design pattern.

//singleton --> using constructor

//object literals :

//create a symbol add it to the object as key and print it : 
const mySym=Symbol("hellu")
const jsUser = {
    name:"Subhajyoti",
    "full name":"Subhajyoti Roy",
    [mySym]:"hahahha", //remeber this symbol syntax
    age:23,
    location:"kolkata",
    email:"subhajyoti@google.com",
    isLoggedIn:false,
    lastLoggedinDays:["Monday","Friday"]
}
//remember actually name(key value) also stores as a string in js

//access through dot 
console.log(jsUser.email);

//acces through ["string"] : best practice and way ->
console.log(jsUser["email"]);


//acces full name through dot is not possible
// it can be only accesed by jsuser["full name"]
console.log(jsUser["full name"]);

//symbol print from the object :
//now proper way of it :-
console.log(jsUser[mySym]);


//to change values in object : 
jsUser.email="subhajyoti@microsoft.com"
// to freez any further updates on the data :-
//Object.freeze(jsUser);

//commenting freez to add greet function
jsUser.email="subhajyoti@amazon.com"
console.log(jsUser);

/*expected output : --> notice here no changes in email
    after freez method .
{ name: 'Subhajyoti',
  'full name': 'Subhajyoti Roy',
  age: 23,
  location: 'kolkata',
  email: 'subhajyoti@microsoft.com',
  isLoggedIn: false,
  lastLoggedinDays: [ 'Monday', 'Friday' ],
  [Symbol(hellu)]: 'hahahha' } .
  
  notice Symbol 
  */

  jsUser.greetings=function(){
    console.log("hello JS user");
  }
  console.log(Object.isFrozen(jsUser))
  //out: no 

  console.log(jsUser.greetings());
//op:-hello JS user 
//undefiend (dont know why ? )

  console.log(jsUser.greetings);
//op: -[Function (anonymous)]
  //expected output: jsuser.greetings is not a function because we freez it hence first comment out freez method 
  //due to which email also gets changedto amazaon : 

  // to refer same object use this

  jsUser.greetingstwo=function(){
    console.log(`hello JS user ,${this["full name"]}`);
  }

  console.log(jsUser.greetingstwo());
  //expected output:--hello JS user ,Subhajyoti Roy 


//object singleton : using constructor: 
const tinderUser=new Object() 

console.log(tinderUser);
//expected output: {}

//non singleton user :
const tinderUser1 ={}

tinderUser1.id="123abc"
tinderUser1.name="sammy"
tinderUser1.isLoggedin=false

console.log(tinderUser1);
//expected output: -{ id: '123abc', name: 'sammy', isLoggedin: false }

//nested object :

const newUser={
  email:"some@chatgpt.com",
  fullname:{
    username:{
      firstName:"Subhajyoti",
      lastName:"Roy"
    }
  },
  age:23
}


// now accessing :
console.log(newUser.fullname);
//expected output:{ username: { firstName: 'Subhajyoti', lastName: 'Roy' } }

console.log(newUser.fullname.username);
//expceted output: { firstName: 'Subhajyoti', lastName: 'Roy' }

console.log(newUser.fullname.username.firstName);
//expected output:Subhajyoti

//merger to object using spread :

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}


//without spread : objecy inside another object
const obj3={obj1,obj2}
console.log(obj3);
//expected output:{ obj1: { 1: 'a', 2: 'b' }, obj2: { 3: 'c', 4: 'd' } }

//with spread : it will retun an new object without modifing original ones
const mergeObj1Obj2={...obj1,...obj2}
console.log(mergeObj1Obj2);

//expected output: { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }


 //concat objects with object.assign({},target,source) :

const obj5=Object.assign({},obj1,obj2,obj4);

console.log(obj5);

//when values from database use this :
//when array of object :
const arrayOfObjects=[
  {
    id:1,
    age:23
  },
  {
    id:2,age:18
  }

]

//how to access ? 
console.log(arrayOfObjects[0].id);
//expected outp:-1

//when we want to get the object's keys in an array to iterate over them :
//we can use this below method


//by object.keys(object_name)
const tinderKeyArray=Object.keys(tinderUser1)
console.log(tinderKeyArray);
console.log(typeof tinderKeyArray);
//op:object 
//expected out:[ 'id', 'name', 'isLoggedin' ] now we can iterate over them



//by Object.values(object_Name)

const tindevaluesArray=Object.values(tinderUser1)
console.log(tindevaluesArray);
//expected output: [ '123abc', 'sammy', false ]

//OBject.entries(Object name):-will give [key :values]

console.log(Object.entries(tinderUser1));
//expected op:-[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedin', false ] ]


//asking if any property exist in the object or not 

//Objectname.hasOwnProperty("property name")

console.log(tinderUser1.hasOwnProperty("isLoggedin"));
//op:true ;

console.log(tinderUser1.hasOwnProperty("isLogged"));

//op:false

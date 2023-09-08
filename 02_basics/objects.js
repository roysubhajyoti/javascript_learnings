//objects

//Singleton design pattern exposes a single instance that can be used by multiple components. Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally. This is one of the basic types of design pattern.

//singleton --> using constructor

//object literals 

//create a symbol add it to the object as key and print it : 
const mySym=Symbol("hellu")
const jsUser = {
    name:"Subhajyoti",
    "full name":"Subhajyoti Roy",
    [mySym]:"hahahha", //remeber this su=ymbol syntax
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
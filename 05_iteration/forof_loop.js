//for of

//["","",""]
//[{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  console.log(val);
}

//op: 1,2,3,4,5

const greetings = "Hello World";
for (const char of greetings) {
  if (char == " ") continue;
  console.log(`char is ${char}`);
}
//output:char is H.... etc and space will not be printed
/**char is H 
char is e 
char is l 
char is l 
char is o 
char is W 
char is o 
char is r 
char is l 
char is d */

//Maps

/**The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. */

//Map holds unique values even if you enter duplicates values also it will not showup

//and maintains insertion order

const map = new Map();

//to set or insert values in map
map.set("IN", "INDIA");
map.set("USA", "United States Of America");
map.set("UK", "United Kingdom");

console.log(map);

//extedted op:
/**
  Map(3) { 'IN' => 'INDIA',
  'USA' => 'United States Of America',
  'UK' => 'United Kingdom' }
 */

// how to loop in Map

for (const key of map) {
  console.log(key);
}

/**extpected output 
[ 'IN', 'INDIA' ] 
[ 'USA', 'United States Of America' ] 
[ 'UK', 'United Kingdom' ]

*/

//if u dont want map array like then -->
//can use destrucing of the map like [key , value]

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

/**
    IN :- INDIA 
    USA :- United States Of America 
    UK :- United Kingdom
 */

//now Can we iterate objects through forof loop lets see
const myobj = {
  game1: "Cricket",
  game2: "javlin",
};

//forof loop for objects

for (const [key, val] of myobj) {
  console.log(key, " : ", val);
}
//expected output: object is not iterable by forof

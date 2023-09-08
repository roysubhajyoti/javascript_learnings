//arrays

//const myArr=[0,1,2,3,6,5,true,"subha"];

/*
1. arrays are resizeable and can contain a mix of different data types

2.JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes.

3. zero-indexed
4.JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

*/

const myarr=new Array(1,2,3,4,5);

console.log(myarr.length);

//array methods --->
myarr.push(8); //push elements at back like STL push_back
myarr.push(7);
console.log(myarr);
myarr.pop();
console.log(myarr);

//unshift() --> add element in the start of the array
myarr.unshift(10); //not optimised add need to shift all the values.. O(n)
console.log(myarr);

//shift() --->Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

myarr.shift();
console.log(myarr);

//method question--> includes(),indexof()

//includes() return type boolean
console.log(myarr.includes(5));
console.log(myarr.includes(10));

//indexof()

console.log(myarr.indexOf(0));
//if not present it will retun -1 else will return index  like below
console.log(myarr.indexOf(8));

//join() : 

const myarr2=myarr.join()


//join() -->Adds all the elements of an array into a string, separated by the specified separator string.


console.log(myarr);
console.log(myarr2);
//op:- 1,2,3,4,5,8 
console.log(typeof myarr2);
//op:string 


//slice

const narray1=myarr.slice(0,3)
console.log(narray1);
//op1:-[1,2,3]
//form 0index to (end-1)index array returns
console.log(myarr);
//op:-[1,2,3,4,5,8]

//splice :- its manupulates the original array and remove the splice portion and return a array

let spliceArray=myarr.splice(1,3)

console.log("splice : ",spliceArray);
//op-splice :  [ 2, 3, 4 ]

console.log("myarr : ",myarr);
//op:-myarr :  [ 1, 5, 8 ]



//lets play with strings array

const myGods=["krishna","Shiva","Jagganath"]

const myGods2=["Hamunaji","Ram","DurgaMaa"]

//push : -
myGods.push(myGods2);

console.log(myGods);
/*op:-[ 'krishna', 'Shiva', 'Jagganath', [ 'Hamunaji', 'Ram', 'DurgaMaa' ] ]
*/

console.log(myGods[3]);
//op:-[ 'Hamunaji', 'Ram', 'DurgaMaa' ] 

// so if we push an array it will be just another value in the main array 
 
//merger will not happen

console.log(myGods[3][2]);
//op:-DurgaMaa
//not a good syntax to acces 



// using concat : -Combines two or more arrays. This method returns a new array without modifying any existing arrays.


const marvel_heros=["Ironman","CP america","Thor"]

const dc_heros=["Batman-Nolan","Superman","flash"]

const new_heros=marvel_heros.concat(dc_heros)

console.log(marvel_heros)
//op:["Ironman","CP america","Thor"]
console.log(dc_heros);
//op:-["Batman-Nolan","Superman","flash"]
console.log(new_heros);
//op:-['Ironman','CPamerica''Batman-Nolan','Batman-Nolan''Superman','flash']


//spread : [...arryname,...arrayname2,...arrayname3]
//so same work as concat but in a more easy way 
// Spread syntax "expands" an array into its elements

const all_new_heros=[...marvel_heros,...dc_heros];

console.log(all_new_heros);

//flat : The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const new_array=[1,2,3,[4,5,6],7,[8,9,[10,12,13]]]

const derived_new_array=new_array.flat(1);
console.log(derived_new_array);
//expected output: [1,2,3,4,5,6,7,8,9,[10,12,13]]
//depth -->

const derived_new_array2=new_array.flat(2);
console.log(derived_new_array2);
//expected op:- [1,2,3,4,5,6,7,8,9,10,12,13]


//eg: on flat() method :

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
//if falt(infinity) --> means it will be flat simple array will not contain any array inside .


//isarray :- if it is a array returns true 
console.log(Array.isArray("subhajyoti"));
//expected output : false


//Array.from()-->tatic method creates a new, shallow-copied Array instance from an iterable or array-like object.

console.log(Array.from("subhajyoti"));
//expected op:-[s,u,b,h,a,j,y,o,t,i]

console.log(Array.from([1, 2, 3, 5], (x) => x+x));
// Expected output: Array [2, 4, 6, 10]




//now from variables to array 
let score1=100
let score2=200
let score3=300
let score4=400
let score5=500
//of()--->Returns a new array from a set of elements.A set of elements to include in the new array object.
console.log(Array.of(score1,score2,score3,score4,score5));



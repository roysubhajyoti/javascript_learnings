//problems in forEach is that it donot return anything

const coding = ["js","react","NEXT","cpp","java"]

const myCoding = coding.forEach((item)=> item);

console.log(myCoding);
//op:- undefiend as nothing returns

/* Filter(callback func with some conding
 if condition satisfies it will return accordingly)
 */

/* Returns the elements of an array that 
meet the condition specified in a callback 
function.*/

const myNums=[1,2,3,4,5,6,7,8,9,10];

const myNewNums=myNums.filter( (item)=> item>5 )

console.log(myNewNums);

//op:-[ 6, 7, 8, 9, 10 ]
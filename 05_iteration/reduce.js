//reduce : -
/*refer MDN docs  */
/**
 The reduce() method of Array instances 
executes a user-supplied "reducer" callback function on each element of the 
array, in order, passing in the return value from the calculation on the 
preceding element. The final result of 
running the reducer across all elements of 
the array is a single value.

The first time that the callback is run 
there is no "return value of the previous 
calculation". If supplied, an initial value 
may be used in its place. Otherwise the 
array element at index 0 is used as the 
initial value and iteration starts from the 
next element (index 1 instead of index 0).

 */




/*
Syntax :
 array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

currentvalue --> current array value 
first time in accumulator value would be of initialValue

after 1st time the result (acc+currentvalue) ---> accumulator

*/
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
let initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
//op : 10


const newA = [ 1,2,3]
initialValue=10;
const Array = newA.reduce( function(acc,currentValue ){
    console.log(`accu: ${acc} and currvalue: ${currentValue}`);
return acc+currentValue},initialValue)

console.log(Array);

/*
accu: 10 and currvalue: 1
accu: 11 and currvalue: 2
accu: 13 and currvalue: 3

16

*/

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"React course",
        price:5999 
    },
    {
        itemName:"React Native course",
        price:2999  
    },
    {
        itemName:"NEXT course",
        price:3999
    },
    {
        itemName:"nodejs course",
        price:3999 
    }


]

//now sum all the cart price

const totalCartPrice = shoppingCart.reduce((acc,currentValue) =>
acc+currentValue.price
,0)

console.log(totalCartPrice);
//ans : 19995
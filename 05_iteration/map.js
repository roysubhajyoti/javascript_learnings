//maps --> /*A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.Calls a defined callback function on each element of an array, and returns an array that contains the results*/


const myNums = [1 , 2 , 3 ,4 ,5 , 6 , 7 , 8 ]

let newNums = myNums.map( (item) => item+10)

console.log(newNums);

//op : - [ 11, 12, 13, 14, 15, 16, 17, 18 ]

//chaining 
/*remember than after 1st map now the 
values are multiplied by 10 and that 
values are passed to the 2nd map its a 
chain*/

newNums = myNums
                .map( (num) => num*10)
                .map( (num ) => num+1)
                .filter( (num) => num>50)

console.log(newNums);       
//op: [ 51, 61, 71, 81 ]         


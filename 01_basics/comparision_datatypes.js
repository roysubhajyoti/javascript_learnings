console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log("1" != 1);
console.log("1" !== 1);

console.log("02" > 1);   //js coverts 02 into number
console.log(1 + "2" +1);

//here as first two were number datatype hence they were added as usual and then last value is of string type then it is concatinated
console.log(1 +2 +"2");
console.log(3+2+"5"+"8");

//whenever js engine encounters a string value after that it just cover all the next values to string and concatinate them 
console.log("3" + 3 + 2);
console.log(3 + + 3);
console.log("3" + + 6);


//both == operator and >,<,>=,<= operator work differenty 

// for the comparision operator null => 0 (type conversion occurs) that is why it is true 
//on the other hand == does not converted hence it is not true.

console.log(null > 0);
console.log(null >= 0);
console.log(null < 0);


console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);
console.log(undefined === 0);


console.log(1 == true);
console.log(1 === true);
console.log(0 == false);
console.log(0 === false);



//alwyas try to write clean code .
// different data type can lead to unpredicted results

//always try to compare same data types
// === check for both value and the data types
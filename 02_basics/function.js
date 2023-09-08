// function add(a,b)
// {
//     console.log(a+b);
// }
// add("hello "," world")

//with rest paarmeter 
let add=function sum(...numbers)
{
    console.log(numbers);
    const sumwithnum=numbers.reduce(function(acc,curr){
        return acc+curr;
    },0
    )
    return sumwithnum;
}

console.log(add(1,2,3));

//with arugents

function sumwitharguments()
{
    console.log(arguments);
    const argToArray=Array.from(arguments);
    console.log( argToArray);
    let arrytoSum=argToArray.reduce(function(acc,curr)
    {   
        return acc+curr

    },0)
     return arrytoSum;
}


console.log(sumwitharguments(1,2,3,4,5));


//function can send function as argument :

function x(callback)
{
    console.log("hello");
    callback();

}
function y()
{
    console.log("bye");
}

x(y);


//function by object passing :

function greeting({city,name})   /*{city,name} ---> this curly braces is for destructuring */
{
    console.log(`welcome Mr. ${name} from city ${city}`);
}

greeting({name:"Subhajyoti",city:"kolkata"});  // sending object as argument

//if statement 

const isUserLoggedIn = true;
if(isUserLoggedIn){
    //scope
    console.log(`hello user`);
}
//out:hello user

const balance =1000;

if( balance > 500)
{
    console.log(`less t han`);
}

/**
    truthy value and falsy value : 
 

    //falsy values:
    false,0, -0, BigInt 0n,"",null,undefined, NaN

    //truthy value

    "0", "false"," ",[],{},funvtion(){}

*/

//hoe to check if any object is empty or not?

const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
    console.log(`empty object`);

console.log(false ==0 );
//true 

//Nullish Coalescing Operator(??) : null undefiend


let val1;
val1 = 5 ?? 10
console.log(val1);
//output : 5


val1 = null ?? 10
console.log(val1);
//output : 10


val1 = undefined ?? 10
console.log(val1);
//output : 10

val1= null ?? 10 ?? 20
console.log(val1);
//out: first value will be assigned --> 10


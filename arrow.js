//lets define a simple function 

// to add :

function add(a,b)
{
    return a+b;
}

console.log(add(10,20)); 

//now converting it to explicite return arrow function

let add1=(a,b)=>{return a+b;}
console.log(add1(10,20));

//now coverting it to implicite return arrow function

let sum=(a,b)=> a+b;

console.log(sum(20,10));

//in case of single parameter arrow function :

let singleParameter = a =>console.log(a);

singleParameter(10);

//differences between array function and normal fuction : 
/*
1. syntax difference
2.argumets objects not available in arrow func : 
eg:--------------------------------------------
    let num=()=>
    {
        console.log(arguments);
    }
    num(1,2,3,4,5);
 eg end:-----------------------------------------   
    
3.this keyword
 
 */
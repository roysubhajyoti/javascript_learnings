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
    
3.this binding
 
 */

const user = {
    username:"Subhajyoti",
    pass:56648,
    welcomeMessage:function(){
        console.log(`welcome welcome ,${this.username}`);

        console.log(this);
    }

}
user.welcomeMessage()
//expected op: welcome welcome ,Subhajyoti

user.username="Roy";
user.welcomeMessage()
//expected op:welcome welcome ,Roy

console.log(user);
/**{
  username: 'Roy',
  pass: 56648,
  welcomeMessage: [Function: welcomeMessage]
} */
console.log(this);
//{} as no global current context this refer to empty object

/**function chai()
{
    let username="subha"
    console.log(this);
}
chai()*/
//<ref *1> Object [global]

/**now comentaing out the above code  */
function chai()
{
    let username="subha"
    console.log(this.username);
}
chai()
//op: udefined ..> it will only work inside the object not in function


/**const wow=()=>{
    let username="subha"
    console.log(this.username);
}
wow();*/
//undefiend

const wow=()=>{
    let username="subha"
    console.log(this);
}
wow();
//op: {}


//return must in case of curly braces 
//return not used in case of parenthesis

const wow2=(a)=>({user: "hello world!!"})

console.log(wow2(2));

//expected output:{ user: 'hello world!!' }
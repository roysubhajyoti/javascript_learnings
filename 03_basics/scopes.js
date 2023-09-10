//global scope

if(true)
{
    //block scope
}

//can not access let,const block scope variables here . but can access vae variable hence problem 

//can access all the let,const,var in case of global scope .

//same like c/c++ 

//+++++++++++++++++++++ INTERESTING ++++++++++++

console.log(addone(6));
//expected output : 7
function addone(num){
    return num+1;
}


//
console.log(addTwo(9));
//output: Cannot access 'addTwo' before initialization  as we declaring as well as initializing
const addTwo=function(num)
{
    return num+2;
}

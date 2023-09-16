//Immidiately Invoked Function Expression (IIFE)
//to get rid of global pollution poluting the function and it exucutes immediately.

(function chai(name){
    console.log(`hello ${name}`);
})("Subhajyoti");

//expected output-->hello Subhajyoti

//syntax :
/**
    chai();
    inplace of chai --> ( write function def )( for ending parameter )

 */

//by arrow function :

( (name) => console.log(`hello ${name}`))("subha")

//expected output: hello Subha
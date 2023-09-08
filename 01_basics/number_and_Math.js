const score=400
console.log(score)

let balance = new Number(500);

console.log(balance);
console.log(balance.toFixed(2));

let anothernumber=56.7895
console.log(anothernumber.toPrecision(1));
console.log(anothernumber.toPrecision(2));
console.log(anothernumber.toPrecision(3));


//output would be[Number: 500]
//after converting it to string now it will n=have all the additional string property
let balanceToString=balance.toString();
console.log(balanceToString);
console.log(typeof balanceToString)
console.log(balanceToString.length)



let hundreds=1000000

console.log(hundreds.toLocaleString("en-IN"));


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//++++++++++++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++
console.log(Math);

console.log(Math.abs(-666));
//output: 666

console.log(Math.round(5.65));
console.log(Math.ceil(5.65));
console.log(Math.floor(5.65));

console.log(Math.min(5,6,8,1,0,-8,2));
console.log(Math.max(5,6,8,1,0,-8,2));

console.log(Math.random());
console.log(Math.random());

for(let i=0;i<5 ;i++)
{
    console.log(Math.random());
    //it generates random values between 0 to 1
}
for(let i=0;i<5 ;i++)
{
    console.log(Math.floor((Math.random()*10)+1));
    
}

//let say for dice we want values between 1 and 6 for a dice
//random number generation in a specific range
const min=1
const max=6
console.log(Math.floor(Math.random() *(max - min + 1 ))+min);


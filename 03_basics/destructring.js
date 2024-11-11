let num =[1,2,3,4,"50"];
// const [a,b,c]=num;

// console.log(a);
// console.log(b);
// console.log(c);
//op:-1,2,3

const [a,,b,,c]=num;
console.log(a,b,c);

//op: 1,3,50
//,, --> not required or unwanted values 

const [fn,ls]="Subhajyoti ROY".split(" ");
console.log(fn,ls);

//set --> only unique data 
let setData =new Set([1,2,3,2,3,1,4]);
console.log(setData);

let [x,y,z]=setData;
console.log(x,y,z);


//swap using destructring

let fristName ="sjr";
let surName ="roy";

[surName,fristName]=[fristName,surName]
console.log(fristName);
console.log(surName);

//object destructring
let userSet={};
const user={
    name:"subha",
    age:23
};

let {name:N , age:A,method="default"}=user;
 userSet.name =user.name;
 userSet.age=user.age;
console.log(N); //aliasing 
console.log(A);
 console.log(userSet);
 console.log(method);


 //complex object 
 const newUser={
    hobbies:["music","coding","travel","movies"],
    Comment:{
        id:1122
    }
 }

 const {hobbies,Comment:{id}}=newUser
 console.log(hobbies);
 console.log(id);

let [m,n,o,p]=hobbies;
console.log(m,n,o,p);


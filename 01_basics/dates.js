let myDate=new Date();

console.log(myDate);
//outpt: 2023-09-08T06:44:01.758Z

//trying to convert : 
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString()); //--> it will show time also

console.log(typeof myDate);

// to declare a specific date ..> month in js start with 0
// new Date(YYYY,MM,DD,H,M,S)
let newDate =new Date(2023,0,26);
let newDate1 =new Date(2023,0,26,12,30,15);
console.log(newDate.toDateString());
console.log(newDate1.toLocaleString());
//output : Thu Jan 26 2023.


//another way Date("yyyy-mm-days")
let newDate2=new Date("02/27/2000, 6:30:45")
console.log(newDate2.toLocaleString());


// for time stamp 

let myTimeStamp =Date.now();
console.log(myTimeStamp);
//out: 1694157002614
//to convert from date to time in ms
console.log(newDate2.getTime());
//out:951613245000
// to get it in secc
console.log(Math.floor((newDate2.getTime())/1000));
//out:951613245

let newDate3=new Date() // an object created 
console.log(newDate3.getMonth());
console.log(newDate3.getDay());
console.log(newDate3.getDate());
console.log(newDate3.getFullYear());
console.log(newDate3.getHours());
console.log(newDate3.getMinutes());



newDate3.toLocaleString('default',{
    weekday:"long"
})

console.log(newDate3.toLocaleString());
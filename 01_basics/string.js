
const name="Subhajyoti"
const city="kolkata"
//not good method: avoid it
console.log("hello "+name+" from city "+ city+".");

//string interpolation --> new sytax with backtick (use this method)
console.log(`Hello ${name} from city ${city}.`);

// to define or declare a string using new and String constructor

const myString=new String("Subhajyoti ");
//methods in string
console.log(myString);
console.log(myString.toUpperCase());
console.log(myString.charAt(5));
console.log(myString.indexOf("j"));
console.log(myString.repeat(5));

const newstring=myString.substring(0,5)  

// 4 char will be as substring from 0:S 1:u 2:b 3:h i.e start to end-1 index char
//cant give negative index number as start it will ignore it and start with 0 instead.
console.log(newstring);


//slice method

const anotherString=myString.slice(5,-1)
//negative numbering of start or end is allowed 
//for this instance (5,-1) --> we can see that from start index to (length-1) index string will be sliced .

console.log(anotherString);


//trim --> to trim the spaces in the strating and end of the string 
const myAnotherString=new String("subhajyoti Roy");
const trimString=myString.trimEnd()
const trimString2=myString.trimStart()

console.log(myAnotherString);
console.log(trimString);
console.log(trimString2);

//replace whenever there is a wrong url like below .

let url="https://Roy.com/subha%20roy"
let newurl=url.replace("%20",'_')

console.log(newurl);

//split the string with some separator and limit ;
//here eg by separator only

let stringSplit=myAnotherString.split(" ");
//here separator is " " space
console.log(stringSplit);


//repeat method ---> repeat(numberof times you want to repeat)
const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "
const welcome="welcome "
console.log(`${welcome.repeat(3)} Mr. ${myAnotherString}`);
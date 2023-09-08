{
    let age=23;
    console.log(age);
}


console.log(typeof age);
var age;

let Name="roy";

if(typeof Name === "string")
    Name.toUpperCase();

    console.log(Name);

//conversion : number to string by String(number variable name);
let connect=30;
let toString = String(connect)
console.log(toString);
console.log(typeof toString);

//conversion string to number by : Nmuber (string variable name);
let score="33"
let scoreToNum=Number(score);
console.log(scoreToNum);
console.log(typeof scoreToNum);

//now : NaN --> Not a Number

let nscore="33abc"
let ScoretoNum=Number(nscore);
console.log(typeof scoreToNum);
console.log(ScoretoNum);


//null 
let nullscore=null
let nullscoretoNum=Number(nullscore);
console.log(typeof nullscoretoNum);
console.log(nullscoretoNum);

// for undefined value would be NaN  but type will be number

//notes:
/*
    33 =>"33"
    "33" => 33
    "33abc" => NaN
    null =>0
    true=> 1 false=>0 
    undefined => NaN

*/

// to Boolean:

// 1 =>true ,0=>false
// "" => false 
// "subhajyoti "=> true


let ud=undefined;
let udToString=String(ud);
console.log(udToString);
console.log(typeof udToString);

let nud=null;
let nudToString=String(nud);
console.log(nudToString);
console.log(typeof nudToString);


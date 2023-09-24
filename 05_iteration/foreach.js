//foreach  loop (most used)

const coding= new Array("js","ruby","React","NEXT");
console.log(coding);
//op:-[ 'js', 'ruby', 'React', 'NEXT' ]

//forEach : -

/**step 1: coding.forEach( write funtion name() {} )
 but as its a callback function the remove the name .

 now its --> coding.forEach(function (item) {})

 item is representing all the values

*/
coding.forEach( function (item) {
    console.log(item);
} )

/*op:-js
ruby
React
NEXT
*/
//forEach by arrow function
coding.forEach((val) => console.log(`hello to ${val}`))
/*op:-js
ruby
React
NEXT
*/


const val=(item)=>console.log(`hello ${item}`);

val("subha")
//op: hello subha


//can we pass a function as a callback in the forEach loop

//lets see

function printMe(item)
{
    console.log(`Hamare iha aisa hi hota hai samjha-> ${item}`);
}
//in this case we have to pass the reference of the function remember
coding.forEach(printMe);
/**
Hamare iha aisa hi hota hai samjha-> js
Hamare iha aisa hi hota hai samjha-> ruby
Hamare iha aisa hi hota hai samjha-> React
Hamare iha aisa hi hota hai samjha-> NEXT
*/
coding.forEach((item,index,arr) => console.log(item , index , arr))

/** 
op:-

js 0 [ 'js', 'ruby', 'React', 'NEXT' ]
ruby 1 [ 'js', 'ruby', 'React', 'NEXT' ]
React 2 [ 'js', 'ruby', 'React', 'NEXT' ]
NEXT 3 [ 'js', 'ruby', 'React', 'NEXT' ]

*/

//[{},{},{}]

const myCode=[
    {
        languageName:"javascript",
        fileName:"js"
    },
    {
        languageName:"java",
        fileName:"java"
    },
    {
        languageName:"python",
        fileName:"py"
    }
]

myCode.forEach((key) => 
    console.log(key.languageName)
)

//op:-javascript java python

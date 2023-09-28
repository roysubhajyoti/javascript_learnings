//problems in forEach is that it donot return anything

const coding = ["js","react","NEXT","cpp","java"]

const myCoding = coding.forEach((item)=> item);

console.log(myCoding);
//op:- undefiend as nothing returns

/* Filter(callback func with some conding
 if condition satisfies it will return accordingly)
 */

/* Returns the elements of an array that 
meet the condition specified in a callback 
function.*/

const myNums=[1,2,3,4,5,6,7,8,9,10];

const myNewNums=myNums.filter(function (item) {
    return item>5
} )

console.log(myNewNums);

//op:-[ 6, 7, 8, 9, 10 ]


 /**-------forEach--------------- */
/*by forEach we need to make a new empty 
array and using if statement we can push 
onto it the values accordingly*/
const NewNums = [];

myNums.forEach( (num) => {
    if(num > 5)
        NewNums.push(num);
}  )

console.log(NewNums);

//op:- op:-[ 6, 7, 8, 9, 10 ]

/** Filter----------> */

//An array of books 

const books =[
    {
        title: 'Book one',
        genre:'fiction',
        publish:1981,
        edition:2004

    },
    {
        title: 'Book two',
        genre:'History',
        publish:2001,
        edition:2014

    },
    {
        title: 'Book three',
        genre:'Science',
        publish:2005,
        edition:2010

    },
    {
        title: 'Book four',
        genre:'History',
        publish:1981,
        edition:2004

    },
    {
        title: 'Book five',
        genre:'science',
        publish:2010,
        edition:2021

    }
]


const userBooks = books.filter( (bk) => bk.genre ==="History")

console.log(userBooks);

// output:-
/**
[
  {
    title: 'Book two',
    genre: 'History',
    publish: '1985',
    edition: 2014
  },
  {
    title: 'Book four',
    genre: 'History',
    publish: 1981,
    edition: 2004
  }
]
 */

const publishDate = books.filter( (bk) => bk.publish >= 2000 && bk.genre === 'History')

console.log(publishDate);

//output: 
/**
[
  { title: 'Book two',
    genre: 'History',
    publish: 2001,
    edition: 2014 } 
]
 */



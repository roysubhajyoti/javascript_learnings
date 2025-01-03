console.log("filter");

const months = ["january", "february", "March", "April", "december", "May"];

/* arr.filter( function(it,index,arr){
    * it is each element of the iteration array.
    * index is also there like map,forEach
    * arr --> iterating array
    * will return if truthy value returned like string or true or any condition

} )*/

// where length >5

const monthLenFive = months.filter((month) => month.length > 5);

console.log(monthLenFive);
// output jan feb dec

// filter out months where M in spell

const mMonths = months.filter((month) =>
  month.toLocaleLowerCase().includes("m")
);

console.log(mMonths);
// March , May ,december

// print only odd index

months.filter((month, index) => {
  if (index % 2 == 1) {
    console.log(month);
  }
});

//
const students = [
  {
    name: "Akash",
    age: 21,
  },
  {
    name: "Adarsh",
    age: 17,
  },
  {
    name: "Anirban",
    age: 18,
  },
];

// filter out the adult students

const adultStudent = students.filter((student) => student.age >= 18);

console.log(adultStudent);

// chaining
students
  .filter((student) => student.age >= 18)
  .map((el) => console.log(el.name));

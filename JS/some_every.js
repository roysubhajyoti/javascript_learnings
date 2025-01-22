console.log("Some && every");

const evenNumbers = [0, 2, 4, 6, 8];

// console.log(
//   evenNumbers.reduce((acc, indx) => {
//     return acc + indx;
//   }, 0)
// );

console.log(
  evenNumbers.some((num) => {
    return num > 5;
  })
);
//Some:  even if one value is true out of evenNumbers.length values then the function will return true.

// every : even if one value is false it will return it making the returned value false

console.log(
  evenNumbers.every((num, index) => {
    return num % 2 === 0;
  })
);

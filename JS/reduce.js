console.log("reduce");

const nums = [1, 2, 3, 4];

/*
nums.reduce((acc, current) => {
  console.log(current);
});

*/
// without initial value current strats from index 1 instead of index 0

// with initial value starts from index 0

/*nums.reduce((acc, current) => {
  console.log(current);
}, 0);*/

//what will be value of accumulator ??

// if no initial value then value of 0th index will be stored in accumulator and each time we need to return otherwise the returned value will be undefined

const sum = nums.reduce((acc, curr) => {
  console.log(acc);
  return acc + curr; // this return value is the value of the accumulator in the next iteration
});

console.log(sum); //10

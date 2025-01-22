console.log("arguments js");
//function def
function add() {
  let sum = 0;
  for (num of arguments) {
    sum += num;
  }
  return sum;
}
console.log(add(2, 3, 5, 6, 8, 9, 10, 25, 65, 0));

//function Expression
const add2 = function () {
  let sum = 0;
  console.log(Array.from(arguments));

  for (num of arguments) {
    sum += num;
  }
  return sum;
};

console.log(add2(1, 3, 5, 5));

// In array function arguments is not present.

// rest operator :

const add3 = (...nums) => {
  for (num of nums) {
    console.log(num);
  }
};

add3(1, 23, 4, 6, 9, 8, 6, 5, 6);

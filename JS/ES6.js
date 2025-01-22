console.log("ES6 Features");

//spread operator
const nums1 = [1, 2, 3, 4, 5];
const nums2 = [10, 2, 0, 3, 0, 10, 5, 6, 20];
// concat using spread operator
const nums3 = [...nums1, ...nums2];
console.log(nums3);

const user = {
  name: "SJR",
  age: 25,
};

const updateUser = { ...user, city: "KOLAKTA" };

console.log(updateUser);

//Rest parameters & spread operator

function add(...nums) {
  // rest params
  let sum = 0;
  for (num of nums) {
    sum += num;
  }
  return sum;
}

console.log(add(...nums3)); // spread operator used as argument not paraeter

function print(a, b, ...nums) {
  // 1st two value will be in a then b and next set of values will be in nums
  console.log(a, b, nums);
}

print(...nums3);

function print2(a, b, c, ...nums) {
  // 1st three value will be in a then b and c , next set of values will be in nums and if there is less value compare to parameters then nums will be empty array and other parameter will be undefined
  console.log(a, b, nums);
  //nums is like regular array we can use all array function
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
}

print2(...nums1);

// function print1(...nums,a,b){ //give error as Rest parameter must be last formal parameter
//   console.log(nums,a,b);

// }

// print1(...nums3);

// destructuring:
const colors = ["red", "yellow", "pink", "blue", "violet", "cyan"];

// const [, , , color4] = colors;

// syntax direct array destructure:
// const {index:variableName} = arrayName
const { 3: color4 } = colors;

const userInfo = {
  name: "SJR",
  age: "25",
  address: {
    city: "KOLKATA",
    pin: 700061,
  },
};
//destructuring where assigned to names :

const { name: userName, age: userAge } = userInfo;

// multilevel destructuring
const {
  address: { city, pin, xy },
} = userInfo; // as xy not present in the object it will be undefined

// destructuring in function :

function intro({ name, age, address: { city } }) {
  // destructuring on the fly
  console.log("hi i'm", name);
  console.log("my age is", age);
  console.log("I live in ", city);
}

intro(userInfo);

const printColors = ([a, b]) => {
  console.log(a, b);
};

printColors(colors);

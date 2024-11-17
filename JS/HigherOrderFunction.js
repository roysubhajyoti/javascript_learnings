let str = "higher order function";

console.log(
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
);

function a(b) {
  console.log(typeof b);
  // console.log(b);
  b();
}
// a({ userName: "anurag", userAge: 50 });
// a("hello");
// a([1, 23, 5]); // a is not HOF

// console.dir(a); // it will print like object
// function is a object

const sayHi = function () {
  console.log("Say hiiii");
}; // its a anonymous function

a(sayHi); // now a is A HoF

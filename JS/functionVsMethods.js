/* a function inside an object is a method and const values are properties*/

const maths = {
  pi: 3.14,
  log2: 0.301,
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  square(a) {
    return a ** 2;
  },
  cube(num) {
    return num ** 3;
  },
};

// every method is a function but not every function is method.

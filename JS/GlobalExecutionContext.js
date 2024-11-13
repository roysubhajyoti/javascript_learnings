debugger;

sayHi();
const userName = "subhajyoti";
const age = 24;
console.log(userName);

function sayHi() {
  const a = 14;
  const b = 12;
  const ans = addTwoNumbers(a, b);
  console.log(`${ans} `);
}

function addTwoNumbers(x, y) {
  return x + y;
}

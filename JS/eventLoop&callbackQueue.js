console.log("event loop and callBack Queue");

console.log("hii 1 ");
for (let i = 0; i <= 4; i++) {
  console.log(i);
}
console.log("hii 2");
// these are synchronous code
debugger;
setTimeout(function () {
  console.log("hii timeout");
}, 0);

console.log("hii end");

console.log("SetTimeout & SetTimeInterval");

// setTimeout(
//   `console.log("hello")
//     console.log("world")
//     `,
//   1000
// );

// setTimeout(`console.log('hi1')`, 1000);
// const id2 = setTimeout(`console.log('hi2')`, 2000);
// const id = setTimeout(`console.log('hi3')`, 3000);

// clearTimeout(id);

// console.log("hi3 will not run guys");

// function a() {
//   console.log(arguments);

//   console.log("hello a()");
// }

// const ideNew = setTimeout(a, 2000, 65, "ouuhuu", { name: "SJR" });
// const idOfa = setTimeout(a, 5000);
// console.log(idOfa);

// setInterval()

const id_Interval = setInterval(`console.log("hii -interval")`, 1000);
console.log(id_Interval);

setTimeout(function () {
  clearInterval(id_Interval);
  console.log("hi Iterval stopped");
}, 7000);

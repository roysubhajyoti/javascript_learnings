const months = ["jan", "feb", "March", "April"];

months.forEach((it) => {
  console.log(it);
  return it;
});

/**jan
Map.js:4 feb
Map.js:4 March
Map.js:4 April */
//Non-destructive method : Don't change the original input
const monthArr = months.map((month) => month.toUpperCase());

console.log(monthArr);

// Now if you want index :

months.map((month, index) => {
  console.log(month.toUpperCase() + ":" + index);
});

months.forEach((month, index) => {
  console.log(month + ":" + index);
});

// what if we don't give any parameter in the map call ??
// it will run the arr.length times

//eg:
let count = 0;
months.map(() => count++);
console.log(count); // 4

// 3rd parameter is the array it self in which we do the looping
// months.map(function (month, index, array) {
//   console.log(array);
// });

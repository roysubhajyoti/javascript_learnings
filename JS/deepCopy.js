console.log("deep Copy");

const user1 = {
  firstName: "Subhajyoti",
  lastName: "Roy",
  address: {
    city: "kolkata",
    pin: "700161",
    state: "West Bengal",
    properAddress: {
      houseNo: 5656,
      Road: "mayor Road",
      landMark: "eden garden",
    },
  },
  age: 24,
  isGraduate: true,
};

const user2 = { ...user1 };

// 1st method of deep copy
const a = { a: 1, b: 2 };
const b = JSON.stringify(a); // '{"a":1,"b":2}'
// b can be back to the obj from string
// then its a deep copy
// JSON.parse(b);

const user3 = JSON.parse(JSON.stringify(user1));

// second way through recursion

function deepCopy(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    copy[keys[i]] = deepCopy(obj[keys[i]]);
  }

  return copy;
}

const user4 = deepCopy(user1);

function hello() {
  let str = "Subha";
  console.log(str);
}
hello();

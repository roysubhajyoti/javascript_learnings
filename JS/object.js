let myName = "SJR"; //@22305

const username1 = "";
const username2 = "";

const user2 = {
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

//update
// user2.age = 26;
// user2["is_student"] = true;

// Object.seal(name_of_Object) --> it will not add or delete any element from the object named in the parenthesis

//Object.seal(user2);

// now if we run
//delete user2.address;
// will give false statement and even for add an element direct at the base layer .
// but can update the existing values

// user2.mobile = "9464646464"
// will not add mobile no .
// but user2.address.mobile = "6546546454"
// will add to the object

// now if we want the user should not add delete and update anything then
//use Object.Freeze(object name);

Object.freeze(user2);

// still we can add & update to the nested Object inside main Object

// if key is present or not in The Object

// key in objectName
// if ok the true
// else false

user2.address.cityDirection = "south";

Object.freeze(user2.address);
user2.address.cityWay = "RAJPATH";

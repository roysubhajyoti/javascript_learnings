console.log("Global VS Local scope");
var AuserName = "SJR";
let age = 24;
var a = 50;

function add() {
  var AuserName = "Subha";
  const x = 5;
  const y = 6;
  console.log(x + y);
  console.log(this.a);
  console.log(AuserName);
  console.log("window :" + window.AuserName);
}

add();

// function subtract() {
//   const x = "xuz";
//   const y = 6;
//   console.log(x - y);
//   console.log(a);
//   var a = 33;
//   var z = "hello baoye";

//   {
//     let hello = "hello";
//     console.log(hello);
//     console.log({ userName, age });
//     var yeos = "1225";
//   }
//   //   console.log("inside sub :" + yeos);

//   function child() {
//     const childName = "golu jr.";
//     console.log(childName);
//     // access to all parents variable
//     console.log(userName); //global scope
//     console.log(x + y); // parent local scope

//     function grandChild() {
//       const grandChild = "golu jr. jr.";
//       console.log(grandChild);
//       console.log("grand parent subtract x:" + x);
//       var zz = "here in grand ";
//       console.log(zz);
//     }
//     grandChild();
//     // console.log("child  -> :" + zz); //error
//   }

//   console.log(userName);
//   child();
//   //   console.log("subtract :" + zz); //error
// }

// subtract();

// //console.log(z); // output : reference error
// console.log("end");

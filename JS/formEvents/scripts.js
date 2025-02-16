const userNameInput = document.querySelector("#username");
const para = document.querySelector("p");
const form = document.querySelector("form");

// userNameInput.addEventListener("click", () => {
//   console.log(`input clicked`);
// });
// userNameInput.addEventListener("dblclick", () => {
//   console.log(`input double clicked`);
// });
let userInput;

// userNameInput.addEventListener("input", (event) => {
//   console.log(event.target.value);
//   userInput = event.target.value;
//   para.innerText = event.target.value;
// });

/*userNameInput.addEventListener("change", (e) => {
  para.innerText = `change event fires when we change the value of input and come outside of the input box and click : ${e.target.value}`;
});
*/

//similarly we have focus event , blur event

userNameInput.addEventListener("focus", (e) => console.log(e.type));
userNameInput.addEventListener("blur", (e) => console.log(e.type));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const myFormData = new FormData(form);
  console.log(myFormData);

  console.log(myFormData.entries());

  for (const p of myFormData.entries()) {
    console.log(p);
  }
}); // no click of button in the form site will directed to the action link in the form as specified in html

form.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target); // it says that from where the event has been fired
  console.log(e.currentTarget); // it says on which element the event is on
});

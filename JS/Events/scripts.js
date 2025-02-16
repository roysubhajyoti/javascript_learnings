const card = document.querySelector(".card");
const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
function sayHi() {
  console.log(`hhh`);
}
function sayHi2() {
  console.log(`hhhii22`);
}
// h1.onclick = sayHi; // by this we can not add 2nd event listener on same element
// the last one will replace others
//h1.onclick = sayHi2; // will be printed sayHi we not

h1.addEventListener("click", sayHi);
h1.addEventListener("click", () => console.log("second hiii"));
// both log will be printed when clicked

let i = 1;
card.addEventListener("click", function () {
  const newCard = document.createElement("div");
  newCard.classList.add("addCard");
  newCard.innerText = i++;
  container.append(newCard);
});

// const resetCrad = card.cloneNode();
// resetCrad.innerText = `reset Counter`;
// container.append(resetCrad);

// resetCrad.addEventListener("click", () => {
//   card.innerText = 0;
//   i = 0;
// });

container.addEventListener("click", (e) => {
  if (e.target != container) {
    e.target.remove();
  }
});

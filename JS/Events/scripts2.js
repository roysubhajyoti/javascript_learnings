const card = document.querySelector(".card");
const h1 = document.querySelector("h1");
const container = document.querySelector(".container");

let i = 0;

// card.addEventListener("mousedown", function (e) {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("addCard");
//   newCard.innerText = i++;
//   container.append(newCard);
// });

//click --> mousedown  +  mouseup

// card.addEventListener("mouseup", function (e) {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("addCard");
//   newCard.innerText = i++;
//   container.append(newCard);
// });

card.addEventListener("mouseenter", function (e) {
  console.log(e);
  const newCard = document.createElement("div");
  newCard.classList.add("addCard");
  newCard.innerText = i++;
  container.append(newCard);
});

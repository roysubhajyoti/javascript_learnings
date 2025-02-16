let container = document.querySelector(".container");
// const card = document.querySelector(".card");

// for (let i = 2; i <= 100; i++) {
//   let newCard = card.cloneNode();
//   newCard.innerText = `${i}`;
//   container.appendChild(newCard);
// }

// const img = document.querySelector("img");

// for (let i = 2; i <= 104; i++) {
//   let newImg = img.cloneNode(true);
//   newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;
//   container.appendChild(newImg);
// }

//lets say we don't have any image :

const image = document.createElement("img");
image.src =
  "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/1.png";

container.append(image);

for (let i = 2; i <= 49; i++) {
  let newImage = document.createElement("img");
  newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;
  container.append(newImage);
}

// to remove an element from dom : select the element and call .remove() function

// but it doesn't free from the memory
// so we need to explicitely free from memory
//for that the variable should be let and after .remove() . assign that variable  = null . then its free from memory

// //eg:

// container.remove();
// // now assign to null to free from memory

// container = null;

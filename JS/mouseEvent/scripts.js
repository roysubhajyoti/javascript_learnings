const h1 = document.querySelector("h1");

const h2 = document.querySelectorAll("h2");
h2[2].addEventListener("keypress", (e) => {
  console.log(e.key);
});

window.addEventListener("keypress", (e) => {
  console.log(e);
});

window.addEventListener("keyup", (e) => {
  console.log(e);
});
window.addEventListener("keydown", (e) => {
  console.log(e);
});

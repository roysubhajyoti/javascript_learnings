const container = document.querySelector("#container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function bgColor() {
  const randColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return randColor;
}

container.addEventListener("click", (e) => {
  e.target.style.backgroundColor = bgColor();
  console.log(e.target);
  e.currentTarget.style.backgroundColor = "white";
});
/*target refers to the element on which the event was initially fired*/
/* while currentTarget refers to the element to which this event handler has been attached*/

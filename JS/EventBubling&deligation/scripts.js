const gparent = document.querySelector(".gbox");
const parent = document.querySelector(".pbox");
const child = document.querySelector(".cbox");
const showButton = document.querySelector("button");
const hideVideo = document.querySelector(".hideVideo");
const video = document.querySelector("video");

gparent.addEventListener(
  "click",
  (e) => {
    console.log("gparent clicked");
    e.stopPropagation(); // stop event bubling as well as event capturing
  }
  //   { capture: true } // for event capturing we need to we need to mention it as true else by default it is false
);
parent.addEventListener("click", (e) => {
  console.log("parent clicked");
  e.stopPropagation();
});
child.addEventListener("click", (e) => {
  console.log("child clicked");
  e.stopPropagation();
});

showButton.addEventListener("click", () => {
  if (hideVideo.classList[0] == "hideVideo") {
    hideVideo.classList.remove("hideVideo");
    hideVideo.classList.add("showVideo");
    showButton.innerText = "hide Video";
  } else if (hideVideo.classList[0] == "showVideo") {
    hideVideo.classList.remove("showVideo");
    hideVideo.classList.add("hideVideo");
    showButton.innerText = "show Video";
  }
});

video.addEventListener("click", (e) => {
  video.play();
});

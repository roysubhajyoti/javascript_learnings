const aTags = document.querySelectorAll("a");

aTags[0].textContent = "Radhe Radhe ";

aTags.forEach((item) => {
  //   item.style.color = "teal";
  //   item.style.textDecorationLine = "none";
  //   item.style.fontWeight = 700;
  //   item.style.fontFamily = "cursive";
  //   item.style.fontSize = "20px";
  //instead do this : its like css inside cssText
  //   item.style.cssText = `
  //   color:teal;
  //   text-decoration-line:none;
  //   font-weight:700;
  //   font-family:cursive;
  //   font-size:20px;
  //   `;

  //better way is to create a class in css and put all the style there
  /* .jsClass { color:teal;
  text-decoration-line:none;
  font-weight:700;
  font-family:cursive;
  font-size:20px;}
*/
  //now can do :
  //item.className = 'jsClass'
  //or:
  //item.setAttribute('class',"jsClass");

  // now the above two method will override any existing css

  // so the ultimate way is :

  item.classList.add("jsClass");
  item.classList.add("wavy");
  item.classList.add("view");

  //to remove :
  //   item.classList.remove("wavy");
});

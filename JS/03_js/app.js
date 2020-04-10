// Elem           esemeny?           megfelelo kod!
// button          click             modositunk egy szint

const a = ["#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50"];

const wrapper = document.querySelector(".wrapper");
const h1 = document.querySelector("h1");

a.forEach((color) => {
  const element = document.createElement("div");
  element.style.backgroundColor = color;
  element.addEventListener("click", function (e) {
    console.log(e);
    document.body.style.backgroundColor = color;
  });
  element.addEventListener("mouseover", function () {
    h1.style.color = color;
  });
  wrapper.appendChild(element);
});

const input = document.querySelector("#my-input");
input.addEventListener("keydown", function (e) {
  // console.log(e);
  if (e.keyCode === 13) {
    console.log(input.value);
    h1.innerText = input.value;
  }
});

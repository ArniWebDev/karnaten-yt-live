const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

btn.addEventListener("mouseover", function () {
  console.log("🐰🐰🐰🐰🐰🐰");
  const height = Math.floor(
    Math.abs(Math.random() - 0.15) * window.innerHeight
  );
  const width = Math.floor(Math.abs(Math.random() - 0.15) * window.innerWidth);
  btn.style.left = width + "px";
  btn.style.top = height + "px";
});

btn.addEventListener("click", function () {
  h1.classList.toggle("hide");
  console.log("💦💦💦💦💦💦💦💦💦");
});

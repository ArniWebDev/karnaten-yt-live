import { difficultyList } from "./data.js";

let inputValue = 0;
let tryNumber = 10;

const checkBtn = document.querySelector(".input-container button");
const numberInput = document.querySelector(".input-container input");
const navigation = document.querySelector(".nav");
const description = document.querySelector(".general-container p");
const startBtn = document.querySelector(".start-btn");

const getRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(100));
};

difficultyList.forEach((elem) => {
  const btn = document.createElement("button");
  btn.innerText = elem.name;
  btn.classList.add(elem.class);
  btn.addEventListener("click", function () {
    description.innerText = elem.description;
    tryNumber = elem.try;
    startBtn.classList.add("activate-click");
  });
  navigation.appendChild(btn);
});

startBtn.addEventListener("click", function () {
  const myNumber = getRandomInt();
  checkBtn.classList.add("activate-click");
  startBtn.classList.add("hide");
  console.log(myNumber);
  for (let i = 0; i < tryNumber; i++) {
    if (inputValue === 15) {
      break;
    }
  }
});

checkBtn.addEventListener("click", function () {
  console.log("check click");
  inputValue = numberInput.value ? parseInt(numberInput.value) : 0;
  console.log(inputValue);
});

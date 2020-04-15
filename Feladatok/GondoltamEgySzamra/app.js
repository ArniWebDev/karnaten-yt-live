const difficultyList = [
  {
    difName: "Easy",
    difDescription: "Easy Leiras",
    try: 10,
  },
  {
    difName: "Medium",
    difDescription: "Medium Leiras",
    try: 5,
  },
  {
    difName: "Hard",
    difDescription: "Hard Leiras",
    try: 1,
  },
];

const easyBtn = document.querySelector(".general-container button");
const mediumBtn = document.querySelector(".general-container button");
const hardBtn = document.querySelector(".general-container button");

const checkBtn = document.querySelector(".general-container button");

easyBtn.addEventListener("click", function () {
  console.log("Easy BTN");
});

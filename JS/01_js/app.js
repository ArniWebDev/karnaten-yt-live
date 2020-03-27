let p1 =
  "Elso bekezdes: Lorem ipsum, dolor sit amet consectetur adipisicingelit. Fugiat commodi autem impedit, suscipit eaque ex quos,doloremque perferendis quam harum cumque esse consecteturcupiditate, pariatur fuga architecto aspernatur hic repudiandae?";

let p2 =
  "Masodik bekezdes: Lorem ipsum, dolor sit amet consectetur adipisicingelit. Fugiat commodi autem impedit, suscipit eaque ex quos,doloremque perferendis quam harum cumque esse consecteturcupiditate, pariatur fuga architecto aspernatur hic repudiandae?";

let p3 =
  "Harmadik bekezdes: Lorem ipsum, dolor sit amet consectetur adipisicingelit. Fugiat commodi autem impedit, suscipit eaque ex quos,doloremque perferendis quam harum cumque esse consecteturcupiditate, pariatur fuga architecto aspernatur hic repudiandae?";

const content = document.querySelector(".content-container");

let main = document.createElement("div");
p1t = document.createElement("p");
p1t.innerText = p1;
p2t = document.createElement("p");
p2t.innerText = p2;
p3t = document.createElement("p");
p3t.innerText = p3;
main.appendChild(p1t);
main.appendChild(p2t);
main.appendChild(p3t);

main.classList.add("main");

content.appendChild(main);

let asid = document.createElement("div");
p1a = document.createElement("p");
p1a.innerText = "Bekezdesek cime:";
asid.appendChild(p1a);

let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
li1.innerText = "Elso";
li2.innerText = "Masodik";
li3.innerText = "Harmadik";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

asid.append(ul);
asid.classList.add("aside");

content.appendChild(asid);

let clear = document.createElement("div");
clear.classList.add("clear-fix");

content.appendChild(clear);

let wrapper = document.querySelector(".wrapper");
console.log(wrapper);

let paragrafusSzoveg =
  "By Arni: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem quibusdam delectus laboriosam odit veritatis recusandae aspernatur reprehenderit rerum. Ipsum commodi asperiores impedit voluptate perspiciatis omnis accusantium quis quas accusamus.";

let p = document.createElement("p");

p.innerText = paragrafusSzoveg;

console.log(p);

wrapper.appendChild(p);

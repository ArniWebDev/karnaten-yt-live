// https://en.wikipedia.org/wiki/Fizz_buzz

const wrapper = document.querySelector(".wrapper");

const addToDom = (elementType, elementText) => {
  const element = document.createElement(elementType);
  element.innerText = elementText;
  wrapper.appendChild(element);
};

// for (let i = 1; i <= 20; i++) {
//   let szoveg = "";

//   if (i % 3 === 0) {
//     szoveg = szoveg + "Fizz ";
//   }
//   if (i % 5 === 0) {
//     szoveg = szoveg + "Buzz";
//   }
//   if (szoveg) {
//     addToDom("p", szoveg);
//   } else {
//     addToDom("p", i);
//   }
// }

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    addToDom("p", "Fizz Buzz");
  } else if (i % 3 === 0) {
    addToDom("p", "Fizz");
  } else if (i % 5 === 0) {
    addToDom("p", "Buzz");
  } else {
    addToDom("p", i);
  }
}

const h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.fontSize = "48px";
const paragraphs = document.querySelectorAll("p");
paragraphs[0].style.backgroundColor = "#ddd";
paragraphs[1].classList.add("highlight");
paragraphs[2].style.backgroundColor = "#ddd";

const container = document.querySelector(".container");

container.style.border = "3px solid black";
container.style.padding = "15px";
const button = container.querySelector("button");

button.addEventListener("click", function () {
  alert("Button clicked!");
});
const newH2 = document.createElement("h2");
newH2.textContent = "Inserted H2 Title";

document.body.appendChild(newH2);
newH2.style.color = "black";
const ul = document.querySelector("ul");

const li = document.createElement("li");
li.textContent = "New List Item";

ul.appendChild(li);
const li2 = document.createElement("li");
li2.textContent = "Extra Item 1";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Extra Item 2";
ul.appendChild(li3);

const img = document.createElement("img");
img.src = "https://via.placeholder.com/150";

document.body.appendChild(img);
const input = document.querySelector("input");
const displayBtn = document.querySelector("#displayBtn");

displayBtn.addEventListener("click", function () {
  alert(input.value);
});
const newP = document.createElement("p");
newP.textContent = "This is a new paragraph created by JS!";

document.body.appendChild(newP);
const img2 = document.createElement("img");
img2.src = "https://via.placeholder.com/80";

document.body.appendChild(img2);
const card = document.createElement("div");
card.textContent = "This is a new card div.";

card.style.border = "1px solid #ccc";
card.style.padding = "10px";
card.style.marginTop = "10px";

document.body.appendChild(card);
const footer = document.createElement("p");
footer.textContent = "Created by: HALA AHMAD";

document.body.appendChild(footer);
const changeBtn = document.getElementById("changeTextBtn");
const text = document.getElementById("textToChange");

changeBtn.addEventListener("click", function () {
  text.textContent = "Text Changed!";
});
text.style.display = "none";
text.style.display = "block";
text.addEventListener("mouseover", function () {
  text.style.color = "red";
});

text.addEventListener("mouseout", function () {
  text.style.color = "black";
});
text.addEventListener("click", function () {
  text.classList.toggle("highlight");
});
text.remove();
const newButton = document.createElement("button");
newButton.textContent = "New Button";

document.body.appendChild(newButton);
newButton.addEventListener("click", function () {
  alert("New button clicked!");
});
const parentDiv = newButton.parentElement;
parentDiv.style.backgroundColor = "#e0e0e0";
const bodyChildren = document.body.children;
console.log(bodyChildren);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);
const firstP = document.querySelector("p");

console.log(firstP.nextElementSibling);
console.log(firstP.previousElementSibling);
const cloneP = firstP.cloneNode(true);
document.body.appendChild(cloneP);
const img = document.querySelector("img");
img.setAttribute("alt", "Placeholder Image");
console.log(img.getAttribute("src"));
img.removeAttribute("alt");
const note = document.createElement("p");
note.textContent = "Inserted before element";

document.body.insertBefore(note, img);
const newEl = document.createElement("p");
newEl.textContent = "Replaced Element";

document.body.replaceChild(newEl, img);
const dataP = document.getElementById("dataP");
console.log(dataP.dataset.info);
dataP.innerHTML = "<strong>Bold Text</strong>";
console.log(dataP.classList.contains("highlight"));
dataP.classList.remove("highlight");
/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const greyPack = document.querySelector("#pack01 img");
const greenPack = document.querySelector("#pack02 img");
const greyPackButton = document.querySelector("#pack01 .lid-toggle");
const greenPackButton = document.querySelector("#pack02 .lid-toggle");
const greyPackStatus = document.querySelector("#pack01 .backpack__lid span");
const greenPackStatus = document.querySelector("#pack02 .backpack__lid span");

greyPack.setAttribute("alt", "a grey backpack");
greenPack.setAttribute("alt", "a green backpack");

greyPack.dataset.color = "grey";
greenPack.dataset.color = "green";
document
  .querySelectorAll("img")
  .forEach((img) => img.removeAttribute("loading"));

greenPackButton.addEventListener("click", () => {
  greenPackButton.classList.toggle("opened");
  if (greenPackButton.classList.contains("opened")) {
    greenPackButton.textContent = "Close lid";
    greenPackStatus.textContent = "opened";
  } else {
    greenPackButton.textContent = "Open lid";
    greenPackStatus.textContent = "closed";
  }
});

greyPackButton.addEventListener("click", () => {
  greyPackButton.classList.toggle("opened");
  if (greyPackButton.classList.contains("opened")) {
    greyPackButton.textContent = "Close lid";
    greyPackStatus.textContent = "opened";
  } else {
    greyPackButton.textContent = "Open lid";
    greyPackStatus.textContent = "closed";
  }
});

/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

const main = document.querySelector("main");

document.querySelector("header").style.backgroundColor = "#1b6f7e";
document.querySelector("header").style.color = "white";
main.style.backgroundColor = "#d1f8ff";
main.querySelectorAll(".backpack__name").forEach((name) => {
  name.style.color = "#1b6f7e";
  name.style.borderBottomColor = "#1b6f7e";
});

document.querySelector("footer").style.backgroundColor = "#062e35";

// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const ix = document.getElementsByClassName("ix");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (ix) {
  ix.addEventListener("click"),
    () => {
      nav.classList.remove("active");
    };
}

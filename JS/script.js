console.log("Witam wszystkich!");

let button = document.querySelector(".button");
let site = document.querySelector(".site");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
  site.classList.toggle("blueTheme");
  if (site.classList.contains("blueTheme")) {
    themeName.innerText = "jasny";
  } else {
    themeName.innerText = "błękitny";
  }
});
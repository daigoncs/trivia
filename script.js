import home from "./src/pages/home/index.js";

const main = document.querySelector("#root")

window.addEventListener("load", () => {
  main.appendChild(home());
})
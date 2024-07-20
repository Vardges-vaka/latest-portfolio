import {
  setThemeFromStorage,
  modeSwitchPortfolio,
} from "./localStorage.js";

document.addEventListener("DOMContentLoaded", setThemeFromStorage);

let mode = document.getElementById("lightMode");
mode.addEventListener("click", modeSwitchPortfolio);

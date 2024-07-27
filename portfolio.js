import { setThemeFromStorage, modeSwitchGeneric } from "./localStorage.js";
import { createFooter, createHeader } from "./mainLayout.js";

document.addEventListener("DOMContentLoaded", () => {
  let headerContainer = document.getElementById("header-container");
  headerContainer.appendChild(createHeader("portfolio"));
  let footerContainer = document.getElementById("footer-container");
  footerContainer.appendChild(createFooter());
  setThemeFromStorage();
  let mode = document.getElementById("lightMode");
  if (mode) {
    mode.addEventListener("click", modeSwitchGeneric);
  }
});


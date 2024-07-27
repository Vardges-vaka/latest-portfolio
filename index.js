import {
  setThemeFromStorage,
  setThemeFromStorageHome,
  modeSwitchHome,
} from "./localStorage.js";

import { createFooter, createHeader } from "./mainLayout.js";

document.addEventListener("DOMContentLoaded", () => {
  let headerContainer = document.getElementById("header-container");
  headerContainer.appendChild(createHeader("home"));
  let footerContainer = document.getElementById("footer-container");
  footerContainer.appendChild(createFooter());
  setThemeFromStorage();
  setThemeFromStorageHome();
  let mode = document.getElementById("lightMode");
  if (mode) {
    mode.addEventListener("click", modeSwitchHome);
  }
});

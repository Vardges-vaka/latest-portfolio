import {
  setThemeFromStorage,
  setThemeFromStorageAbout,
  modeSwitchAbout,
} from "./localStorage.js";

import { createFooter, createHeader } from "./mainLayout.js";

document.addEventListener("DOMContentLoaded", () => {
  let headerContainer = document.getElementById("header-container");
  headerContainer.appendChild(createHeader("about"));
  let footerContainer = document.getElementById("footer-container");
  footerContainer.appendChild(createFooter());
  setThemeFromStorage();
  setThemeFromStorageAbout();
  let mode = document.getElementById("lightMode");
  if (mode) {
    mode.addEventListener("click", modeSwitchAbout);
  }
});

import {
  setThemeFromStorage,
  setThemeFromStorageHome,
  modeSwitchHome,
} from "./localStorage.js";

import { createFooter } from "./footer.js";

document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer-container");
  footerContainer.appendChild(createFooter());

  setThemeFromStorage();
  setThemeFromStorageHome();
});
let mode = document.getElementById("lightMode");
mode.addEventListener("click", modeSwitchHome);

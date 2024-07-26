import { setThemeFromStorage, modeSwitchPortfolio } from "./localStorage.js";
import { createFooter } from "./footer.js";

document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer-container");
  footerContainer.appendChild(createFooter());

  setThemeFromStorage();
});
let mode = document.getElementById("lightMode");
mode.addEventListener("click", modeSwitchPortfolio);

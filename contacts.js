import { setThemeFromStorage, modeSwitchGeneric } from "./localStorage.js";
import { createFooter, createHeader } from "./mainLayout.js";

let messageBtn = document.getElementById("sendMsgBtn");
messageBtn.addEventListener("click", function () {
  alert("Message Sent!");
});

document.addEventListener("DOMContentLoaded", () => {
  let headerContainer = document.getElementById("header-container");
  headerContainer.appendChild(createHeader("contact"));
  let footerContainer = document.getElementById("footer-container");
  footerContainer.appendChild(createFooter());
  setThemeFromStorage();
  let modea = document.getElementById("lightMode");
  if (modea) {
    modea.addEventListener("click", modeSwitchGeneric);
  }
});

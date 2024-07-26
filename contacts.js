import { setThemeFromStorage, modeSwitchContacts } from "./localStorage.js";
import { createFooter } from "./footer.js";

let messageBtn = document.getElementById("sendMsgBtn");
messageBtn.addEventListener("click", function () {
  alert("Message Sent!");
});

document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer-container");
  footerContainer.appendChild(createFooter());
  setThemeFromStorage();
});
let modea = document.getElementById("lightMode");
modea.addEventListener("click", modeSwitchContacts);

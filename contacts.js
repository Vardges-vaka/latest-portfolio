import { setThemeFromStorage, modeSwitchContacts } from "./localStorage.js";
let messageBtn = document.getElementById("sendMsgBtn");

document.addEventListener("DOMContentLoaded", setThemeFromStorage);
messageBtn.addEventListener("click", function () {
  alert("Message Sent!");
});
let modea = document.getElementById("lightMode");
modea.addEventListener("click", modeSwitchContacts);

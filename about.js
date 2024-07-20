import { setThemeFromStorage, modeSwitchAbout } from "./localStorage.js";

document.addEventListener("DOMContentLoaded", setThemeFromStorage);

let mode = document.getElementById("lightMode");
mode.addEventListener("click", modeSwitchAbout);

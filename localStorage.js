import {
  setLightMode,
  setDarkMode,
  setDarkModeHomePage,
  setLightModeHomePage,
  setDarkModeAboutPage,
  setLightModeAboutPage,
} from "./modeFunctions.js";

//______________________________________________👇👇👇_Seving the local Storages For Pages_👇
export function setThemeFromStorage() {
  let storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    document.body.dataset.mode = storedTheme;
    storedTheme === "dark" ? setDarkMode() : setLightMode();
  }
}
export function setThemeFromStorageHome() {
  let storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    document.body.dataset.mode = storedTheme;
    storedTheme === "dark" ? setDarkModeHomePage() : setLightModeHomePage();
  }
}
export function setThemeFromStorageAbout() {
  let storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    document.body.dataset.mode = storedTheme;
    storedTheme === "dark" ? setDarkModeAboutPage() : setLightModeAboutPage();
  }
}
//______________________________________________👇👇👇_Mode Switch Functions For Pages_👇_Start.

export function modeSwitchHome() {
  let body = document.body;
  if (body.dataset.mode === "light") {
    body.dataset.mode = "dark";
    setDarkModeHomePage();
    setDarkMode();
    localStorage.setItem("theme", "dark");
  } else {
    body.dataset.mode = "light";
    setLightMode();
    setLightModeHomePage();
    localStorage.setItem("theme", "light");
  }
}
export function modeSwitchAbout() {
  let body = document.body;
  if (body.dataset.mode === "light") {
    body.dataset.mode = "dark";
    setDarkMode();
    setDarkModeAboutPage();
    localStorage.setItem("theme", "dark");
  } else {
    body.dataset.mode = "light";
    setLightMode();
    setLightModeAboutPage();
    localStorage.setItem("theme", "light");
  }
}
export function modeSwitchGeneric() {
  let body = document.body;
  if (body.dataset.mode === "light") {
    body.dataset.mode = "dark";
    setDarkMode();
    localStorage.setItem("theme", "dark");
  } else {
    body.dataset.mode = "light";
    setLightMode();
    localStorage.setItem("theme", "light");
  }
}

let modeLabel = document.getElementById("modeTitle");
let avatar = document.getElementById("crtAvatar");
let instIcon = document.getElementById("instagramLogo");
let linkedInIcon = document.getElementById("linkedInLogo");
let tikTokIcon = document.getElementById("tikTokLogo");
let whatsappIcon = document.getElementById("whatsappLogo");
let logoIcon = document.getElementById("logoIcon");
let avatarHomePage = document.getElementById("avatarHomePage");

function setDarkModeFooter() {
  const rootStyles = getComputedStyle(document.documentElement);
  document.documentElement.style.setProperty(
    "--footerIconsBackgroundHoverCover",
    rootStyles.getPropertyValue("--footerIconsBackgroundHoverCover-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--footerIconsBorderColor",
    rootStyles.getPropertyValue("--footerIconsBorderColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--footerTextBackgroundHoverColor",
    rootStyles.getPropertyValue("--footerTextbackgroundHoverColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--footerTextBorderHovercolor",
    rootStyles.getPropertyValue("--footerTextBorderHovercolor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--footertitleColor",
    rootStyles.getPropertyValue("--footertitleColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--footertitleHoverColor",
    rootStyles.getPropertyValue("--footertitleHoverColor-dark").trim()
  );
  modeLabel.textContent = "Light Mode";

  instIcon.src = "./icons/instagram-icon-cool-mode.svg";
  linkedInIcon.src = "./icons/linkedin-icon-cool-mode.svg";
  tikTokIcon.src = "./icons/tiktok-icon-cool-mode.svg";
  whatsappIcon.src = "./icons/whatsapp-icon-cool-mode.svg";
  logoIcon.src = "./icons/the-logo-cool-mode.svg";
}

function setLightModeFooter() {
  const rootStyles = getComputedStyle(document.documentElement);
  document.documentElement.style.setProperty(
    "--footerIconsBackgroundHoverCover",
    rootStyles
      .getPropertyValue("--footerIconsBackgroundHoverCover-light")
      .trim()
  );
  document.documentElement.style.setProperty(
    "--footerIconsBorderColor",
    rootStyles.getPropertyValue("--footerIconsBorderColor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--footerTextBackgroundHoverColor",
    rootStyles.getPropertyValue("--footerTextbackgroundHoverColor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--footerTextBorderHovercolor",
    rootStyles.getPropertyValue("--footerTextBorderHovercolor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--footertitleColor",
    rootStyles.getPropertyValue("--footertitleColor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--footertitleHoverColor",
    rootStyles.getPropertyValue("--footertitleHoverColor-light").trim()
  );
  modeLabel.textContent = "Cool Mode";

  instIcon.src = "./icons/instagram-icon-light-mode.svg";
  linkedInIcon.src = "./icons/linkedin-icon-light-mode.svg";
  tikTokIcon.src = "./icons/tiktok-icon-light-mode.svg";
  whatsappIcon.src = "./icons/whatsapp-icon-light-mode.svg";
  logoIcon.src = "./icons/the-logo-light-mode.svg";
}
//👇👇👇_Mode Switch Functions For Pages_👇_Start.
export function setDarkModeHomePage() {
  const rootStyles = getComputedStyle(document.documentElement);
  avatar.src = "./images/cartoonize-avatar-cool-mode.png";
  document.documentElement.style.setProperty(
    "--contentBackgroundImage",
    rootStyles.getPropertyValue("--contentBackgroundImage-dark").trim()
  );
}
export function setLightModeHomePage() {
  const rootStyles = getComputedStyle(document.documentElement);
  document.documentElement.style.setProperty(
    "--contentBackgroundImage",
    rootStyles.getPropertyValue("--contentBackgroundImage-light").trim()
  );
  avatar.src = "./images/cartoonize-avatar-light-mode.png";
}
export function setDarkModeAboutPage() {
  const rootStyles = getComputedStyle(document.documentElement);
  avatarHomePage.src = "./images/my-real-face-cool-mode.gif";
}
export function setLightModeAboutPage() {
  const rootStyles = getComputedStyle(document.documentElement);
  avatarHomePage.src = "./images/my-Face-light-mode.png";
}
//☝☝☝_Mode Switch Functions For Pages_☝_End.
export function setDarkMode() {
  const rootStyles = getComputedStyle(document.documentElement);
  document.documentElement.style.setProperty(
    "--bodyColor",
    rootStyles.getPropertyValue("--bodyColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--titleColor",
    rootStyles.getPropertyValue("--titleColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--subtitleColor",
    rootStyles.getPropertyValue("--subtitleColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--textColor",
    rootStyles.getPropertyValue("--textColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--lineColor",
    rootStyles.getPropertyValue("--lineColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--borderColor",
    rootStyles.getPropertyValue("--border-color-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--buttonBackgroundColor",
    rootStyles.getPropertyValue("--buttonBackgroundColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--buttonBackgroundHover",
    rootStyles.getPropertyValue("--buttonBackgroundHover-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--buttonTextColor",
    rootStyles.getPropertyValue("--buttonTextColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--buttonTextHover",
    rootStyles.getPropertyValue("--buttonTextHover-dark").trim()
  );
  setDarkModeFooter();
  document.documentElement.style.setProperty(
    "--headerNavLinkACTIVEBorderColor",
    rootStyles.getPropertyValue("--headerNavLinkACTIVEBorderColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--headerNavLinkACTIVEColor",
    rootStyles.getPropertyValue("--headerNavLinkACTIVEColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--headerNavLinkNONACTIVEColor",
    rootStyles.getPropertyValue("--headerNavLinkNONACTIVEColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--navActiceTabBackground",
    rootStyles.getPropertyValue("--navActiceTabBackground-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--headerModeFlexDIrection",
    rootStyles.getPropertyValue("--headerModeFlexDIrection-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--textModeColor",
    rootStyles.getPropertyValue("--textModeColor-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--bodyBackgroundImage",
    rootStyles.getPropertyValue("--bodyBackgroundImage-dark").trim()
  );
  document.documentElement.style.setProperty(
    "--contentBorder",
    rootStyles.getPropertyValue("--contentBorder-dark").trim()
  );
}

export function setLightMode() {
  const rootStyles = getComputedStyle(document.documentElement);
  document.documentElement.style.setProperty(
    "--bodyColor",
    rootStyles.getPropertyValue("--bodyColor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--titleColor",
    rootStyles.getPropertyValue("--titleColor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--subtitleColor",
    rootStyles.getPropertyValue("--subtitleColor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--textColor",
    rootStyles.getPropertyValue("--textColor-light")
  );
  document.documentElement.style.setProperty(
    "--lineColor",
    rootStyles.getPropertyValue("--lineColor-light")
  );
  document.documentElement.style.setProperty(
    "--borderColor",
    rootStyles.getPropertyValue("--border-color-light")
  );
  document.documentElement.style.setProperty(
    "--buttonBackgroundColor",
    rootStyles.getPropertyValue("--buttonBackgroundColor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--buttonBackgroundHover",
    rootStyles.getPropertyValue("--buttonBackgroundHover-light").trim()
  );
  document.documentElement.style.setProperty(
    "--buttonTextColor",
    rootStyles.getPropertyValue("--buttonTextColor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--buttonTextHover",
    rootStyles.getPropertyValue("--buttonTextHover-light").trim()
  );
  setLightModeFooter();
  document.documentElement.style.setProperty(
    "--headerNavLinkACTIVEBorderColor",
    rootStyles.getPropertyValue("--headerNavLinkACTIVEBorderColor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--headerNavLinkACTIVEColor",
    rootStyles.getPropertyValue("--headerNavLinkACTIVEColor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--headerNavLinkNONACTIVEColor",
    rootStyles.getPropertyValue("--headerNavLinkNONACTIVEColor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--navActiceTabBackground",
    rootStyles.getPropertyValue("--navActiceTabBackground-light").trim()
  );
  document.documentElement.style.setProperty(
    "--headerModeFlexDIrection",
    rootStyles.getPropertyValue("--headerModeFlexDIrection-light").trim()
  );
  document.documentElement.style.setProperty(
    "--textModeColor",
    rootStyles.getPropertyValue("--textModeColor-light").trim()
  );
  document.documentElement.style.setProperty(
    "--bodyBackgroundImage",
    rootStyles.getPropertyValue("--bodyBackgroundImage-light").trim()
  );
  document.documentElement.style.setProperty(
    "--contentBorder",
    rootStyles.getPropertyValue("--contentBorder-light").trim()
  );
}

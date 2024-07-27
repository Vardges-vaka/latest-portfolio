let modeLabel = null;
let avatar = null;
let logoIcon = null;
let avatarHomePage = null;

function gettingTheElements() {
  modeLabel = document.getElementById("modeTitle");
  avatar = document.getElementById("crtAvatar");
  logoIcon = document.getElementById("logoIcon");
  avatarHomePage = document.getElementById("avatarHomePage");
}

//______________________________________________👇👇👇_FOOTER Mode Switch Functions_👇
function updateFooterIcons(mode) {
  const instIcon = document.getElementById("instagramLogo");
  const linkedInIcon = document.getElementById("linkedInLogo");
  const tikTokIcon = document.getElementById("tikTokLogo");
  const whatsappIcon = document.getElementById("whatsappLogo");
  const logoIcon = document.getElementById("logoIcon");

  if (mode === "dark") {
    instIcon.src = "./icons/instagram-icon-cool-mode.svg";
    linkedInIcon.src = "./icons/linkedin-icon-cool-mode.svg";
    tikTokIcon.src = "./icons/tiktok-icon-cool-mode.svg";
    whatsappIcon.src = "./icons/whatsapp-icon-cool-mode.svg";
  } else {
    instIcon.src = "./icons/instagram-icon-light-mode.svg";
    linkedInIcon.src = "./icons/linkedin-icon-light-mode.svg";
    tikTokIcon.src = "./icons/tiktok-icon-light-mode.svg";
    whatsappIcon.src = "./icons/whatsapp-icon-light-mode.svg";
  }
}

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

  // instIcon.src = "./icons/instagram-icon-cool-mode.svg";
  // linkedInIcon.src = "./icons/linkedin-icon-cool-mode.svg";
  // tikTokIcon.src = "./icons/tiktok-icon-cool-mode.svg";
  // whatsappIcon.src = "./icons/whatsapp-icon-cool-mode.svg";
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

  // instIcon.src = "./icons/instagram-icon-light-mode.svg";
  // linkedInIcon.src = "./icons/linkedin-icon-light-mode.svg";
  // tikTokIcon.src = "./icons/tiktok-icon-light-mode.svg";
  // whatsappIcon.src = "./icons/whatsapp-icon-light-mode.svg";
}

//______________________________________________👇👇👇_MAIN Mode Switch Functions_👇

export function setDarkMode() {
  gettingTheElements();
  const rootStyles = getComputedStyle(document.documentElement);
  document.documentElement.style.setProperty(
    "--dataTogleModeBgImage",
    rootStyles.getPropertyValue("--dataTogleModeBgImage-light").trim()
  );
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

  // FIXME:
  document.documentElement.style.setProperty(
    "--navActiceTabBackground",
    rootStyles.getPropertyValue("--navActiceTabBackground-dark").trim()
  );
  // FIXME:

  logoIcon.src = "./icons/the-logo-cool-mode.svg";

  setDarkModeFooter();
  updateFooterIcons("dark");
}

export function setLightMode() {
  gettingTheElements();
  const rootStyles = getComputedStyle(document.documentElement);
  document.documentElement.style.setProperty(
    "--dataTogleModeBgImage",
    rootStyles.getPropertyValue("--dataTogleModeBgImage-dark").trim()
  );
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

  // FIXME:
  document.documentElement.style.setProperty(
    "--navActiceTabBackground",
    rootStyles.getPropertyValue("--navActiceTabBackground-light").trim()
  );
  // FIXME:

  logoIcon.src = "./icons/the-logo-light-mode.svg";

  setLightModeFooter();
  updateFooterIcons("light");
}

//______________________________________________👇👇👇_MODE Switch Functions For Pages_👇
export function setDarkModeHomePage() {
  initializeElements();
  const rootStyles = getComputedStyle(document.documentElement);

  document.documentElement.style.setProperty(
    "--contentBackgroundImage",
    rootStyles.getPropertyValue("--contentBackgroundImage-dark").trim()
  );
  // FIXME:
  // document.documentElement.style.setProperty(
  //   "--mainPageImage",
  //   rootStyles.getPropertyValue("--mainPageImage-dark").trim()
  // );
  avatar.src = "./images/cartoonize-avatar-cool-mode.png";
}
export function setLightModeHomePage() {
  initializeElements();
  const rootStyles = getComputedStyle(document.documentElement);

  document.documentElement.style.setProperty(
    "--contentBackgroundImage",
    rootStyles.getPropertyValue("--contentBackgroundImage-light").trim()
  );
  // FIXME:
  // document.documentElement.style.setProperty(
  //   "--mainPageImage",
  //   rootStyles.getPropertyValue("--mainPageImage-light").trim()
  // );
  avatar.src = "./images/cartoonize-avatar-light-mode.png";
}
export function setDarkModeAboutPage() {
  gettingTheElements();

  const rootStyles = getComputedStyle(document.documentElement);
  avatarHomePage.src = "./images/my-real-face-cool-mode.gif";
}
export function setLightModeAboutPage() {
  gettingTheElements();

  const rootStyles = getComputedStyle(document.documentElement);
  avatarHomePage.src = "./images/my-Face-light-mode.png";
}

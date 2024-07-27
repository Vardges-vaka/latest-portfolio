export function createHeader(activePage) {
  let header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
    <aside class="left-logo-mode">
      <a href="./index.html">
        <img src="./icons/the-logo-light-mode.svg" alt="My Logo" id="logoIcon" />
      </a>
      <div class="mode-with-logo">
        <div class="mode">
          <input type="checkbox" id="lightMode" />
          <label for="lightMode"></label>
        </div>
        <p id="modeTitle" class="light-mode-text">Cool Mode</p>
      </div>
    </aside>
    <ul class="nav-link">
      <li><a href="./index.html" class="${activePage === "home" ? "active" : "non-active"}">Home</a></li>
      <li><a href="./About.html" class="${activePage === "about" ? "active" : "non-active"}">About</a></li>
      <li><a href="./Portfolio.html" class="${activePage === "portfolio" ? "active" : "non-active"}">Portfolio</a></li>
      <li><a href="./Contacts.html" class="${activePage === "contact" ? "active" : "non-active"}">Contact</a></li>
    </ul>
  `;
  return header;
}
export function createFooter() {
  let footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = `
  <p class="footer-txt">Find me</p>
      <div class="footer-icons">
        <div>
          <a href="https://www.instagram.com/the_cocktail_tree/%20">
            <img src="./icons/instagram-icon-light-mode.svg" id="instagramLogo" class="icons" alt="Instagram Logo">
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/company/the-cocktail-tree/?">
            <img src="./icons/linkedin-icon-light-mode.svg" id="linkedInLogo" class="icons" alt="LinkedIn Logo">
          </a>
        </div>
        <div>
          <a href="https://www.tiktok.com/@the_cocktail_tree?is_from_webapp=1&sender_device=pc">
            <img src="./icons/tiktok-icon-light-mode.svg" id="tikTokLogo" class="icons" alt="TikTok Logo">
          </a>
        </div>
        <div>
          <a href="https://wa.me/971585155667">
            <img src="./icons/whatsapp-icon-light-mode.svg" id="whatsappLogo" class="icons" alt="Whatsapp Logo">
          </a>
        </div>
      </div>
    `;
  return footer;
}

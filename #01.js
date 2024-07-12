document.addEventListener("DOMContentLoaded", function () {
    var modeCheckbox = document.getElementById("lightMode");
    var root = document.documentElement;
    var modeLabel = document.getElementById("modeLabel");

    modeCheckbox.addEventListener("change", function () {
        if (modeCheckbox.checked) {
            // Light mode
            root.style.setProperty('--background', getComputedStyle(root).getPropertyValue('--background-light'));
            root.style.setProperty('--input-background', getComputedStyle(root).getPropertyValue('--input-background-light'));
            root.style.setProperty('--border', getComputedStyle(root).getPropertyValue('--border-light'));
            root.style.setProperty('--input-text', getComputedStyle(root).getPropertyValue('--input-text-light'));
            root.style.setProperty('--title', getComputedStyle(root).getPropertyValue('--title-light'));
            root.style.setProperty('--btn-hover', getComputedStyle(root).getPropertyValue('--btn-hover-light'));
            root.style.setProperty('--text', getComputedStyle(root).getPropertyValue('--text-light'));
            root.style.setProperty('--btn', getComputedStyle(root).getPropertyValue('--btn-light'));
            root.style.setProperty('--btn-background', getComputedStyle(root).getPropertyValue('--btn-background-light'));
            modeLabel.textContent = "Dark Mode";
        } else {
            // Dark mode
            root.style.setProperty('--background', getComputedStyle(root).getPropertyValue('--background-dark'));
            root.style.setProperty('--input-background', getComputedStyle(root).getPropertyValue('--input-background-dark'));
            root.style.setProperty('--border', getComputedStyle(root).getPropertyValue('--border-dark'));
            root.style.setProperty('--input-text', getComputedStyle(root).getPropertyValue('--input-text-dark'));
            root.style.setProperty('--title', getComputedStyle(root).getPropertyValue('--title-dark'));
            root.style.setProperty('--btn-hover', getComputedStyle(root).getPropertyValue('--btn-hover-dark'));
            root.style.setProperty('--text', getComputedStyle(root).getPropertyValue('--text-dark'));
            root.style.setProperty('--btn', getComputedStyle(root).getPropertyValue('--btn-dark'));
            root.style.setProperty('--btn-background', getComputedStyle(root).getPropertyValue('--btn-background-dark'));
            modeLabel.textContent = "Light Mode";
        }
    });
});

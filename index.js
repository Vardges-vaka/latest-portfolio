const mode = document.getElementById('lightMode');
var modeLabel = document.getElementById("modeTitle");
var modeContainer = document.querySelector('.mode');


mode.addEventListener('click', () => {
            const rootStyles = getComputedStyle(document.documentElement);

            if (rootStyles.getPropertyValue('--main-bg-color').trim() === rootStyles.getPropertyValue('--main-bg-color-light').trim()) {
                document.documentElement.style.setProperty('--main-bg-color', rootStyles.getPropertyValue('--main-bg-color-dark').trim());
                document.documentElement.style.setProperty('--inp-bg-color', rootStyles.getPropertyValue('--inp-bg-color-dark').trim());
                document.documentElement.style.setProperty('--border-color', rootStyles.getPropertyValue('--border-color-dark').trim());
                document.documentElement.style.setProperty('--inp-txt-color', rootStyles.getPropertyValue('--inp-txt-color-dark').trim());
                document.documentElement.style.setProperty('--title-color', rootStyles.getPropertyValue('--title-color-dark').trim());
                document.documentElement.style.setProperty('--btn-hover-color', rootStyles.getPropertyValue('--btn-hover-color-dark').trim());
                document.documentElement.style.setProperty('--main-txt-color', rootStyles.getPropertyValue('--main-txt-color-dark').trim());
                document.documentElement.style.setProperty('--btn-color', rootStyles.getPropertyValue('--btn-color-dark').trim());
                document.documentElement.style.setProperty('--btn-bg-color', rootStyles.getPropertyValue('--btn-bg-color-dark').trim());
                modeLabel.textContent = "Light Mode";

                // modeLabel.style.position = 'absolute';
                // modeLabel.style.left = "360px";

                
                // modeLabel.style.position = 'absolute';
                // modeLabel.style.top = '20px';
                // modeLabel.style.right = '20px';
                // modeContainer.style.position = 'absolute';
                // modeContainer.style.bottom = '20px';
                // modeContainer.style.left = '20px';

            } else {
                document.documentElement.style.setProperty('--main-bg-color', rootStyles.getPropertyValue('--main-bg-color-light').trim());
                document.documentElement.style.setProperty('--inp-bg-color', rootStyles.getPropertyValue('--inp-bg-color-light').trim());
                document.documentElement.style.setProperty('--border-color', rootStyles.getPropertyValue('--border-color-light').trim());
                document.documentElement.style.setProperty('--inp-txt-color', rootStyles.getPropertyValue('--inp-txt-color-light').trim());
                document.documentElement.style.setProperty('--title-color', rootStyles.getPropertyValue('--title-color-light').trim());
                document.documentElement.style.setProperty('--btn-hover-color', rootStyles.getPropertyValue('--btn-hover-color-light').trim());
                document.documentElement.style.setProperty('--main-txt-color', rootStyles.getPropertyValue('--main-txt-color-light').trim());
                document.documentElement.style.setProperty('--btn-color', rootStyles.getPropertyValue('--btn-color-light').trim());
                document.documentElement.style.setProperty('--btn-bg-color', rootStyles.getPropertyValue('--btn-bg-color-light').trim());
                modeLabel.textContent = "Cool Mode";

                // modeLabel.style.position = 'static';
                // modeContainer.style.position = 'static';
            }
        });

// document.addEventListener("DOMContentLoaded", function() {
//     var mode = document.getElementById("m");

//     mode.addEventListener("change", (e) => {
//         if (e.target.checked === true) {
//             document.body.style.backgroundColor = "#18191D";
//             document.querySelector(".vako").style.backgroundImage = "url('./888.gif')";
//             document.querySelector(".vako").style.backgroundColor = "#000000";
//             vakoElement.style.position = "absolute"; // Adjust position when checked
//             vakoElement.style.top = "600px";
//             vakoElement.style.left = "20px";
//         } else {
//             document.body.style.backgroundColor = "#36301d";
//             document.querySelector(".vako").style.backgroundImage = "url('./light-mode-icon.gif')";
//             document.querySelector(".vako").style.backgroundColor = "transparent";

//         }
//     });

//     console.log(mode);
// });


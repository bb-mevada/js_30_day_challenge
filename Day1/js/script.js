// DOM Elements
const container = document.getElementById("container");
const colorCode = document.getElementById("color-code");
const magicButton = document.getElementById("magic-button");
const changeColorButton = document.getElementById("change-color-button");

/**
 *
 * @param {number} value
 * @returns {string}
 * @description Helps to convert numeric string to hex code
 */
const hexCreator = (value) => {
    const hex = value.toString(16);

    if (hex.length === 1) {
        return "0" + hex;
    }

    return hex;
};

/**
 * @description Helps to generate random hex code
 * @returns {string}
 */
const randomHexCodeGenerator = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const hexCode = `#${hexCreator(r)}${hexCreator(g)}${hexCreator(b)}`;
    return hexCode;
};

/**
 * @description Helps to change container color
 * @returns {string}
 */
const changeBgColor = (_) => {
    const hexCode = randomHexCodeGenerator();
    container.style.backgroundColor = hexCode;
    changeColorCodeText(hexCode);
};

/**
 * @description Helps to change color code text
 * @returns {string}
 */
const changeColorCodeText = (ccText) => (colorCode.innerText = ccText);

// Listening on Change Color Button Click
changeColorButton.addEventListener("click", changeBgColor);

// Listening on Magic Button Click
let intervalId = null;
let isMagicStarted = false;

/**
 * @description Helps to handle on click event of magic button
 * @returns {string}
 */
const handleMagic = (_) => {
    const timeInterval = 1000;

    if (intervalId) {
        clearInterval(intervalId);
    }

    if (!isMagicStarted) {
        magicButton.innerText = "Stop The Magic";
        intervalId = setInterval(changeBgColor, timeInterval);
        isMagicStarted = true;
    } else {
        magicButton.innerText = "Start The Magic";
        intervalId = null;
        isMagicStarted = false;
    }
};

magicButton.addEventListener("click", handleMagic);

/**
 *
 * @description Helps to copy the hex code to clipboard
 */
const copyHexCode = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    alert("Copied");
};

colorCode.addEventListener("click", copyHexCode);

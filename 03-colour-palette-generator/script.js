const formatSelect = document.getElementById("format");
const toneSelect = document.getElementById("tone");
const buttonRef = document.getElementById("generatebtn");
const paletteRef = document.getElementById("palette");
const toggleBtnRef = document.getElementById("toggleBtn");
const mainHeading = document.getElementById("main-heading");

toggleBtnRef.addEventListener('click', () => {
    document.body.classList.toggle('light');
    mainHeading.classList.toggle('text-black');
    if (toggleBtnRef.textContent === "Light Mode") {
        toggleBtnRef.textContent = "Dark Mode";
        toggleBtnRef.style.backgroundColor = "Black";
        toggleBtnRef.style.color = "White";
    }
    else {
        toggleBtnRef.textContent = "Light Mode";
        toggleBtnRef.style.backgroundColor = "White";
        toggleBtnRef.style.color = "Black";
    }
})

function randomRGB(tone) {
    let min = 0;
    let max = 255;
    if (tone === "light") {
        min = 150;
    }
    else {
        max = 150;
    }
    const r = Math.floor(Math.random() * (max - min) + min);
    const g = Math.floor(Math.random() * (max - min) + min);
    const b = Math.floor(Math.random() * (max - min) + min);

    return { r, g, b };
}

function rgb2hex(r, g, b) {
    return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function generatePalette() {
    paletteRef.innerHTML = "";
    // generate 5 colour
    for (let i = 0; i < 5; i++) {
        const { r, g, b } = randomRGB(toneSelect.value);
        let color;
        // convert for hex
        if (formatSelect.value === "hex") {
            color = rgb2hex(r, g, b);
        }
        else {
            color = `rgb(${r}, ${g}, ${b})`;
        }
        // create a div for the colours
        const div = document.createElement("div");
        div.classList.add("color");

        // colour the div
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        div.textContent = color;

        paletteRef.appendChild(div);
    }
}

buttonRef.addEventListener('click', generatePalette);

// generatePalette();
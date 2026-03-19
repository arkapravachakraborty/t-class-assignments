const toggleHeading = document.getElementById("toggler-heading")
const toggleButtonRef = document.getElementById("toggle-button");
const sound = new Audio("mouse-click.mp3");

toggleButtonRef.addEventListener("click", () => {
    document.body.classList.toggle('dark');
    // Reset the sound to the beginning important for fast, repeated clicks!
    sound.currentTime = 0;
    sound.play()
    // Change the Button Text
    if (toggleButtonRef.textContent === "Toggle to Dark Mode") {
        toggleButtonRef.textContent = "Toggle to Light Mode";
    }
    else {
        toggleButtonRef.textContent = "Toggle to Dark Mode";
    }

    // Change the Heading Text
    if (toggleHeading.textContent === "Dark Mode Toggler") {
        toggleHeading.textContent = "Light Mode Toggler";
    }
    else {
        toggleHeading.textContent = "Dark Mode Toggler";
    }

});
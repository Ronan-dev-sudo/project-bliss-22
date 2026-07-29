const netflixIntro = document.getElementById("netflixIntro");
const welcomeScreen = document.getElementById("welcomeScreen");
const startJourney = document.getElementById("startJourney");

// Show the welcome page after the Netflix intro
setTimeout(() => {
    netflixIntro.classList.remove("active");
    welcomeScreen.classList.add("active");
}, 3500);

// Temporary button action
startJourney.addEventListener("click", () => {
    alert("Theme Selection coming next...");
});

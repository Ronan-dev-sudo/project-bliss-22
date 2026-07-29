const screens = {
    intro: document.getElementById("netflixIntro"),
    welcome: document.getElementById("welcomeScreen"),
    themes: document.getElementById("themeScreen")
};

const startJourney = document.getElementById("startJourney");

const kittyTheme = document.getElementById("kittyTheme");
const kitkatTheme = document.getElementById("kitkatTheme");
const puppyTheme = document.getElementById("puppyTheme");
const movieTheme = document.getElementById("movieTheme");

function showScreen(screen) {

    Object.values(screens).forEach(page => {
        page.classList.remove("active");
    });

    screen.classList.add("active");

}

// Netflix Intro → Welcome
setTimeout(() => {

    showScreen(screens.welcome);

}, 3500);

// Welcome → Theme Selection
startJourney.addEventListener("click", () => {

    showScreen(screens.themes);

});

// Temporary Theme Actions
kittyTheme.addEventListener("click", () => {
    alert("💕 XO Kitty is coming next!");
});

kitkatTheme.addEventListener("click", () => {
    alert("🍫 KitKat is coming next!");
});

puppyTheme.addEventListener("click", () => {
    alert("🐶 Puppy is coming next!");
});

movieTheme.addEventListener("click", () => {
    alert("🎬 Netflix Finale is coming later!");
});

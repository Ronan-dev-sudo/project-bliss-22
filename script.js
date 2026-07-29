const screens = {
    intro: document.getElementById("netflixIntro"),
    welcome: document.getElementById("welcomeScreen"),
    themes: document.getElementById("themeScreen"),
    kitty: document.getElementById("xoKittyScreen")
};

const startJourney = document.getElementById("startJourney");
const kittyTheme = document.getElementById("kittyTheme");
const kittyNext = document.getElementById("kittyNext");
const kittyMessage = document.getElementById("kittyMessage");

const kittyLines = [
    "Some people bring chaos...",
    "...you somehow bring comfort too.",
    "That's rare.",
    "And today is all about celebrating you. 💕"
];

function showScreen(screen) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

function typeLines(lines, element, speed = 40, pause = 900) {
    element.textContent = "";
    let lineIndex = 0;

    function typeCurrentLine() {
        if (lineIndex >= lines.length) return;

        let charIndex = 0;

        function typeChar() {
            if (charIndex < lines[lineIndex].length) {
                element.textContent += lines[lineIndex][charIndex];
                charIndex++;
                setTimeout(typeChar, speed);
            } else {
                element.textContent += "\n\n";
                lineIndex++;
                setTimeout(typeCurrentLine, pause);
            }
        }

        typeChar();
    }

    typeCurrentLine();
}

// Intro → Welcome
setTimeout(() => {
    showScreen(screens.welcome);
}, 3500);

// Welcome → Chapters
startJourney.addEventListener("click", () => {
    showScreen(screens.themes);
});

// Chapter 1
kittyTheme.addEventListener("click", () => {
    showScreen(screens.kitty);
    typeLines(kittyLines, kittyMessage);
});

// Temporary next button
kittyNext.addEventListener("click", () => {
    alert("🍫 Chapter Two (KitKat) is next!");
});

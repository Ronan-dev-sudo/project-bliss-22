const screens = {
    netflix: document.getElementById("netflixScreen"),
    welcome: document.getElementById("welcomeScreen"),
    theme: document.getElementById("themeScreen"),
    xo: document.getElementById("xoScreen"),
    kitkat: document.getElementById("kitkatScreen"),
    puppy: document.getElementById("puppyScreen"),
    final: document.getElementById("finalScreen"),
    envelope: document.getElementById("envelopeScreen"),
    letter: document.getElementById("letterScreen"),
    ending: document.getElementById("endingScreen")
};

const startBtn = document.getElementById("startBtn");
const envelopeBtn = document.getElementById("envelopeBtn");
const replayBtn = document.getElementById("replayBtn");
const endingBtn = document.getElementById("endingBtn");

const envelope = document.getElementById("envelope");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const typewriter = document.getElementById("typewriter");

const nextButtons = document.querySelectorAll(".next-btn");
const themeCards = document.querySelectorAll(".theme-card");

const letter = `Hey Bliss,

I don't know if I've always been the perfect friend, but I hope today reminds you just how special you are.

I know this season hasn't been easy. I see you trying every day, and I'm proud of you for continuing to show up.

You never have to pretend you're okay with me. I'll celebrate your happy days and stand beside you through the difficult ones.

I truly believe brighter days are ahead.

The right guy will come.

You'll discover the path meant for you.

You'll have that beautiful home you've dreamed about, full of pink, warmth, and puppies.

You'll find genuine people who pour into your life the same way you pour into theirs.

If I've ever hurt you, I'm truly sorry.

Please remember:

You are never too much.
You are never a burden.
You can always reach out to me.

I'm always praying for you.

Happy Birthday, Bliss.

Love,
Jeff ❤️`;

function showScreen(screen) {

    Object.values(screens).forEach(s => {
        s.classList.remove("active");
    });

    screen.classList.add("active");
}

setTimeout(() => {
    showScreen(screens.welcome);
}, 3000);

startBtn.addEventListener("click", () => {

    showScreen(screens.theme);

    if (music.paused) {

        music.play().catch(() => {});

        musicBtn.textContent = "🔊";

    }

});themeCards.forEach(card => {

    card.addEventListener("click", () => {

        const target = card.dataset.target;

        switch (target) {

            case "xoScreen":
                showScreen(screens.xo);
                break;

            case "kitkatScreen":
                showScreen(screens.kitkat);
                break;

            case "puppyScreen":
                showScreen(screens.puppy);
                break;

        }

    });

});

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        const next = button.dataset.next;

        switch (next) {

            case "kitkatScreen":
                showScreen(screens.kitkat);
                break;

            case "puppyScreen":
                showScreen(screens.puppy);
                break;

            case "finalScreen":
                showScreen(screens.final);
                break;

        }

    });

});

envelopeBtn.addEventListener("click", () => {

    showScreen(screens.envelope);

});

envelope.addEventListener("click", () => {

    envelope.style.transform = "translateY(-15px) scale(1.05)";

    const flap = envelope.querySelector(".envelope-top");

    flap.style.transition = ".8s";

    flap.style.transform = "rotateX(180deg)";

    const paper = envelope.querySelector(".letter-peek");

    paper.style.transition = "1s";

    paper.style.transform = "translateY(-120px)";

    setTimeout(() => {

        showScreen(screens.letter);

        startTyping();

    }, 1300);

});let typingIndex = 0;
let typingFinished = false;

function startTyping() {

    typewriter.innerHTML = "";
    typingIndex = 0;
    typingFinished = false;

    typeLetter();

}

function typeLetter() {

    if (typingIndex < letter.length) {

        typewriter.innerHTML += letter.charAt(typingIndex);

        typingIndex++;

        typewriter.scrollTop = typewriter.scrollHeight;

        setTimeout(typeLetter, 32);

    } else {

        typingFinished = true;

    }

}

endingBtn.addEventListener("click", () => {

    if (!typingFinished) {

        typewriter.innerHTML = letter;

        typingFinished = true;

        return;

    }

    showScreen(screens.ending);

});

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play().catch(() => {});

        musicBtn.textContent = "🔊";

    } else {

        music.pause();

        musicBtn.textContent = "🔇";

    }

});replayBtn.addEventListener("click", () => {

    // Reset envelope
    const flap = envelope.querySelector(".envelope-top");
    const paper = envelope.querySelector(".letter-peek");

    flap.style.transition = "";
    flap.style.transform = "";

    paper.style.transition = "";
    paper.style.transform = "";

    envelope.style.transform = "";

    // Reset typewriter
    typewriter.innerHTML = "";
    typingIndex = 0;
    typingFinished = false;

    // Go back to theme selection
    showScreen(screens.theme);

});

// Prevent music from stopping when changing screens
music.volume = 0.5;

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {

        e.preventDefault();

        if (music.paused) {

            music.play().catch(() => {});
            musicBtn.textContent = "🔊";

        } else {

            music.pause();
            musicBtn.textContent = "🔇";

        }

    }

});

// Initial state
showScreen(screens.netflix);

function hideAllPages() {

    document.getElementById("mainContent").style.display = "none";

    document.getElementById("xoKittyPage").style.display = "none";
    document.getElementById("kitkatPage").style.display = "none";
    document.getElementById("puppyPage").style.display = "none";
    document.getElementById("netflixPage").style.display = "none";

}

function startExperience() {

    document.querySelector(".intro").style.display = "none";

}

function showMessage() {

    document.getElementById("message").innerHTML =
    "💗 Happy Birthday! Today is all about celebrating you. Welcome to Project Bliss ✨";

}

function xoKitty() {

    hideAllPages();

    document.getElementById("xoKittyPage").style.display = "block";

}

function kitkat() {

    hideAllPages();

    document.getElementById("kitkatPage").style.display = "block";

}

function puppy() {

    hideAllPages();

    document.getElementById("puppyPage").style.display = "block";

}

function netflix() {

    hideAllPages();

    document.getElementById("netflixPage").style.display = "block";

}

function showLetter() {

    document.getElementById("letter").innerHTML = `
    <h2>💌 Dear Bliss,</h2>

    <p>
    This little website is only the beginning.
    Every click is a memory, every page is another chapter,
    and every moment here was made with you in mind.
    </p>

    <p>
    Thank you for being someone worth celebrating.
    I hope this birthday reminds you how loved,
    appreciated and special you truly are.
    </p>

    <p>
    Happy Birthday. 💗✨
    </p>

    <p>
    — Jeff
    </p>
    `;

}

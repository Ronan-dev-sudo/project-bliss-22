function startExperience() {

    document.querySelector(".intro").style.display = "none";

}


function showMessage() {

    document.getElementById("message").innerHTML =
    "Happy Birthday 💗 May your day be filled with love, laughter and beautiful memories ✨";

}



function xoKitty() {

    document.querySelector(".hero").style.display = "none";
    document.querySelector(".themes").style.display = "none";

    document.getElementById("xoKittyPage").style.display = "block";

}


function kitkat() {

    document.body.style.background =
    "linear-gradient(135deg, #8b0000, #ff4d4d)";

    document.getElementById("message").innerHTML =
    "🍫 Sweet moments, sweet memories. KitKat theme activated ❤️";

}



function puppy() {

    document.body.style.background =
    "linear-gradient(135deg, #fff1c1, #ffd6a5)";

    document.getElementById("message").innerHTML =
    "🐶 Puppy mode activated! Cute energy only 🐾";

}



function netflix() {

    document.body.style.background =
    "linear-gradient(135deg, #000000, #8b0000)";

    document.getElementById("message").innerHTML =
    "🎬 A Project Bliss Original. Episode 1 begins...";

}

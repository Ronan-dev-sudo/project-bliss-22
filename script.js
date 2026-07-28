function startExperience(){

    document.querySelector(".intro").style.display = "none";

    document.getElementById("mainContent").classList.remove("hidden");

}



function hideAllPages(){

    document.getElementById("mainContent").classList.add("hidden");

    document.getElementById("xoKittyPage").style.display = "none";
    document.getElementById("kitkatPage").style.display = "none";
    document.getElementById("puppyPage").style.display = "none";
    document.getElementById("netflixPage").style.display = "none";

}



function showMessage(){

    document.getElementById("message").innerHTML =
    "💗 Happy Birthday! Welcome to Project Bliss ✨";

}



function xoKitty(){

    hideAllPages();

    document.getElementById("xoKittyPage").style.display = "block";

}



function kitkat(){

    hideAllPages();

    document.getElementById("kitkatPage").style.display = "block";

}



function puppy(){

    hideAllPages();

    document.getElementById("puppyPage").style.display = "block";

}



function netflix(){

    hideAllPages();

    document.getElementById("netflixPage").style.display = "block";

}



function showLetter(){

    document.getElementById("letter").innerHTML =
    "💌 Your real birthday letter will appear here 💗";

}

function hideAllPages(){

    document.getElementById("mainContent").style.display = "none";

    document.getElementById("xoKittyPage").style.display = "none";
    document.getElementById("kitkatPage").style.display = "none";
    document.getElementById("puppyPage").style.display = "none";
    document.getElementById("netflixPage").style.display = "none";

}



function startExperience(){

    document.querySelector(".intro").style.display = "none";

    document.getElementById("mainContent").style.display = "block";

}




function showMessage(){

    document.getElementById("message").innerHTML =
    "💗 Happy Birthday! Welcome to your special Project Bliss world ✨";

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

    document.getElementById("letter").innerHTML = `

    <h2>💌 A Special Letter</h2>

    <p>
    Your real birthday message will go here.
    </p>

    <p>
    Made with love 💗
    </p>

    `;

}

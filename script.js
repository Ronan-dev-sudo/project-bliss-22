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

kittyNext.style.display = "none";

const kittyLines = [
    "Some people bring chaos...",
    "",
    "...you somehow bring comfort too.",
    "",
    "That's rare.",
    "",
    "So let's celebrate the girl who keeps showing up.",
    "",
    "Happy Birthday, Bliss. 💕"
];

function showScreen(screen) {

    Object.values(screens).forEach(s => {
        s.classList.remove("active");
    });

    screen.classList.add("active");

}

setTimeout(() => {

    showScreen(screens.welcome);

},3500);

startJourney.addEventListener("click",()=>{

    showScreen(screens.themes);

});

kittyTheme.addEventListener("click",()=>{

    showScreen(screens.kitty);

    startTyping();

});

function startTyping(){

    kittyNext.style.display="none";

    kittyMessage.innerHTML="";

    let line=0;

    function typeLine(){

        if(line>=kittyLines.length){

            kittyNext.style.display="inline-block";

            kittyNext.style.opacity="0";

            setTimeout(()=>{

                kittyNext.style.transition=".8s";
                kittyNext.style.opacity="1";

            },200);

            return;

        }

        let text=kittyLines[line];

        let i=0;

        let paragraph=document.createElement("p");

        paragraph.style.marginBottom="12px";

        kittyMessage.appendChild(paragraph);

        function typeChar(){

            if(i<text.length){

                paragraph.textContent+=text.charAt(i);

                i++;

                setTimeout(typeChar,35);

            }else{

                line++;

                setTimeout(typeLine,500);

            }

        }

        typeChar();

    }

    typeLine();

}

kittyNext.addEventListener("click",()=>{

    kittyMessage.innerHTML="";

    kittyNext.style.display="none";

    alert("🍫 Chapter Two is the next brick we'll build.");

});

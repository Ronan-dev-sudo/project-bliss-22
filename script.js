const screens = {

    intro: document.getElementById("netflixIntro"),
    welcome: document.getElementById("welcomeScreen"),
    themes: document.getElementById("themeScreen"),
    kitty: document.getElementById("xoKittyScreen"),
    transition: document.getElementById("chapterTransition"),
    kitkat: document.getElementById("kitkatScreen"),
    puppy: document.getElementById("puppyScreen"),
    final: document.getElementById("finalScreen"),
    letter: document.getElementById("letterScreen")

};

const startJourney = document.getElementById("startJourney");

const kittyTheme = document.getElementById("kittyTheme");

const kittyNext = document.getElementById("kittyNext");
const kitkatNext = document.getElementById("kitkatNext");
const puppyNext = document.getElementById("puppyNext");

const letterButton = document.getElementById("letterButton");
const finishStory = document.getElementById("finishStory");

const kittyMessage = document.getElementById("kittyMessage");
const kitkatMessage = document.getElementById("kitkatMessage");
const puppyMessage = document.getElementById("puppyMessage");

const transitionText = document.getElementById("transitionText");

const letterContent = document.getElementById("letterContent");
const signature = document.querySelector(".signature");

kittyNext.style.display="none";
kitkatNext.style.display="none";
puppyNext.style.display="none";

if(finishStory){
    finishStory.style.display="none";
}

if(signature){
    signature.style.display="none";
}

function showScreen(screen){

    if(!screen) return;

    Object.values(screens).forEach(page=>{

        if(page){

            page.classList.remove("active");

        }

    });

    screen.classList.add("active");

}

setTimeout(()=>{

    showScreen(screens.welcome);

},3500);

startJourney.addEventListener("click",()=>{

    showScreen(screens.themes);

});

function typeStory(lines,element,callback){

    element.innerHTML="";

    let index=0;

    function nextLine(){

        if(index>=lines.length){

            if(callback){
                callback();
            }

            return;

        }

        const p=document.createElement("p");

        element.appendChild(p);

        let letter=0;

        function type(){

            if(letter<lines[index].length){

                p.textContent+=lines[index][letter];

                letter++;

                setTimeout(type,35);

            }else{

                index++;

                setTimeout(nextLine,700);

            }

        }

        type();

    }

    nextLine();

}

// CHAPTER ONE

kittyTheme.addEventListener("click",()=>{

    showScreen(screens.kitty);

    typeStory([

        "Some people bring chaos...",

        "...you somehow bring comfort too.",

        "That's rare.",

        "So today we celebrate you. 💕"

    ],kittyMessage,()=>{

        kittyNext.style.display="inline-block";

    });

});

// KITTY → KITKAT

kittyNext.addEventListener("click",()=>{

    showScreen(screens.transition);

    transitionText.textContent="Loading Chapter Two...";

    setTimeout(()=>{

        showScreen(screens.kitkat);

        typeStory([

            "Life can get overwhelming sometimes...",

            "But even small moments matter.",

            "Don't forget to pause.",

            "You deserve sweet moments too. 🍫"

        ],kitkatMessage,()=>{

            kitkatNext.style.display="inline-block";

        });

    },2500);

});

// KITKAT → PUPPY

kitkatNext.addEventListener("click",()=>{

    showScreen(screens.transition);

    transitionText.textContent="Loading Chapter Three...";

    setTimeout(()=>{

        showScreen(screens.puppy);

        typeStory([

            "Some happiness is simple.",

            "A warm heart.",

            "A loyal friend.",

            "A reason to smile. 🐶"

        ],puppyMessage,()=>{

            puppyNext.style.display="inline-block";

        });

    },2500);

});

// PUPPY → FINAL

puppyNext.addEventListener("click",()=>{

    showScreen(screens.transition);

    transitionText.textContent="Preparing the final chapter...";

    setTimeout(()=>{

        showScreen(screens.final);

    },3000);

});// ==========================
// FINAL CHAPTER → LETTER
// ==========================

const letterLines = [

"Hey Bliss,",

"I don't know how good of a friend I have been to you, but I hope today reminds you just how special you are.",

"I know this season hasn't been easy. I see you trying every single day, even when it's exhausting. I'm proud of you for continuing to show up.",

"You never have to pretend you're okay when it comes to me. I'll gladly celebrate your happiest days, but I'll also walk beside you through the difficult ones.",

"I truly believe brighter days are ahead.",

"The right guy will come.",

"You'll discover the path that was always meant for you.",

"You'll have that beautiful home you've dreamed about, filled with pink, warmth, laughter, and probably more puppies than anyone can count.",

"You'll find genuine people who pour into your life the same way you pour into others.",

"If I've ever made you feel hurt or unseen in any way, I'm truly sorry.",

"And please remember this...", 

"You are never too much.",

"You are never a burden.",

"You can always reach out to me.",

"I'm always praying for you.",

"Happy Birthday, Bliss. ❤️"

];

function typeLetter(lines, callback){

    letterContent.innerHTML = "";

    let lineIndex = 0;

    function nextLine(){

        if(lineIndex >= lines.length){

            if(signature){
                signature.style.display = "block";
            }

            if(finishStory){
                finishStory.style.display = "inline-block";
            }

            if(callback){
                callback();
            }

            return;
        }

        const p = document.createElement("p");
        letterContent.appendChild(p);

        let charIndex = 0;

        function typeCharacter(){

            if(charIndex < lines[lineIndex].length){

                p.textContent += lines[lineIndex][charIndex];

                charIndex++;

                setTimeout(typeCharacter,28);

            }else{

                lineIndex++;

                setTimeout(nextLine,900);

            }

        }

        typeCharacter();

    }

    nextLine();

}

if(letterButton){

    letterButton.addEventListener("click",()=>{

        showScreen(screens.letter);

        if(signature){
            signature.style.display="none";
        }

        if(finishStory){
            finishStory.style.display="none";
        }

        typeLetter(letterLines);

    });

}

if(finishStory){

    finishStory.addEventListener("click",()=>{

        alert("✨ Final stars ending coming next.");

    });

}

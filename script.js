const screens = {

    intro: document.getElementById("netflixIntro"),
    welcome: document.getElementById("welcomeScreen"),
    themes: document.getElementById("themeScreen"),
    kitty: document.getElementById("xoKittyScreen"),
    transition: document.getElementById("chapterTransition"),
    kitkat: document.getElementById("kitkatScreen")

};


const startJourney = document.getElementById("startJourney");

const kittyTheme = document.getElementById("kittyTheme");

const kittyNext = document.getElementById("kittyNext");

const kittyMessage = document.getElementById("kittyMessage");

const transitionText = document.getElementById("transitionText");

const kitkatMessage = document.getElementById("kitkatMessage");

const kitkatNext = document.getElementById("kitkatNext");



kittyNext.style.display = "none";

kitkatNext.style.display = "inline-block";



function showScreen(screen){

    Object.values(screens).forEach(page=>{

        page.classList.remove("active");

    });


    screen.classList.add("active");

}




// Netflix Intro → Welcome

setTimeout(()=>{

    showScreen(screens.welcome);

},3500);





// Welcome → Chapter Selection

startJourney.addEventListener("click",()=>{

    showScreen(screens.themes);

});





// XO KITTY STORY

const kittyLines = [

    "Some people bring chaos...",

    "...you somehow bring comfort too.",

    "That's rare.",

    "So today we celebrate you.",

    "The girl who keeps showing up. 💕"

];




function typeStory(lines, element, callback){


    element.innerHTML="";


    let index=0;



    function nextLine(){


        if(index >= lines.length){


            if(callback){

                callback();

            }

            return;

        }



        let paragraph=document.createElement("p");


        element.appendChild(paragraph);



        let letter=0;



        function type(){


            if(letter < lines[index].length){


                paragraph.textContent += lines[index][letter];

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





kittyTheme.addEventListener("click",()=>{


    showScreen(screens.kitty);


    typeStory(

        kittyLines,

        kittyMessage,

        ()=>{


            kittyNext.style.display="inline-block";


            kittyNext.style.opacity="0";


            setTimeout(()=>{


                kittyNext.style.transition=".8s";

                kittyNext.style.opacity="1";


            },100);


        }

    );


});






// XO KITTY → CHAPTER TWO


kittyNext.addEventListener("click",()=>{


    showScreen(screens.transition);


    transitionText.textContent="Loading Chapter Two...";


    setTimeout(()=>{


        showScreen(screens.kitkat);


        startKitkat();


    },2500);



});





// KITKAT STORY


function startKitkat(){


    const lines=[

        "Life can get overwhelming sometimes...",

        "But even the smallest moments matter.",

        "Take breaks.",

        "Smile more.",

        "You deserve sweet moments too. 🍫"

    ];



    typeStory(

        lines,

        kitkatMessage

    );


}

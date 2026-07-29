const screens = {

    intro: document.getElementById("netflixIntro"),
    welcome: document.getElementById("welcomeScreen"),
    themes: document.getElementById("themeScreen"),
    kitty: document.getElementById("xoKittyScreen"),
    transition: document.getElementById("chapterTransition"),
    kitkat: document.getElementById("kitkatScreen"),
    puppy: document.getElementById("puppyScreen"),
    final: document.getElementById("finalScreen")

};



const startJourney = document.getElementById("startJourney");

const kittyTheme = document.getElementById("kittyTheme");

const kittyNext = document.getElementById("kittyNext");

const kitkatNext = document.getElementById("kitkatNext");

const puppyNext = document.getElementById("puppyNext");

const letterButton = document.getElementById("letterButton");



const kittyMessage = document.getElementById("kittyMessage");

const kitkatMessage = document.getElementById("kitkatMessage");

const puppyMessage = document.getElementById("puppyMessage");

const transitionText = document.getElementById("transitionText");



kittyNext.style.display="none";
kitkatNext.style.display="none";
puppyNext.style.display="none";




function showScreen(screen){

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


        if(index >= lines.length){


            if(callback){

                callback();

            }

            return;

        }



        let p=document.createElement("p");

        element.appendChild(p);



        let letter=0;



        function type(){


            if(letter < lines[index].length){


                p.textContent += lines[index][letter];

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







// XO KITTY

kittyTheme.addEventListener("click",()=>{


    showScreen(screens.kitty);



    typeStory(

    [

    "Some people bring chaos...",

    "...you somehow bring comfort too.",

    "That's rare.",

    "So today we celebrate you. 💕"

    ],

    kittyMessage,


    ()=>{

        kittyNext.style.display="inline-block";

    }

    );


});








// KITTY → KITKAT

kittyNext.addEventListener("click",()=>{


    showScreen(screens.transition);


    transitionText.textContent="Loading Chapter Two...";


    setTimeout(()=>{


        showScreen(screens.kitkat);



        typeStory(

        [

        "Life can get overwhelming sometimes...",

        "But even small moments matter.",

        "Don't forget to pause.",

        "You deserve sweet moments too. 🍫"

        ],

        kitkatMessage,


        ()=>{

            kitkatNext.style.display="inline-block";

        }


        );


    },2500);


});









// KITKAT → PUPPY

kitkatNext.addEventListener("click",()=>{


    showScreen(screens.transition);


    transitionText.textContent="Loading Chapter Three...";



    setTimeout(()=>{


        showScreen(screens.puppy);



        typeStory(

        [

        "Some happiness is simple.",

        "A warm heart.",

        "A loyal friend.",

        "A reason to smile. 🐶"

        ],

        puppyMessage,


        ()=>{

            puppyNext.style.display="inline-block";

        }


        );


    },2500);


});









// PUPPY → FINAL CHAPTER

puppyNext.addEventListener("click",()=>{


    showScreen(screens.transition);


    transitionText.textContent="Preparing the final chapter...";



    setTimeout(()=>{


        showScreen(screens.final);



    },3000);


});








// LETTER BUTTON (COMING NEXT)

letterButton.addEventListener("click",()=>{


    alert("💌 The letter chapter is next.");


});


// ============================
// PROJECT BLISS V2
// MAIN CONTROLLER
// ============================


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

const finishBtn = document.getElementById("finishBtn");

const replayBtn = document.getElementById("replayBtn");

const musicBtn = document.getElementById("musicBtn");

const music = document.getElementById("bgMusic");

const envelope = document.getElementById("envelope");

const typewriter = document.getElementById("typewriter");



function showScreen(screen){

    Object.values(screens).forEach(section=>{

        section.classList.remove("active");

    });


    screen.classList.add("active");

}




// Netflix intro timing

setTimeout(()=>{

    showScreen(screens.welcome);

},3500);





// Start journey

startBtn.addEventListener("click",()=>{


    showScreen(screens.theme);


    if(music){

        music.play().catch(()=>{});

    }


    if(musicBtn){

        musicBtn.textContent="🔊";

    }


});
// ============================
// CHAPTER NAVIGATION
// ============================


const chapters = document.querySelectorAll(".chapter");


chapters.forEach(chapter=>{


    chapter.addEventListener("click",()=>{


        const target = chapter.dataset.target;


        showScreen(
            document.getElementById(target)
        );


    });


});





// Next buttons inside chapters


const nextButtons = document.querySelectorAll(".nextBtn");


nextButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const next = button.dataset.next;


        showScreen(
            document.getElementById(next)
        );


    });


});





// ============================
// ENVELOPE
// ============================


envelopeBtn.addEventListener("click",()=>{


    showScreen(screens.envelope);


});




envelope.addEventListener("click",()=>{


    showScreen(screens.letter);


    startTyping();


});





// ============================
// LETTER
// ============================


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



let index = 0;


function startTyping(){


    typewriter.innerHTML="";


    index=0;


    type();


}



function type(){


    if(index < letter.length){


        typewriter.innerHTML += letter.charAt(index);


        index++;


        setTimeout(type,35);


    }


}
// ============================
// LETTER FINISH
// ============================


finishBtn.addEventListener("click",()=>{


    showScreen(screens.ending);


});





// ============================
// REPLAY
// ============================


replayBtn.addEventListener("click",()=>{


    typewriter.innerHTML="";


    index=0;


    showScreen(screens.theme);


});





// ============================
// MUSIC TOGGLE
// ============================


musicBtn.addEventListener("click",()=>{


    if(music.paused){


        music.play().catch(()=>{});


        musicBtn.textContent="🔊";


    }else{


        music.pause();


        musicBtn.textContent="🔇";


    }


});





// ============================
// KEYBOARD MUSIC CONTROL
// ============================


document.addEventListener("keydown",(event)=>{


    if(event.code==="Space"){


        event.preventDefault();


        if(music.paused){


            music.play().catch(()=>{});


            musicBtn.textContent="🔊";


        }else{


            music.pause();


            musicBtn.textContent="🔇";


        }


    }


});





// ============================
// INITIAL LOAD
// ============================


showScreen(screens.netflix);

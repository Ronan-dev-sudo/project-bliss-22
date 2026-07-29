// =============================
// PROJECT BLISS V2
// FLOW CONTROLLER
// =============================


const screens = document.querySelectorAll(".screen");


function showScreen(id){

    screens.forEach(screen=>{

        screen.classList.remove("active");

    });


    const target = document.getElementById(id);


    if(target){

        target.classList.add("active");

    }

}




// =============================
// START JOURNEY
// =============================


const startBtn = document.getElementById("startBtn");


if(startBtn){

    startBtn.addEventListener("click",()=>{

        showScreen("xoScreen");

    });

}




// =============================
// AUTO NETFLIX INTRO
// =============================


setTimeout(()=>{


    showScreen("welcomeScreen");


},4000);





// =============================
// CHAPTER FLOW
// =============================


const nextButtons = document.querySelectorAll(".nextBtn");


nextButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const nextScreen = button.dataset.next;


        if(nextScreen){


            showScreen(nextScreen);


        }


    });


});
// =============================
// ENVELOPE FLOW
// =============================


const envelope = document.getElementById("envelope");


if(envelope){

    envelope.addEventListener("click",()=>{


        showScreen("letterScreen");


        startTyping();


    });

}





// =============================
// LETTER TYPEWRITER
// =============================


const typewriter = document.getElementById("typewriter");


const letterText = `Hey Bliss,

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



let letterIndex = 0;



function startTyping(){


    if(!typewriter){

        return;

    }


    typewriter.innerHTML = "";


    letterIndex = 0;


    writeLetter();


}



function writeLetter(){


    if(letterIndex < letterText.length){


        typewriter.innerHTML += letterText.charAt(letterIndex);


        letterIndex++;


        setTimeout(writeLetter,35);


    }


}
// =============================
// LETTER FINISH
// =============================


const finishBtn = document.getElementById("finishBtn");


if(finishBtn){

    finishBtn.addEventListener("click",()=>{


        showScreen("endingScreen");


    });

}





// =============================
// REPLAY
// =============================


const replayBtn = document.getElementById("replayBtn");


if(replayBtn){

    replayBtn.addEventListener("click",()=>{


        showScreen("welcomeScreen");


    });

}





// =============================
// MUSIC TOGGLE
// =============================


const musicBtn = document.getElementById("musicBtn");

const music = document.getElementById("bgMusic");



if(musicBtn && music){


    musicBtn.addEventListener("click",()=>{


        if(music.paused){


            music.play().catch(()=>{});


            musicBtn.innerHTML="🔊";


        }else{


            music.pause();


            musicBtn.innerHTML="🔇";


        }


    });


}





// =============================
// START WITH SILENT MUSIC ICON
// =============================


if(music){

    music.volume = 0.5;

}

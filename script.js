
// ============================
// PROJECT BLISS V2
// MAIN FLOW
// ============================


const screens = document.querySelectorAll(".screen");



function go(id){


    screens.forEach(screen=>{


        screen.classList.remove("active");


    });



    const next = document.getElementById(id);



    if(next){


        next.classList.add("active");


    }


}





// ============================
// NETFLIX INTRO
// ============================


setTimeout(()=>{


    go("welcome");


},4000);





// ============================
// ENVELOPE
// ============================


const envelope = document.getElementById("envelopeBox");



if(envelope){


    envelope.addEventListener("click",()=>{


        go("letter");


        startTyping();


    });


}
// ============================
// LETTER TYPEWRITER
// ============================


const message = document.getElementById("message");


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



let letterIndex = 0;



function startTyping(){


    if(!message){

        return;

    }


    message.innerHTML = "";

    letterIndex = 0;


    type();


}



function type(){


    if(letterIndex < letter.length){


        message.innerHTML += letter.charAt(letterIndex);


        letterIndex++;


        setTimeout(type,35);


    }


}





// ============================
// MUSIC
// ============================


const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");



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
// ============================
// REPLAY
// ============================


function restart(){


    go("welcome");


}





// ============================
// AUTO MUSIC START ATTEMPT
// ============================


window.addEventListener("load",()=>{


    if(music){


        music.volume = 0.5;


    }


});

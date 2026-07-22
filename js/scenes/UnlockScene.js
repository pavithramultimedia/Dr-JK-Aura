/*=========================================================
        PROJECT AURORA 2.0
        UNLOCK SCENE
=========================================================*/

class UnlockScene{

    static start(){

        sceneManager.show("Unlock");
        AudioManager.play("unlock");

        const app=document.getElementById("app");

        app.innerHTML=`

<section class="unlockScene">

    <div class="unlockGlass">

        <h1 id="unlockTitle">
            ✨ ONE FINAL MEMORY ✨
        </h1>

        <p id="unlockText">

            Every great journey leaves behind unforgettable memories.

            One special moment is waiting just for you.

        </p>

        <button id="unlockFinal">

            🔓 UNLOCK

        </button>

    </div>

</section>

`;

        this.events();

    }

    static events(){

        document
        .getElementById("unlockFinal")
        .onclick=()=>{

            this.beginUnlock();

        };

    }

    static beginUnlock(){

        const title=document.getElementById("unlockTitle");
        const text=document.getElementById("unlockText");
        const button=document.getElementById("unlockFinal");

        button.style.display="none";

        title.innerHTML="🔓 ACCESS GRANTED";

        text.innerHTML="Decrypting Memory...";

        setTimeout(()=>{

            text.innerHTML="████████████░░";

        },1200);

        setTimeout(()=>{

            text.innerHTML="Memory Restored...";

        },2500);

        setTimeout(()=>{

            text.innerHTML="Preparing Final Surprise...";

        },3800);

        setTimeout(()=>{

            this.countdown();

        },5200);

    }
    /*==========================================
COUNTDOWN
==========================================*/

static countdown(){

    const glass=document.querySelector(".unlockGlass");

    glass.innerHTML=`

        <h1 id="countNumber">

            3

        </h1>

    `;

    let count=3;

    const timer=setInterval(()=>{

        count--;

        if(count>0){

            document.getElementById("countNumber").innerHTML=count;

            gsap.fromTo("#countNumber",
            {
                scale:0.5,
                opacity:0
            },
            {
                scale:1,
                opacity:1,
                duration:.5
            });

        }else{

            clearInterval(timer);

            this.playCelebration();

        }

    },1000);

}
/*==========================================
PLAY FINAL VIDEO
==========================================*/

static playCelebration(){

    const app=document.getElementById("app");

    app.innerHTML=`

<section class="memoriesScene">

<div class="videoModal show">

<video
id="celebrationVideo"
autoplay
controls
playsinline>

<source
src="assets/videos/memories/celebration.mp4"
type="video/mp4">

</video>

</div>

</section>

`;

    const video=document.getElementById("celebrationVideo");

video.onended = () => {

    gsap.to("#celebrationVideo",{

        opacity:0,

        duration:1,

        onComplete:()=>{

            ThankYouScene.start();

        }

    });

};

}   

}
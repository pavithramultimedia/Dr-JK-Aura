/*=========================================================
        PROJECT AURORA 2.0
        PREMIUM CAKE CEREMONY
=========================================================*/

class CakeScene{

    static start(){

        sceneManager.show("Cake Ceremony");
        AudioManager.play("cake");

        const app=document.getElementById("app");

        app.innerHTML=`

<section class="cakeScene">

    <div class="stageLight"></div>

    <div class="cakeCard">

        <h1 class="cakeTitle">
            🎉 Happy Birthday 🎉
        </h1>

        <h2 class="cakeSubtitle">
            Dr.K.Jayakarthik
        </h2>

        <div class="cakeContainer">

            <!-- LEFT CANDLE -->

            <div class="candles">

                <div class="candle leftCandle">

                    <div class="flame"></div>

                </div>

                <div class="candle rightCandle">

                    <div class="flame"></div>

                </div>

            </div>

            <!-- CAKE -->

            <img
                id="birthdayCake"
                src="assets/images/cake/birthday-cake.png"
                alt="Birthday Cake">

            <!-- KNIFE -->

            <img
                id="cakeKnife"
                src="assets/images/cake/knife.png"
                alt="Knife">

        </div>

        <h3 class="wishText">

            ✨ Wishing you continued success, good health, and happiness in the year ahead. May your special day be as wonderful as you are.  ✨

        </h3>

        <button id="cutCakeBtn">

            🎂 CUT THE CAKE

        </button>

    </div>

</section>

`;

        this.animate();

        this.events();

    }
/*==========================================
ANIMATE
==========================================*/

static animate(){

    const tl = gsap.timeline();

    /* Fade in scene */

    tl.from(".cakeScene",{

        opacity:0,

        duration:.8

    });

    /* Spotlight */

    tl.from(".stageLight",{

        scale:0,

        opacity:0,

        duration:1.2,

        ease:"power2.out"

    },"<");

    /* Card */

    tl.from(".cakeCard",{

        y:80,

        opacity:0,

        duration:1,

        ease:"back.out(1.7)"

    });

    /* Title */

    tl.from(".cakeTitle",{

        y:-50,

        opacity:0,

        duration:.8

    });

    /* Subtitle */

    tl.from(".cakeSubtitle",{

        y:-30,

        opacity:0,

        duration:.6

    });

    /* Cake */

    tl.from("#birthdayCake",{

        scale:.65,

        y:120,

        opacity:0,

        duration:1.2,

        ease:"back.out(1.8)"

    });

    /* Candles */

    tl.from(".leftCandle",{

        x:-40,

        opacity:0,

        duration:.5

    },"-=0.6");

    tl.from(".rightCandle",{

        x:40,

        opacity:0,

        duration:.5

    },"<");

    /* Wish */

    tl.from(".wishText",{

        opacity:0,

        scale:.8,

        duration:.7

    });

    /* Button */

    tl.from("#cutCakeBtn",{

        y:35,

        opacity:10,

        duration:.7

    });

    /* Floating Cake */

    gsap.to("#birthdayCake",{

        y:-10,

        duration:2.8,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

    /* Candle Flames */

    gsap.to(".flame",{

        scale:1.15,

        duration:.18,

        repeat:-1,

        yoyo:true,

        stagger:.08,

        ease:"power1.inOut"

    });

    /* Make A Wish */

    gsap.to(".wishText",{

        opacity:.55,

        duration:1,

        repeat:-1,

        yoyo:true

    });

    /* Button Glow */

    gsap.to("#cutCakeBtn",{

        boxShadow:"0 0 35px rgba(255,215,0,.85)",

        duration:1,

        repeat:-1,

        yoyo:true

    });

}

/*==========================================
EVENTS
==========================================*/

static events(){

    document
    .getElementById("cutCakeBtn")
    .addEventListener("click",()=>{

        this.cutCake();

    });

}
/*==========================================
CUT CAKE
==========================================*/

static cutCake(){

    const knife=document.getElementById("cakeKnife");
    const cake=document.getElementById("birthdayCake");
    const button=document.getElementById("cutCakeBtn");
    const flames=document.querySelectorAll(".flame");

    button.disabled=true;

    const tl=gsap.timeline();

    /*----------------------------------
    Button changes
    ----------------------------------*/

    tl.to(button,{

        duration:.2,

        scale:.95,

        onComplete:()=>{

            button.innerHTML="🔪 Cutting Cake...";

        }

    });

    /*----------------------------------
    Knife Appears
    ----------------------------------*/

    tl.set(knife,{

        opacity:1,

        x:420,

        rotation:-20

    });

    /*----------------------------------
    Knife Slides Towards Cake
    ----------------------------------*/

    tl.to(knife,{

        x:120,

        duration:.8,

        ease:"power2.out"

    });

    /*----------------------------------
    Knife Cuts Cake
    ----------------------------------*/

    tl.to(knife,{

        x:-80,

        y:10,

        rotation:8,

        duration:.55,

        ease:"power2.inOut"

    });

    /*----------------------------------
    Cake Shake
    ----------------------------------*/

    tl.to(cake,{

        x:-3,

        rotation:-1,

        duration:.08,

        repeat:5,

        yoyo:true

    },"<");

    /*----------------------------------
    Blow Out Candles
    ----------------------------------*/

    tl.to(flames,{

        opacity:0,

        scale:0,

        duration:.35,

        stagger:.05

    },"<");

    /*----------------------------------
    Knife Leaves
    ----------------------------------*/

    tl.to(knife,{

        opacity:0,

        x:-500,

        rotation:25,

        duration:.55

    });

    /*----------------------------------
    Celebration
    ----------------------------------*/

    tl.call(()=>{

        /* CONFETTI */

        confetti({

            particleCount:250,

            spread:110,

            startVelocity:55,

            origin:{y:.60}

        });
        setTimeout(()=>{

            BalloonEngine.start(25);

        },500);

        setTimeout(()=>{

            FireworkEngine.start(15);

        },1200);

        /* EXTRA CONFETTI */    

        setTimeout(()=>{

            confetti({

                particleCount:180,

                angle:60,

                spread:70,

                origin:{x:0}

            });

            confetti({

                particleCount:180,

                angle:120,

                spread:70,

                origin:{x:1}

            });

        },350);

    });


    /*----------------------------------
    GOLD PARTICLES
    ----------------------------------*/

    tl.call(()=>{

        if(window.ParticleEngine){

            ParticleEngine.start(100);

        }

    });

    /*----------------------------------
    Cake Glow
    ----------------------------------*/

    tl.to(cake,{

        filter:"drop-shadow(0 0 45px gold)",

        duration:.6

    });

    /*----------------------------------
    Button Changes
    ----------------------------------*/

    tl.to(button,{

        duration:.3,

        scale:1.05,

        onComplete:()=>{

            button.disabled=false;

            button.innerHTML="🎁 OPEN YOUR GIFT";

            button.onclick=()=>{

                GiftScene.start();

            };

        }

    });

}
}
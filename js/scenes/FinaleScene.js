/*=========================================================
                PROJECT AURORA
                GRAND FINALE
=========================================================*/

class FinaleScene{

    static start(){

        sceneManager.show("Grand Finale");
        AudioManager.play("finale");

        const app=document.getElementById("app");

        app.innerHTML=`

<section class="finaleScene">

    <!-- Golden Background -->

    <div class="finaleGlow"></div>

    <!-- Stars -->

    <div class="finaleStars"></div>

    <!-- Glass Card -->

    <div class="finaleCard">

        <img
            class="schoolLogo"
            src="assets/images/logo/logo.png"
            alt="School Logo">

        <img
            class="finalePhoto"
            src="assets/images/ceo/ceo.png"
            alt="CEO">

        <h1 class="happyTitle">

            ✨ HAPPY BIRTHDAY ✨

        </h1>

        <h2 class="ceoName">

            DR.K.JAYAKARTHIK CEO

        </h2>

        <p class="finalMessage">

            Thank you for inspiring
            thousands of dreams.

            <br><br>

            Your vision,
            kindness and leadership
            will continue to guide us
            for generations.

        </p>

        <div class="signature">

            ❤️ With Love ❤️

            <br>

            <span>

                Sri Krish Family

            </span>

        </div>

    </div>

</section>

`;

        this.animate();

    }

    /*==================================
ANIMATE
==================================*/

static animate(){

    const tl = gsap.timeline();

    tl.from(".finaleScene",{

        opacity:0,

        duration:1

    });

    tl.from(".finaleGlow",{

        scale:0,

        opacity:0,

        duration:1.5,

        ease:"power2.out"

    });

    tl.from(".schoolLogo",{

        y:-50,

        opacity:0,

        duration:1

    });

    tl.from(".finalePhoto",{

        opacity:0,

        y:-40,

        scale:.9,

        duration:1.2,

        ease:"power3.out",

        clearProps:"opacity,transform"

    });

    tl.from(".happyTitle",{

        y:40,

        opacity:0,

        duration:.8

    });

    tl.from(".ceoName",{

        opacity:0,

        duration:.8

    });

    tl.from(".finalMessage",{

        opacity:0,

        y:30,

        duration:1

    });

    tl.from(".signature",{

        opacity:0,

        y:20,

        duration:1

    });

    tl.from(".creator",{

        opacity:0,

        y:20,

        duration:1

    });

    /*==================================
    START CELEBRATION
    ==================================*/

    tl.call(()=>{

        if(typeof BalloonEngine!=="undefined"){

            BalloonEngine.start(40);

        }

        if(typeof FireworkEngine!=="undefined"){

            FireworkEngine.start(25);

        }

    });

    /*==================================
    CEO PHOTO FLOAT
    ==================================*/

    gsap.to(".finalePhoto",{

        y:-8,

        duration:3,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut",

        overwrite:"auto"

    });

    /*==================================
    HAPPY BIRTHDAY GLOW
    ==================================*/

    gsap.to(".happyTitle",{

        textShadow:"0 0 40px gold",

        duration:1,

        repeat:-1,

        yoyo:true

    });

    /*==================================
    CREATOR GLOW
    ==================================*/

    gsap.to(".creator strong",{

        color:"#FFD700",

        textShadow:"0 0 20px gold",

        duration:1,

        repeat:-1,

        yoyo:true

    });

    /*==================================
   /*==================================
CINEMATIC END
==================================*/

/* Start fading the background music */
tl.call(()=>{

    AudioManager.fadeOut(25);

});

/* Wait while the music fades */
tl.to({},{

    duration:8

});

/* Then fade the screen */

tl.to(".finaleScene",{

    opacity:0,

    duration:3,

    onComplete:()=>{

        document.getElementById("app").innerHTML=`

        <section class="finalThankPage">

            <div class="finalThankOverlay"></div>

            <div class="finalThankCard">

                <h1 class="finalThankTitle">

                    THANK YOU

                </h1>

                <h2 class="finalBirthdayText">

                    Happy Birthday

                </h2>

                <h2 class="finalCeoName">

                    DR.K.JAYAKARTHIK CEO

                </h2>

                <p class="finalTokenText">

                    A Small Token of Love & Gratitude

                </p>

                <p class="finalCreatorText">

                   ✨ Designed & Developed with ❤️ by Pavithra & Nachu ✨

                </p>

            </div>

        </section>

        `;

        FinaleScene.animateThankPage();

    }

});

}

/*==================================
FINAL THANK-PAGE ANIMATION
==================================*/

static animateThankPage(){

    const tl = gsap.timeline();

    tl.from(".finalThankPage",{

        opacity:0,

        scale:1.08,

        duration:2,

        ease:"power2.out"

    });

    tl.from(".finalThankOverlay",{

        opacity:0,

        duration:1.2

    },"-=1.5");

    tl.from(".finalThankCard",{

        opacity:0,

        y:70,

        scale:.9,

        duration:1.4,

        ease:"back.out(1.4)"

    },"-=1");

    tl.from(".finalThankTitle",{

        opacity:0,

        y:-35,

        duration:.8,

        ease:"power3.out"

    });

    tl.from(".finalBirthdayText",{

        opacity:0,

        y:20,

        duration:.7

    },"-=.3");

    tl.from(".finalCeoName",{

        opacity:0,

        scale:.8,

        duration:.8,

        ease:"back.out(1.5)"

    },"-=.2");

    tl.from(".finalTokenText",{

        opacity:0,

        y:25,

        duration:.8

    },"-=.2");

    tl.from(".finalCreatorText",{

        opacity:0,

        y:30,

        duration:1

    },"-=.2");

    gsap.to(".finalThankTitle",{

        textShadow:
            "0 0 15px #FFD700, 0 0 35px #FFD700",

        duration:1.5,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

    gsap.to(".finalThankPage",{

        backgroundPosition:"center 48%",

        duration:8,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

}

}
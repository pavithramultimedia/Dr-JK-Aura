/*=========================================================
                PROJECT AURORA
                GIFT SCENE
=========================================================*/

class GiftScene{
    static preloadAssets(){

    const images = [

        "assets/images/gift/gift-box.png",
        "assets/images/gift/gift-open.png",
        "assets/images/gift/real-gift.png",
        "assets/images/gift/left-gift.png",
        "assets/images/gift/right-gift.png"

    ];

    images.forEach(src => {

        const img = new Image();

        img.src = src;

    });

}

    static start(){

        sceneManager.show("Gift Scene");
        AudioManager.play("gift");

        const app=document.getElementById("app");

        app.innerHTML=`

<section class="giftScene">

    <!-- Background Glow -->

    <div class="giftGlow"></div>

    <!-- Glass Card -->

    <div class="giftCard">

        <h1 class="giftTitle">

            🎁 A Final Surprise

        </h1>

        <p class="giftSubtitle">

            Every great leader leaves behind
            countless hearts inspired.

        </p>

        <!-- Gift Container -->

        <div class="giftContainer">

            <!-- Gift Box -->

            <img
                id="giftBox"
                src="assets/images/gift/gift-box.png"
                alt="Gift Box">

            <!-- Real Gift -->

            <img
                id="realGift"
                src="assets/images/gift/real-gift.png"
                alt="Real Gift">

            <img
                id="leftGift"
                src="assets/images/gift/left-gift.png"
                alt="Gift Left">

            <img
                id="rightGift"
                src="assets/images/gift/right-gift.png"
                alt="Gift Right">                

        </div>

        <h3 class="giftQuote">

            ✨ One Last Memory Awaits ✨

        </h3>

        <button id="openGiftBtn">

            🎁 OPEN THE GIFT

        </button>

    </div>

</section>

`;

        this.animate();

        this.events();

    }

    /*==================================
    EVENTS
    ==================================*/

    static events(){

        document

        .getElementById("openGiftBtn")

        .onclick=()=>{

            this.openGift();

        };

    }

    /*==================================
    ANIMATION
    ==================================*/

static animate(){

    const tl = gsap.timeline();

    tl.from(".giftScene",{

        opacity:0,
        duration:.4

    });

    tl.from(".giftGlow",{

        scale:.7,
        opacity:0,
        duration:.6

    },"<");

    tl.from(".giftCard",{

        y:40,
        opacity:0,
        duration:.6,
        ease:"power3.out"

    },"-=0.2");

    tl.from(".giftTitle",{

        y:-20,
        opacity:0,
        duration:.4

    },"-=0.35");

    tl.from(".giftSubtitle",{

        opacity:0,
        duration:.35

    },"-=0.25");

    tl.from("#giftBox",{

        y:-60,
        scale:.8,
        opacity:0,
        duration:.7,
        ease:"back.out(1.4)"

    },"-=0.25");

    tl.from(".giftQuote",{

        opacity:0,
        duration:.35

    },"-=0.3");

tl.fromTo("#openGiftBtn",

{
    y:15,
    opacity:0
},

{
    y:0,
    opacity:1,
    duration:.4,
    clearProps:"opacity,transform"
},

"-=0.25");

    gsap.to("#giftBox",{

        y:-12,
        duration:2.8,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"

    });

    gsap.to("#openGiftBtn",{

        boxShadow:"0 0 35px rgba(255,215,0,.8)",
        duration:1,
        repeat:-1,
        yoyo:true

    });

}

    /*==================================
OPEN GIFT
==================================*/

static openGift(){

    const button = document.getElementById("openGiftBtn");
    const gift = document.getElementById("giftBox");
    const realGift = document.getElementById("realGift");
    const leftGift=document.getElementById("leftGift");
    const rightGift=document.getElementById("rightGift");

    button.disabled=true;
    gsap.killTweensOf(gift);    

    const tl=gsap.timeline();

/* Button */

tl.to(button,{

    scale:.95,

    duration:.2,

    onComplete:()=>{

        button.innerHTML="✨ Opening...";

        gsap.to(button,{

            opacity:0,

            duration:.5,

            onComplete:()=>{

                if(button){

        button.remove();

    }

            }

        });

    }

});

    /* Gift shakes */

    tl.to(gift,{

        rotation:-5,

        duration:.08,

        repeat:7,

        yoyo:true

    });

    /* Small jump */

    tl.to(gift,{

        y:-25,

        duration:.25,

        yoyo:true,

        repeat:1

    });

    /* Glow */

    tl.to(gift,{

        filter:"drop-shadow(0 0 80px gold)",

        duration:.5

    });

    /* Change image */

    tl.call(()=>{

    gift.src="assets/images/gift/gift-open.png";

    });

    /* Open animation */

    tl.fromTo(gift,

    {

        scale:1

    },

    {

        scale:1.08,

        duration:.45,

        yoyo:true,

        repeat:1

    });

    /* Golden flash */

    tl.call(()=>{

        this.createGoldenFlash();

    });
    /*==================================
REAL GIFT RISES
==================================*/

tl.fromTo(realGift,

{

    opacity:0,

    y:180,

    scale:.5

},

{

    opacity:1,

    y:-40,

    scale:1,

    duration:1.6,

    ease:"back.out(1.6)"

});
/*==================================
LEFT GIFT
==================================*/

tl.fromTo(leftGift,

{

    x:-180,

    opacity:0,

    scale:.5

},

{

    x:0,

    opacity:1,

    scale:1,

    duration:1,

    ease:"back.out(1.7)"

});

/*==================================
RIGHT GIFT
==================================*/

tl.fromTo(rightGift,

{

    x:180,

    opacity:0,

    scale:.5

},

{

    x:0,

    opacity:1,

    scale:1,

    duration:1,

    ease:"back.out(1.7)"

},"-=0.8");

/*==================================
FLOATING ANIMATION
==================================*/

tl.call(()=>{

    gsap.to(realGift,{

        y:"-=12",
        duration:2,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"

    });

});

tl.to({},{

    duration:0.8

});

tl.call(()=>{

    const giftBox =
        document.getElementById("giftBox");

    const giftQuote =
        document.querySelector(".giftQuote");

    if(giftBox){
        giftBox.style.display = "none";
    }

    if(giftQuote){
        giftQuote.style.display = "none";
    }

    this.showGiftMessage();

});

/* Sparkles */

tl.call(()=>{

    this.createSparkles();

});
}
/*==================================
GOLDEN FLASH
==================================*/

static createGoldenFlash(){

    const flash=document.createElement("div");

    flash.className="goldFlash";

    document.body.appendChild(flash);

    gsap.fromTo(flash,

    {

        opacity:0

    },

    {

        opacity:1,

        duration:.25,

        yoyo:true,

        repeat:1,

        onComplete(){

            flash.remove();

        }

    });

}
/*==================================
SPARKLES
==================================*/

static createSparkles(){

    for(let i=0;i<60;i++){

        const star=document.createElement("div");

        star.className="giftSparkle";

        document.body.appendChild(star);

        star.style.left=Math.random()*window.innerWidth+"px";

        star.style.top=Math.random()*window.innerHeight+"px";

        gsap.fromTo(star,

        {

            scale:0,

            opacity:0

        },

        {

            scale:1.4,

            opacity:1,

            duration:.5,

            yoyo:true,

            repeat:1,

            delay:Math.random(),

            onComplete(){

                star.remove();

            }

        });

    }

}
/*==================================
GIFT MESSAGE
==================================*/

static showGiftMessage(){

    const card=document.querySelector(".giftCard");

    const message=document.createElement("div");

    message.className="giftMessage";

    message.innerHTML=`

        <h2>A Small Token of Gratitude</h2>

        <p>

            With heartfelt appreciation,

            from the Sri Krish Family.

        </p>

        <button id="continueFinal">

            ➜ CONTINUE

        </button>

    `;

    card.appendChild(message);

    gsap.from(message,{

        opacity:0,

        y:40,

        duration:1

    });

    document.getElementById("continueFinal").onclick=()=>{

        FinaleScene.start();

    };

}

}
/*=========================================================
        PROJECT AURORA 2.0
        GALLERY SCENE
        LEADERSHIP LEGACY
=========================================================*/

class GalleryScene {

    /*==========================================
    LEADERSHIP DATA
    ==========================================*/

    static qualities = [

        {
            title:"Leader",
            image:"assets/images/memory/leader.jpg",
            quote:"A true leader inspires people to believe in themselves and builds a legacy through actions."
        },

        {
            title:"Mentor",
            image:"assets/images/memory/mentor.jpg",
            quote:"A mentor lights the path for others and helps them discover their greatest potential."
        },

        {
            title:"Visionary",
            image:"assets/images/memory/visionary.jpg",
            quote:"Vision is the courage to see tomorrow before anyone else can imagine it."
        },

        {
            title:"Kindness",
            image:"assets/images/memory/kindness.jpg",
            quote:"Kindness is remembered long after achievements are celebrated."
        },

        {
            title:"Love",
            image:"assets/images/memory/love.jpg",
            quote:"Leadership builds companies, love builds memories. My niece is my happiest success."
        },

        {
            title:"Legacy",
            image:"assets/images/memory/legacy.jpg",
            quote:"A legacy is built through the lives we inspire."
        },

        {
            title:"Priority",
            image:"assets/images/memory/priority.jpg",
            quote:"Great leaders always place people before position."
        },

        {
            title:"Celebration",
            image:"assets/images/memory/celebration.jpg",
            quote:"Celebrate every milestone with gratitude and humility."
        },

        {
            title:"Asset",
            image:"assets/images/memory/asset.jpg",
            quote:"The greatest asset of any institution is its people."
        },

        {
            title:"Honor",
            image:"assets/images/memory/honor.jpg",
            quote:"Honor is earned through integrity, consistency and trust."
        },

        {
            title:"Emperor",
            image:"assets/images/memory/emperor.jpg",
            quote:"True power is reflected through wisdom, humility and service."
        },

        {
            title:"Bond",
            image:"assets/images/memory/bond.jpg",
            quote:"A brother may lead an empire, but with his sister, he simply shares laughter, love, and unforgettable moments."
        },

        {
            title:"Aura",
            image:"assets/images/memory/aura.jpg",
            quote:"A positive aura inspires confidence without saying a word."
        },

        {
            title:"Manifestor",
            image:"assets/images/memory/manifestor.jpg",
            quote:"Dreams become reality when vision is followed by action."
        },

        {
            title:"Achiever",
            image:"assets/images/memory/achiever.jpg",
            quote:"Success belongs to those who never stop believing in their purpose."
        }

    ];

    /*==========================================
    START
    ==========================================*/

    static start(){

        sceneManager.show("Gallery");
        AudioManager.play("gallery");

        this.currentIndex = 0;

        const app = document.getElementById("app");

        app.innerHTML = `

<section class="galleryScene">

    <div class="galleryOverlay"></div>

    <div class="galleryCard">

        <div class="progress">

            <span id="progressText"></span>

        </div>

        <h1 id="qualityTitle"></h1>

        <div class="photoFrame">

            <img id="qualityImage">

        </div>

        <p id="qualityQuote"></p>

        <button id="nextQuality">

            NEXT →

        </button>

    </div>

</section>

`;

        this.loadQuality();

        this.events();

    }

/*==========================================
LOAD QUALITY
==========================================*/

static loadQuality(){

    const item = this.qualities[this.currentIndex];

    document.getElementById("progressText").textContent =
        `${this.currentIndex + 1} / ${this.qualities.length}`;

    document.getElementById("qualityTitle").textContent =
        item.title;

    document.getElementById("qualityImage").src =
        item.image;

    document.getElementById("qualityImage").alt =
        item.title;

    document.getElementById("qualityQuote").textContent =
        item.quote;

    const btn = document.getElementById("nextQuality");

    if(this.currentIndex === this.qualities.length - 1){

        btn.innerHTML = "🎂 Continue to Cake Ceremony";

    }else{

        btn.innerHTML = "NEXT →";

    }

    gsap.fromTo(".galleryCard",
    {
        opacity:0,
        y:40,
        scale:.96
    },
    {
        opacity:1,
        y:0,
        scale:1,
        duration:.8,
        ease:"power3.out"
    });

}

/*==========================================
EVENTS
==========================================*/

static events(){

    document
    .getElementById("nextQuality")
    .onclick = () => {

        if(this.currentIndex < this.qualities.length - 1){

            gsap.to(".galleryCard",{

                opacity:0,

                y:-30,

                duration:.35,

                onComplete:()=>{

                    this.currentIndex++;

                    this.loadQuality();

                }

            });

        }else{

            gsap.to(".galleryScene",{

                opacity:0,

                duration:1,

                ease:"power2.inOut",

                onComplete(){

                    GalleryScene.showCompletion();

                }

            });

        }

    };

}
/*==========================================
PREMIUM COMPLETION SCREEN
==========================================*/

static showCompletion(){

const app=document.getElementById("app");

app.innerHTML=`

<section class="galleryScene">

<div class="galleryOverlay"></div>

<div class="galleryCard completionCard">

<div class="completionIcon">

🏆

</div>

<h1>

THE LEGACY CONTINUES

</h1>

<h2>

Leadership Journey Completed

</h2>

<div class="progressCircle">

15 / 15

</div>

<p class="completionText">

Every picture tells a story.<br><br>

Every memory inspires.<br><br>

Every dream continues.

</p>

<button id="memoryButton">

🎬 ENTER THE MEMORY THEATRE

</button>

</div>

</section>

`;

document
.getElementById("memoryButton")
.onclick=()=>{

MemoriesScene.start();

};

}
}
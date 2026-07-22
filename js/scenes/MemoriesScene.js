    /*=========================================================
            PROJECT AURORA 2.0
            MEMORIES SCENE
    =========================================================*/

    class MemoriesScene {

        static start() {

            sceneManager.show("Memories");

            const app = document.getElementById("app");

            app.innerHTML = `

    <section class="memoriesScene">

        <div class="memoriesOverlay"></div>

        <div class="memoriesContainer">

            <div class="sectionTitle">

                <h1>Memorable Moments</h1>

                <p>A Journey of Inspiration</p>

            </div>

    <div class="videoGrid">

        ${this.createCard(
            "THE BEGINNING",
            "assets/videos/memories/intro.mp4",
            "A glimpse into an inspiring journey."
        )}

        ${this.createCard(
            "WORDS OF INSPIRATION",
            "assets/videos/memories/speech.mp4",
            "Words that inspire generations."
        )}

        <div class="videoCard lockedCard" id="continueGallery">

            <div class="lockedPreview">

                🔒

            </div>

            <div class="videoInfo">

                <h2>FINAL MEMORY</h2>

                <p>Complete all memories to unlock.</p>

            </div>

        </div>

    </div>

        </div>

<div id="videoModal" class="videoModal">

    <div class="videoWrapper">

        <div class="videoTopBar">

            <button id="prevVideo">

                ◀ Previous

            </button>

            <button id="closeVideo">

                ✕

            </button>

            <button id="nextVideo">

                Next ▶

            </button>

        </div>

        <video
            id="memoryVideo"
            controls
            autoplay
            playsinline
            preload="auto"
            controlsList="nodownload">

        </video>

    </div>

</div>

    </section>

    `;

            this.events();

            this.animate();

        }

        static createCard(title, video, description){

            return `

    <div class="videoCard" data-video="${video}">

        <video
    muted
    playsinline
    preload="metadata">

            <source src="${video}" type="video/mp4">

        </video>

        <div class="videoInfo">

            <h2>${title}</h2>

            <p>${description}</p>

        </div>

        <div class="playButton">

            ▶

        </div>

    </div>

    `;

    }

/*==========================================
VIDEO EVENTS
==========================================*/

static events(){

    const cards =
        document.querySelectorAll(
            ".videoCard:not(.lockedCard)"
        );

    const lockedCard =
        document.getElementById("continueGallery");

    const modal =
        document.getElementById("videoModal");

    const player =
        document.getElementById("memoryVideo");

    const close =
        document.getElementById("closeVideo");

    const previousButton =
        document.getElementById("prevVideo");

    const nextButton =
        document.getElementById("nextVideo");

    const videos = [

        "assets/videos/memories/intro.mp4",

        "assets/videos/memories/speech.mp4"

    ];

    let currentVideoIndex = 0;

    /*==================================
    LOAD AND PLAY VIDEO
    ==================================*/

    const playVideo = index => {

        if(index < 0 || index >= videos.length){

            return;

        }

        currentVideoIndex = index;

        player.pause();

        player.removeAttribute("src");

        player.load();

        player.src = videos[currentVideoIndex];

        player.currentTime = 0;

        player.load();

        modal.classList.add("show");

        AudioManager.fadeOut(1);

        setTimeout(()=>{

            player.play().catch(error=>{

                console.error(
                    "Video playback failed:",
                    error
                );

            });

        },100);

        this.updateVideoButtons(
            currentVideoIndex,
            videos.length
        );

    };

    /*==================================
    VIDEO CARD EVENTS
    ==================================*/

    cards.forEach((card,index)=>{

        const preview =
            card.querySelector("video");

        if(preview){

            preview.load();

            card.addEventListener(
                "mouseenter",
                ()=>{

                    preview.play().catch(()=>{});

                }
            );

            card.addEventListener(
                "mouseleave",
                ()=>{

                    preview.pause();

                    preview.currentTime = 0;

                }
            );

        }

        card.addEventListener("click",()=>{

            playVideo(index);

        });

    });

    /*==================================
    LOCKED CARD
    ==================================*/

    if(lockedCard){

        lockedCard.onclick = ()=>{

            UnlockScene.start();

        };

    }

    /*==================================
    PREVIOUS VIDEO
    ==================================*/

    previousButton.onclick = ()=>{

        if(currentVideoIndex > 0){

            playVideo(currentVideoIndex - 1);

        }

    };

    /*==================================
    NEXT VIDEO / UNLOCK
    ==================================*/

    nextButton.onclick = ()=>{

        if(currentVideoIndex < videos.length - 1){

            playVideo(currentVideoIndex + 1);

        }else{

            player.pause();

            modal.classList.remove("show");

            AudioManager.fadeIn(1.5);

            UnlockScene.start();

        }

    };

    /*==================================
    VIDEO FINISHED
    ==================================*/

    player.onended = ()=>{

        /*
        Video 1 automatically loads Video 2.
        Video 2 remains open so the user can
        click Next to enter the Unlock Scene.
        */

        if(currentVideoIndex < videos.length - 1){

            playVideo(currentVideoIndex + 1);

        }else{

            this.updateVideoButtons(
                currentVideoIndex,
                videos.length
            );

        }

    };

    /*==================================
    CLOSE VIDEO
    ==================================*/

    close.onclick = ()=>{

        player.pause();

        player.currentTime = 0;

        player.removeAttribute("src");

        player.load();

        modal.classList.remove("show");

        AudioManager.fadeIn(1.5);

    };

}

/*==========================================
UPDATE NAVIGATION BUTTONS
==========================================*/

static updateVideoButtons(currentIndex,totalVideos){

    const previousButton =
        document.getElementById("prevVideo");

    const nextButton =
        document.getElementById("nextVideo");

    if(!previousButton || !nextButton){

        return;

    }

    /* First video: disable Previous */

    previousButton.disabled =
        currentIndex === 0;

    previousButton.style.opacity =
        currentIndex === 0 ? ".45" : "1";

    previousButton.style.cursor =
        currentIndex === 0
            ? "not-allowed"
            : "pointer";

    /* Last video: Next opens Unlock Scene */

    if(currentIndex === totalVideos - 1){

        nextButton.innerHTML =
            "Unlock Final Memory 🔓";

    }else{

        nextButton.innerHTML =
            "Next ▶";

    }

}
static animate(){

    gsap.from(".sectionTitle",{

        y:-80,

        opacity:0,

        duration:1,

        ease:"power3.out"

    });

    gsap.from(".videoCard:not(.lockedCard)",{

        opacity:0,

        y:80,

        duration:1,

        stagger:.2,

        ease:"power3.out"

    });

    gsap.set(".lockedCard",{

        display:"flex",

        visibility:"visible",

        opacity:1

    });

    gsap.fromTo(".lockedCard",

    {

        opacity:0,

        y:80,

        scale:.92

    },

    {

        opacity:1,

        y:0,

        scale:1,

        duration:1,

        delay:.45,

        ease:"back.out(1.5)",

        clearProps:"transform"

    });

}
    }
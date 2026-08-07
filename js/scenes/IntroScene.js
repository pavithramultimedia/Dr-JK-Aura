/*=========================================================
                PROJECT AURORA v2.0
                INTRO SCENE
=========================================================*/

class IntroScene {

    static started = false;

    static start() {

        sceneManager.show("Intro");

        const app = document.getElementById("app");

        app.innerHTML = `

<section class="intro-stage" id="introStage">

    <div class="golden-light"></div>

    <div class="light-ring"></div>

    <img
        src="assets/images/logo.png"
        class="school-logo"
        alt="School Logo">

    <div class="intro-text">

        <h2 class="tribute">
            Every great story begins with a dream...
        </h2>

        <h1 class="leader">
            Every dream becomes a legacy...
            Today, we celebrate the person behind that legacy.
        </h1>

    </div>

    <div class="introClick">

        CLICK ANYWHERE TO BEGIN

    </div>

</section>

`;

        IntroScene.particleEngine = new ParticleEngine(180);

        document
            .getElementById("introStage")
            .addEventListener(
                "click",
                IntroScene.begin,
                { once: true }
            );

    }

    /*====================================
            START INTRO
    ====================================*/

    static begin() {

        if (IntroScene.started) return;

        IntroScene.started = true;

        // Unlock browser autoplay
        AudioManager.play("intro");

        gsap.to(".introClick", {

            opacity: 0,
            duration: .4

        });

        IntroScene.timeline();

    }

    /*====================================
            INTRO ANIMATION
    ====================================*/

    static timeline() {

        const tl = gsap.timeline();

        tl.from(".golden-light", {

            scale: 0,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out"

        })

        .to(".golden-light", {

            scale: 18,
            duration: 3,
            ease: "power2.out"

        })

        .from(".school-logo", {

            scale: .35,
            opacity: 0,
            duration: 2,
            ease: "back.out(1.8)"

        }, "-=2")

        .from(".tribute", {

            y: 40,
            opacity: 0,
            duration: 1

        })

        .from(".leader", {

            y: 50,
            opacity: 0,
            duration: 1.2

        })

        .to(".intro-stage", {

            opacity: 0,
            duration: 2,
            delay: 2,

onComplete() {

    PasswordScene.start();

}

        });

    }

}
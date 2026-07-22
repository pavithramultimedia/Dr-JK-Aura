/*=========================================================
        PROJECT AURORA v2.0
              HERO SCENE V3.1
=========================================================*/

class HeroScene {

    static typeTimer = null;
    static transitioning = false;

    static start() {

        HeroScene.transitioning = false;

        sceneManager.show("Hero");

        // Change Password BGM -> Hero BGM
AudioManager.play("hero");

        const app = document.getElementById("app");

        app.innerHTML = `

<section class="heroScene">

    <img src="assets/images/hero-bg.jpg"
         class="heroBG"
         alt="Background">

    <div class="heroOverlay"></div>

    <div class="heroFog"></div>

    <div id="heroParticles"></div>

    <div class="heroCard">

        <div class="photoContainer">

            <div class="photoGlow"></div>

            <div class="photoWrapper">

                <img src="assets/images/ceo.png"
                     class="ceoPhoto"
                     alt="Dr. K. Jayakarthik">

            </div>

        </div>

        <div class="heroContent">

            <span class="birthdayBadge">
                🎉 HAPPY BIRTHDAY SIR 🎉
            </span>

            <h1>DR. K. JAYAKARTHIK</h1>

            <h1>CEO</h1>

            <h3>SRI KRISH GROUP OF SCHOOLS</h3>

            <div class="divider"></div>

            <p id="typeQuote" class="heroQuote"></p>

            <button id="journeyButton">
                Begin the Celebration
            </button>

        </div>

    </div>

</section>

`;

        HeroScene.createParticles();
        HeroScene.animate();
        HeroScene.typeWriter();
        HeroScene.events();

    }

    /*================================*/

    static createParticles() {

        const container = document.getElementById("heroParticles");

        container.innerHTML = "";

        for (let i = 0; i < 150; i++) {

            const particle = document.createElement("span");

            particle.className = "particle";

            particle.style.left = Math.random() * 100 + "%";
            particle.style.top = Math.random() * 100 + "%";
            particle.style.animationDuration = (8 + Math.random() * 8) + "s";
            particle.style.animationDelay = Math.random() * 5 + "s";
            particle.style.opacity = .2 + Math.random() * .8;
            particle.style.transform = `scale(${0.3 + Math.random()})`;

            container.appendChild(particle);

        }

    }

    /*================================*/

    static animate() {

        const tl = gsap.timeline();

        tl.from(".heroCard", {

            opacity: 0,
            scale: 0.82,
            y: 80,
            duration: 1.5,
            ease: "power4.out"

        })

        .from(".photoWrapper", {

            opacity: 0,
            scale: 0.6,
            duration: 1,
            ease: "back.out(1.7)"

        }, "-=1")

        .from(".birthdayBadge", {

            opacity: 0,
            y: -25,
            duration: 0.5

        })

        .from(".heroContent h1", {

            opacity: 0,
            y: 35,
            stagger: 0.15,
            duration: 0.8

        })

        .from(".heroContent h3", {

            opacity: 0,
            y: 25,
            duration: 0.6

        })

        .from(".divider", {

            width: 0,
            duration: 0.8

        })

        .from("#typeQuote", {

            opacity: 0,
            duration: 1

        })

        .fromTo("#journeyButton",

            {
                opacity: 0,
                y: 30
            },

            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1.5
            }

        );

    }

    /*================================*/

    static typeWriter() {

        const quote =
            "A true leader creates opportunities, inspires dreams, empowers people and leaves behind a legacy that transforms generations.";

        const box = document.getElementById("typeQuote");

        box.textContent = "";

        if (HeroScene.typeTimer) {

            clearInterval(HeroScene.typeTimer);

        }

        let i = 0;

        HeroScene.typeTimer = setInterval(() => {

            box.textContent += quote.charAt(i);

            i++;

            if (i >= quote.length) {

                clearInterval(HeroScene.typeTimer);

            }

        }, 28);

    }

    /*================================*/

    static events() {

        const button = document.getElementById("journeyButton");

        button.onclick = () => {

            if (HeroScene.transitioning) return;

            HeroScene.transitioning = true;

            if (typeof SoundManager !== "undefined") {

                SoundManager.play("click");

            }

            gsap.to(".heroScene", {

                opacity: 0,
                scale: 0.98,
                duration: 1,
                ease: "power2.inOut",

                onComplete() {

                    if (HeroScene.typeTimer) {

                        clearInterval(HeroScene.typeTimer);

                    }

                    GalleryScene.start();

                }

            });

        };

    }

}
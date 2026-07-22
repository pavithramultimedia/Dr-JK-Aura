/*====================================================
        PROJECT AURORA v2.0
              PASSWORD SCENE
=====================================================*/

class PasswordScene {

    static start() {

        sceneManager.show("Password");

        // Change Intro BGM -> Password BGM
        AudioManager.play("password");

        const app = document.getElementById("app");

        app.innerHTML = `

<section class="password-scene">

    <div class="vault-glow"></div>

    <div class="vault" id="vaultDoor">

        <div class="vault-ring"></div>

        <div class="vault-wheel">
            <div class="vault-center"></div>
        </div>

        <div class="vault-panel">

            <h1>HAPPY SPRINKLE</h1>

            <p class="subtitle">
                SHIELD GREETINGS
            </p>

            <input
                id="passwordInput"
                type="password"
                placeholder="Enter Your Girlfriend Name"
                autocomplete="off">

            <button id="unlockBtn">
                🔓 UNLOCK VAULT
            </button>

            <p id="message"></p>

        </div>

    </div>

</section>

`;

        this.animate();
        this.events();

    }

    /*====================================*/

    static animate() {

        gsap.from(".vault", {
            scale: 0.6,
            opacity: 0,
            duration: 2,
            ease: "power4.out"
        });

        gsap.from(".vault-glow", {
            opacity: 0,
            scale: 0.3,
            duration: 3
        });

        gsap.to(".vault-wheel", {
            rotation: 360,
            duration: 35,
            repeat: -1,
            ease: "none"
        });

    }

    /*====================================*/

    static events() {

        const btn = document.getElementById("unlockBtn");
        const input = document.getElementById("passwordInput");

        btn.onclick = () => {

            if (typeof SoundManager !== "undefined") {
                SoundManager.play("click");
            }

            PasswordScene.unlock();

        };

        input.addEventListener("keydown", (e) => {

            if (e.key === "Enter") {

                if (typeof SoundManager !== "undefined") {
                    SoundManager.play("click");
                }

                PasswordScene.unlock();

            }

        });

    }

    /*====================================*/

    static unlock() {

        const password =
            document.getElementById("passwordInput").value.trim();

        const message =
            document.getElementById("message");

        if (password !== CONFIG.PASSWORD) {

            if (typeof SoundManager !== "undefined") {
                SoundManager.play("wrong");
            }

            message.style.color = "#ff4b4b";
            message.innerHTML = "❌ Incorrect Password";

            gsap.fromTo(".vault",
                { x: -12 },
                {
                    x: 12,
                    duration: 0.08,
                    repeat: 5,
                    yoyo: true
                });

            return;
        }

        if (typeof SoundManager !== "undefined") {
            SoundManager.play("success");
        }

        message.style.color = "#00ff88";
        message.innerHTML = "✅ ACCESS GRANTED";

        PasswordScene.openVault();

    }

    /*====================================*/

    static openVault() {

        if (typeof SoundManager !== "undefined") {
            SoundManager.play("unlock");
        }

        const tl = gsap.timeline();

        tl.to(".vault-wheel", {
            rotation: "+=720",
            duration: 2,
            ease: "power4.inOut"
        })

        .to(".vault", {
            scale: 0.95,
            duration: 0.5
        })

        .to(".vault-glow", {
            opacity: 1,
            scale: 4,
            duration: 2
        }, "-=.3")

        .to("#vaultDoor", {
            rotationY: -110,
            transformOrigin: "left center",
            duration: 2,
            ease: "power3.inOut"
        })

        .to(".password-scene", {
            opacity: 0,
            duration: 1.5,
            delay: 0.5,

            onComplete() {

                HeroScene.start();

            }

        });

    }

}
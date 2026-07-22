/*=========================================================
        PROJECT AURORA 2.0
        PREMIUM FIREWORK ENGINE
=========================================================*/

class FireworkEngine {

    static colors = [
        "#FFD700",
        "#FFFFFF",
        "#00E5FF",
        "#FF4D4D",
        "#FF69B4",
        "#7CFC00",
        "#FFA500",
        "#00FFFF",
        "#DA70D6"
    ];

    static start(count = 12) {

        for (let i = 0; i < count; i++) {

            setTimeout(() => {

                FireworkEngine.launchRocket();

            }, i * 450);

        }

    }

    /*==========================================
        ROCKET
    ==========================================*/

    static launchRocket() {

        const rocket = document.createElement("div");

        rocket.style.position = "fixed";
        rocket.style.width = "5px";
        rocket.style.height = "18px";
        rocket.style.borderRadius = "50px";
        rocket.style.background = "#FFD700";
        rocket.style.boxShadow =
            "0 0 12px gold,0 0 25px white";
        rocket.style.pointerEvents = "none";
        rocket.style.zIndex = "999999";

        const startX = 80 + Math.random() * (window.innerWidth - 160);

        rocket.style.left = startX + "px";
        rocket.style.bottom = "-30px";

        document.body.appendChild(rocket);

        const targetY = 80 + Math.random() * (window.innerHeight * 0.35);

        gsap.to(rocket, {

            duration: 1.2,

            ease: "power2.out",

            y: -(window.innerHeight - targetY),

            onComplete: () => {

                const rect = rocket.getBoundingClientRect();

                rocket.remove();

                FireworkEngine.explode(
                    rect.left,
                    rect.top
                );

            }

        });

    }

    /*==========================================
        EXPLOSION
    ==========================================*/

    static explode(x, y) {

        FireworkEngine.flash(x, y);

        const totalParticles = 180;

        for (let i = 0; i < totalParticles; i++) {

            const particle = document.createElement("div");

            particle.className = "firework";

            const size = 3 + Math.random() * 6;

            particle.style.width = size + "px";
            particle.style.height = size + "px";

            const color =
                FireworkEngine.colors[
                    Math.floor(
                        Math.random() *
                        FireworkEngine.colors.length
                    )
                ];

            particle.style.background = color;
            particle.style.left = x + "px";
            particle.style.top = y + "px";

            particle.style.boxShadow =
                `0 0 8px ${color},
                 0 0 20px ${color},
                 0 0 35px white`;

            document.body.appendChild(particle);

            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                120 + Math.random() * 180;

            const dx =
                Math.cos(angle) * distance;

            const dy =
                Math.sin(angle) * distance;

            gsap.to(particle, {

                duration: 1.8 + Math.random() * .6,

                x: dx,

                y: dy + 150,

                opacity: 0,

                scale: 0,

                rotation:
                    Math.random() * 720,

                ease: "power2.out",

                onComplete() {

                    particle.remove();

                }

            });

            /* sparkle */

            if (Math.random() < .20) {

                FireworkEngine.sparkle(x, y);

            }

        }

    }

    /*==========================================
        FLASH
    ==========================================*/

    static flash(x, y) {

        const flash = document.createElement("div");

        flash.style.position = "fixed";
        flash.style.left = x + "px";
        flash.style.top = y + "px";
        flash.style.width = "10px";
        flash.style.height = "10px";
        flash.style.borderRadius = "50%";
        flash.style.background = "white";
        flash.style.pointerEvents = "none";
        flash.style.zIndex = "999999";
        flash.style.boxShadow =
            "0 0 40px white,0 0 80px gold";

        document.body.appendChild(flash);

        gsap.fromTo(
            flash,
            {
                scale: 0
            },
            {
                scale: 8,
                opacity: 0,
                duration: .35,
                ease: "power2.out",
                onComplete() {

                    flash.remove();

                }

            }
        );

    }

    /*==========================================
        SPARKLES
    ==========================================*/

    static sparkle(x, y) {

        const star = document.createElement("div");

        star.innerHTML = "✦";

        star.style.position = "fixed";
        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.color = "#FFF8DC";
        star.style.fontSize =
            12 + Math.random() * 10 + "px";
        star.style.pointerEvents = "none";
        star.style.zIndex = "999999";

        document.body.appendChild(star);

        gsap.to(star, {

            duration: 1.4,

            x:
                (Math.random() - .5) * 180,

            y:
                (Math.random() - .5) * 180,

            opacity: 0,

            rotation: 360,

            scale: 0,

            ease: "power2.out",

            onComplete() {

                star.remove();

            }

        });

    }

}
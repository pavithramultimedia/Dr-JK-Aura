/*=========================================
    PROJECT AURORA
    PARTICLE ENGINE
=========================================*/

class ParticleEngine{

    constructor(count = 70){

        this.canvas = document.createElement("canvas");

        this.canvas.id = "particleCanvas";

        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");

        this.animationId = null;

        this.resizeHandler = () => this.resize();

        this.resize();

        this.particles = [];

        this.createParticles(count);

        window.addEventListener(
            "resize",
            this.resizeHandler
        );

        this.animate();

    }

    resize(){

        this.canvas.width = window.innerWidth;

        this.canvas.height = window.innerHeight;

    }

    createParticles(count){

        this.particles = [];

        for(let i = 0; i < count; i++){

            this.particles.push({

                x:Math.random() * this.canvas.width,

                y:Math.random() * this.canvas.height,

                r:Math.random() * 2 + 1,

                speed:Math.random() * 0.6 + 0.2,

                alpha:Math.random()

            });

        }

    }

    animate(){

        this.ctx.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        this.particles.forEach(p=>{

            p.y -= p.speed;

            if(p.y < 0){

                p.y = this.canvas.height;

                p.x = Math.random() * this.canvas.width;

            }

            this.ctx.beginPath();

            this.ctx.arc(
                p.x,
                p.y,
                p.r,
                0,
                Math.PI * 2
            );

            this.ctx.fillStyle =
                `rgba(255,215,0,${p.alpha})`;

            this.ctx.fill();

        });

        this.animationId = requestAnimationFrame(
            () => this.animate()
        );

    }

    destroy(){

        if(this.animationId){

            cancelAnimationFrame(this.animationId);

            this.animationId = null;

        }

        window.removeEventListener(
            "resize",
            this.resizeHandler
        );

        if(this.canvas){

            this.canvas.remove();

        }

        this.particles = [];

    }

}
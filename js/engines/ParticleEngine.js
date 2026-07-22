/*=========================================
    PROJECT AURORA
    PARTICLE ENGINE
=========================================*/

class ParticleEngine{

    constructor(){

        this.canvas=document.createElement("canvas");

        this.canvas.id="particleCanvas";

        document.body.appendChild(this.canvas);

        this.ctx=this.canvas.getContext("2d");

        this.resize();

        this.particles=[];

        this.createParticles();

        window.addEventListener("resize",()=>this.resize());

        this.animate();

    }

    resize(){

        this.canvas.width=window.innerWidth;

        this.canvas.height=window.innerHeight;

    }

    createParticles(){

        this.particles=[];

        for(let i=0;i<180;i++){

            this.particles.push({

                x:Math.random()*this.canvas.width,

                y:Math.random()*this.canvas.height,

                r:Math.random()*2+1,

                speed:Math.random()*0.6+0.2,

                alpha:Math.random()

            });

        }

    }

    animate(){

        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        this.particles.forEach(p=>{

            p.y-=p.speed;

            if(p.y<0){

                p.y=this.canvas.height;

                p.x=Math.random()*this.canvas.width;

            }

            this.ctx.beginPath();

            this.ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

            this.ctx.fillStyle=`rgba(255,215,0,${p.alpha})`;

            this.ctx.fill();

        });

        requestAnimationFrame(()=>this.animate());

    }

}
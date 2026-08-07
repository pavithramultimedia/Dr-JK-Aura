/*=========================================================
        PROJECT AURORA 2.0
        THANK YOU SCENE
=========================================================*/

class ThankYouScene{

    static start(){

        sceneManager.show("Thank You");
        AudioManager.play("thankyou");

        const app=document.getElementById("app");

        app.innerHTML=`

<section class="thankScene">

<div class="thankOverlay"></div>

<div class="thankCard">

<h1 id="thankTitle">

💖 THANK YOU

</h1>

<p id="typeMessage"></p>

<button id="celebrateBtn">

🎂 CELEBRATE TOGETHER

</button>

</div>

</section>

`;

        this.typeMessage();

    }

static typeMessage(){

    const text = `Dear Dr.K.Jayakarthik, CEO

Your vision has built more than a school—it has built confidence, character, and countless dreams.

Every classroom reflects your dedication.
Every student's success reflects your leadership.
Every smile on this campus reflects your kindness.

Thank you for inspiring generations of learners and for creating an environment where every child can dream, learn, and succeed.

May your journey continue to illuminate countless more lives with wisdom, compassion, and excellence.

Happy Birthday!

With love and gratitude,

Sri Krish International School Family

Crafted with admiration by Pavithra & Nachu`;
        const target=document.getElementById("typeMessage");

        const button=document.getElementById("celebrateBtn");

        button.style.display="none";

        let i=0;

        const timer=setInterval(()=>{

            target.innerHTML+=text.charAt(i);

            i++;

            if(i>=text.length){

                clearInterval(timer);

                gsap.to(button,{
                    display:"block",
                    opacity:1,
                    y:0,
                    duration:1
                });

            }

        },25);

        button.onclick=()=>{

            CakeScene.start();

        };

    }

}
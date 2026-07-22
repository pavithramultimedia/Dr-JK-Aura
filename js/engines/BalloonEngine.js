/*=========================================================
            PROJECT AURORA
            BALLOON ENGINE
=========================================================*/

class BalloonEngine{

    static start(count = 20){

        for(let i = 0; i < count; i++){

            const balloon = document.createElement("div");

            balloon.className = "balloon";

            const colors = [

                "#ff4d4d",
                "#FFD700",
                "#ffffff",
                "#ff7f50",
                "#ff1493"

            ];

            balloon.style.background =
                colors[Math.floor(Math.random()*colors.length)];

            balloon.style.left =
                Math.random()*100 + "vw";

            balloon.style.width =
                (40 + Math.random()*25) + "px";

            balloon.style.height =
                (55 + Math.random()*35) + "px";

            balloon.style.animationDuration =
                (8 + Math.random()*5) + "s";

            balloon.style.animationDelay =
                (Math.random()*2) + "s";

            document.body.appendChild(balloon);

            setTimeout(()=>{

                balloon.remove();

            },15000);

        }

    }

}
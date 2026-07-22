/*=========================================================
                PROJECT AURORA v2.0
                AUDIO MANAGER
=========================================================*/


class AudioManager {

    static audio = null;
    static currentTrack = "";
    static volume = 1.0;
    static BASE_PATH = "assets/audio/";

    /*==================================
        PLAY NEW TRACK
    ==================================*/

    static play(trackName){
        console.trace("AudioManager.play:", trackName);

        console.log("Requested:", trackName);

        // Already playing
        if(this.currentTrack === trackName && this.audio){
            return;
        }

        const newTrack = new Audio(`${this.BASE_PATH}${trackName}.mp3`);

        newTrack.loop = true;
        newTrack.preload = "auto";
        newTrack.volume = 0;

        // Fade old music
        if(this.audio){

            const oldAudio = this.audio;

            gsap.killTweensOf(oldAudio);

            gsap.to(oldAudio,{

                volume:0,

                duration:1,

                onComplete:()=>{

                    oldAudio.pause();
                    oldAudio.currentTime = 0;

                    newTrack.play()
                    .then(()=>{

                        gsap.to(newTrack,{

                            volume:this.volume,

                            duration:1.5

                        });

                    })
                    .catch(console.error);

                }

            });

        }else{

            newTrack.play()
            .then(()=>{

                gsap.to(newTrack,{

                    volume:this.volume,

                    duration:1.5

                });

            })
            .catch(console.error);

        }

        this.audio = newTrack;
        this.currentTrack = trackName;

    }

    /*==================================
        PAUSE
    ==================================*/

    static pause(){

        if(this.audio){

            this.audio.pause();

        }

    }

    /*==================================
        RESUME
    ==================================*/

    static resume(){

        if(this.audio){

            this.audio.play().catch(()=>{});

        }

    }

    /*==================================
        STOP
    ==================================*/

    static stop(){

        if(!this.audio) return;

        gsap.killTweensOf(this.audio);

        this.audio.pause();

        this.audio.currentTime = 0;

        this.audio = null;

        this.currentTrack = "";

    }

/*==================================
    FADE OUT
==================================*/

static fadeOut(seconds = 1.5){

    if(!this.audio) return;

    const oldAudio = this.audio;

    gsap.killTweensOf(oldAudio);

    gsap.to(oldAudio,{

        volume:0,

        duration:seconds,

        onComplete:()=>{

            oldAudio.pause();
            oldAudio.currentTime = 0;

        }

    });

}

    /*==================================
        FADE IN
    ==================================*/

    static fadeIn(seconds = 1.5){

        if(!this.audio) return;

        gsap.killTweensOf(this.audio);

        gsap.to(this.audio,{

            volume:this.volume,

            duration:seconds

        });

    }

    /*==================================
        SET VOLUME
    ==================================*/

    static setVolume(value){

        this.volume = value;

        if(this.audio){

            this.audio.volume = value;

        }

    }

}
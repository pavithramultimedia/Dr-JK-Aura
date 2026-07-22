class SoundManager {

    static volume = 0.8;

    static BASE_PATH = "assets/audio/";

    static play(soundName){

        const sound = new Audio(`${this.BASE_PATH}${soundName}.mp3`);

        sound.volume = this.volume;

        sound.preload = "auto";

        sound.play().catch(() => {

            console.log("Sound blocked.");

        });

    }

    static setVolume(value){

        this.volume = value;

    }

}
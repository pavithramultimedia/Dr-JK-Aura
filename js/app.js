window.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 Aurora Started");

    IntroScene.start();

    document.addEventListener("pointerdown", unlockAudio, { once:true });

});

function unlockAudio(){

    const audio = new Audio();

    audio.play().catch(()=>{});

}
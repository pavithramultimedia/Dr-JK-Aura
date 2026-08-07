window.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 Aurora Started");

    const particleCount =
        window.innerWidth <= 768
            ? 55
            : 100;

    window.globalParticleEngine =
        new ParticleEngine(particleCount);

    IntroScene.start();

    document.addEventListener(
        "pointerdown",
        unlockAudio,
        { once:true }
    );

});

function unlockAudio(){

    const audio = new Audio();

    audio.play().catch(()=>{});

}
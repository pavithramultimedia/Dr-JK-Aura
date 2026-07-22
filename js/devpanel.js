/*==================================
AURORA DEV PANEL
==================================*/

const DEV_MODE = true;

window.addEventListener("DOMContentLoaded",()=>{

    if(!DEV_MODE) return;

    const panel=document.createElement("div");

    panel.id="devPanel";

    panel.innerHTML=`

    <h3>🛠 DEV PANEL</h3>

    <button onclick="IntroScene.start()">Intro</button>

    <button onclick="PasswordScene.start()">Password</button>

    <button onclick="HeroScene.start()">Hero</button>

    <button onclick="GalleryScene.start()">Gallery</button>

    <button onclick="MemoriesScene.start()">Videos</button>

    <button onclick="ThankYouScene.start()">Thank You</button>

    <button onclick="CakeScene.start()">Cake</button>

    <button onclick="GiftScene.start()">Gift</button>

    `;

    document.body.appendChild(panel);

});
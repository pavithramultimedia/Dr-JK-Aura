// =========================================
// PROJECT AURORA
// Scene Manager
// =========================================

class SceneManager {

    constructor() {

        this.currentScene = null;

    }

    show(sceneName) {

        console.clear();

        console.log("🎬 Scene:", sceneName);

        this.currentScene = sceneName;

    }

}

const sceneManager = new SceneManager();
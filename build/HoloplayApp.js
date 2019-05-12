class HoloplayApp {
    constructor(textureQuality, viewQuality, useEppRom = true) {
        var fov = 35;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 2, 10000);
        this.camera.position.set(0, 0, 38);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        var th = this;
        window.addEventListener("resize", function () { th.holoplay.onResize(); });
        this.holoplay = new HoloPlay(this.scene, this.camera, this.renderer, useEppRom);
        this.holoplay.init(textureQuality, viewQuality);
    }
    getFullscreen() { this.renderer.domElement.requestFullscreen(); }
    useBlackBorderAroundFullscreen(borderSize = 100) {
        this.holoplay.useBlackBorderAroundFullscreen(borderSize);
    }
    get fieldOfVision() { return this.camera.fov; }
    set fieldOfVision(n) {
        if (n < 1)
            n = 1;
        if (n > 179)
            n = 179;
        this.camera.fov = n;
        this.camera.updateProjectionMatrix();
    }
    addEventListener(eventName, func) { this.renderer.domElement.addEventListener(eventName, func); }
    update() {
        this.holoplay.update();
    }
}
//# sourceMappingURL=HoloplayApp.js.map
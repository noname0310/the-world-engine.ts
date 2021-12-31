import * as THREE from "three";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";
import { CameraContainer } from "./render/CameraContainer";
import { EngineGlobalObject } from "./EngineGlobalObject";
import { GameState, GameStateKind } from "./GameState";
import { Scene } from "./hierarchy_object/Scene";
import { SceneProcessor } from "./SceneProcessor";
import { Time } from "./time/Time";
import { GameScreen } from "./render/GameScreen";
import { Transform } from "./hierarchy_object/Transform";
import { CoroutineProcessor } from "./coroutine/CoroutineProcessor";
/**
 * game engine class
 */
export class Game {
    /**
     *
     * @param container html element that mount the game view
     */
    constructor(container) {
        this._rootScene = new Scene();
        this._gameScreen = new GameScreen(container.clientWidth, container.clientHeight);
        this._container = container;
        this._renderer = new CSS3DRenderer();
        this._renderer.setSize(container.clientWidth, container.clientHeight);
        this._renderer.domElement.style.width = "100%";
        this._renderer.domElement.style.height = "100%";
        this._cameraContainer = new CameraContainer((color) => {
            this._renderer.domElement.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${color.a})`;
        });
        this._clock = new THREE.Clock();
        this._time = new Time();
        this._gameState = new GameState(GameStateKind.WaitingForStart);
        this._sceneProcessor = new SceneProcessor();
        this._coroutineProcessor = new CoroutineProcessor(this._time);
        this._engineGlobalObject = new EngineGlobalObject(this._rootScene, this._cameraContainer, this._time, this._gameState, this._gameScreen, this._sceneProcessor, this._coroutineProcessor, this._renderer.domElement);
        this._animationFrameId = null;
        this._isDisposed = false;
        container.appendChild(this._renderer.domElement);
        this._renderer.domElement.onscroll = () => {
            this._renderer.domElement.scrollLeft = 0;
            this._renderer.domElement.scrollTop = 0;
        };
        this._resizeFrameBufferBind = this.resizeFramebuffer.bind(this);
        window.addEventListener("resize", this._resizeFrameBufferBind);
        this._loopBind = this.loop.bind(this);
    }
    resizeFramebuffer() {
        const width = this._container.clientWidth;
        const height = this._container.clientHeight;
        if (width === this._gameScreen.width && height === this._gameScreen.height)
            return;
        this._gameScreen.resize(width, height);
        this._renderer.setSize(width, height);
        this._renderer.domElement.style.width = "100%";
        this._renderer.domElement.style.height = "100%";
    }
    /**
     * run game
     * @param bootstrapperCtor
     * @param interopObject
     */
    run(bootstrapperCtor, interopObject) {
        if (this._isDisposed)
            throw new Error("Game is disposed.");
        if (this._gameState.kind !== GameStateKind.WaitingForStart)
            throw new Error("Game is already running.");
        this._gameState.kind = GameStateKind.Initializing;
        this._clock.start();
        this._time.startTime = this._clock.startTime;
        const bootstrapper = new bootstrapperCtor(this._engineGlobalObject, interopObject);
        const sceneBuilder = bootstrapper.run();
        const initializeComponents = sceneBuilder.build();
        this._sceneProcessor.init(initializeComponents);
        //If a camera exists in the bootstrapper,
        //it is certain that the camera exists in the global variable from this point on.
        if (!this._cameraContainer.camera)
            throw new Error("Camera is not exist in the scene.");
        this._gameState.kind = GameStateKind.Running;
        this._sceneProcessor.update();
        this._coroutineProcessor.updateAfterProcess();
        if (!this._cameraContainer.camera)
            throw new Error("Camera is not exist in the scene.");
        this._renderer.render(this._rootScene, this._cameraContainer.camera);
        this._coroutineProcessor.endFrameAfterProcess();
        this.loop();
    }
    loop() {
        this._animationFrameId = requestAnimationFrame(this._loopBind);
        this._time.deltaTime = this._clock.getDelta(); //order is matter.
        this._time.elapsedTime = this._clock.elapsedTime; //order is matter.
        this._sceneProcessor.update();
        this._coroutineProcessor.tryCompact();
        this._coroutineProcessor.updateAfterProcess();
        if (!this._cameraContainer.camera)
            throw new Error("Camera is not exist.");
        this._renderer.render(this._rootScene, this._cameraContainer.camera);
        this._coroutineProcessor.endFrameAfterProcess();
    }
    /**
     * stop game (you can resume game after game is stopped.)
     */
    stop() {
        if (this._isDisposed)
            throw new Error("Game is disposed.");
        if (this._gameState.kind !== GameStateKind.Running)
            throw new Error("Game is not running.");
        this._gameState.kind = GameStateKind.Stopped;
        if (this._animationFrameId)
            cancelAnimationFrame(this._animationFrameId);
        this._animationFrameId = null;
    }
    /**
     * resume game
     */
    resume() {
        if (this._isDisposed)
            throw new Error("Game is disposed.");
        if (this._gameState.kind !== GameStateKind.Stopped)
            throw new Error("Game is not stopped.");
        this._gameState.kind = GameStateKind.Running;
        this.loop();
    }
    /**
     * dispose game
     */
    dispose() {
        if (this._isDisposed)
            return;
        this._gameState.kind = GameStateKind.Finalizing;
        if (this._animationFrameId)
            cancelAnimationFrame(this._animationFrameId);
        this._engineGlobalObject.dispose();
        this._rootScene.children.slice().forEach(child => {
            if (child instanceof Transform)
                child.gameObject.destroy();
        });
        this._container.removeChild(this._renderer.domElement);
        window.removeEventListener("resize", this._resizeFrameBufferBind);
        this._isDisposed = true;
        this._gameState.kind = GameStateKind.Finalized;
    }
    /**
     * get inputHandler for eventhandle toggle.
     */
    get inputHandler() {
        return this._engineGlobalObject.input;
    }
    /**
     * get current game state
     */
    get currentGameState() {
        return this._gameState.kind;
    }
}

import { SceneBuilder } from "./SceneBuilder";
import { EngineGlobalObject } from "../EngineGlobalObject";
import { GameSetting, GameSettingObject } from "./setting/GameSetting";
import { Instantiater } from "../Instantiater";
import { DeepReadonly } from "../type/DeepReadonly";

/**
 * make game scene with interop object and scene builder
 * do not drive this class
 */
export abstract class Bootstrapper<T = any> {
    private _instantiater: Instantiater;
    private _interopObject: T|null;
    private _sceneBuilder: SceneBuilder;
    private _gameSetting: GameSetting;

    public constructor(engineGlobalObject: EngineGlobalObject, interopObject?: T) {
        this._instantiater = engineGlobalObject.instantiater;
        this._interopObject = interopObject || null;
        this._sceneBuilder = new SceneBuilder(engineGlobalObject.sceneProcessor);
        this._gameSetting = new GameSetting(GameSetting.createDefaultObject());
    }

    /** @internal */
    public getGameSettingObject(): DeepReadonly<GameSettingObject> {
        Object.freeze(this._gameSetting);
        return this._gameSetting.make();
    }

    /**
     * set game setting and make scene
     */
    public abstract run(): SceneBuilder;

    /**
     * get engine global object
     */
    protected get instantiater(): Instantiater {
        return this._instantiater;
    }
    
    /**
     * get interop object
     */
    protected get interopObject(): T|null {
        return this._interopObject;
    }

    /**
     * get scene builder
     */
    protected get sceneBuilder(): SceneBuilder {
        return this._sceneBuilder;
    }

    /**
     * get game setting, this value will be frozen after run
     */
    protected get setting(): GameSetting {
        return this._gameSetting;
    }
}

import { Component } from "../../hierarchy_object/Component";
import { ComponentConstructor } from "../../hierarchy_object/ComponentConstructor";
import { GridEventMap } from "./GridEventMap";
import { PlayerGridMovementController } from "../controller/PlayerGridMovementController";

export class PlayerGridEventInvoker extends Component {
    public override readonly disallowMultipleComponent: boolean = true;
    public override readonly requiredComponents: ComponentConstructor[] = [PlayerGridMovementController];

    private readonly _collideSize: number = 0.5;
    private _playerGridMovementController: PlayerGridMovementController|null = null;
    private _gridEventMaps: GridEventMap[] = [];
    private _onMoveToTargetBind: (x: number, y: number) => void = this.onMoveToTarget.bind(this);

    public awake(): void {
        this._playerGridMovementController = this.gameObject.getComponent(PlayerGridMovementController);
        this._playerGridMovementController!.addOnMoveToTargetEventListener(this._onMoveToTargetBind);
    }

    public onDestroy(): void {
        this._playerGridMovementController!.removeOnMoveToTargetEventListener(this._onMoveToTargetBind);
    }

    private onMoveToTarget(x: number, y: number): void {
        const gridCenter = this._playerGridMovementController!.gridCenter;
        const gridCellWidth = this._playerGridMovementController!.gridCellWidth;
        const gridCellHeight = this._playerGridMovementController!.gridCellHeight;
        const worldX = gridCenter.x + x * gridCellWidth;
        const worldY = gridCenter.y + y * gridCellHeight;
        this._gridEventMaps.forEach((gridEventMap) => {
            gridEventMap.tryInvokeEvent(worldX, worldY, this._collideSize, this._collideSize, this.gameObject);
        });
    }

    public addGridEventMap(gridEventMap: GridEventMap): void {
        this._gridEventMaps.push(gridEventMap);
    }
}

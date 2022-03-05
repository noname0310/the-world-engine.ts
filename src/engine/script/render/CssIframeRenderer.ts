import { Transform } from "../../hierarchy_object/Transform";
import { CssRenderer } from "./CssRenderer";

export class CssIframeRenderer extends CssRenderer<HTMLIFrameElement> {
    private _width = 4;
    private _height = 4;
    private _iframeSource = "";

    protected override renderInitialize(): void {
        this.htmlElement = document.createElement("iframe") as HTMLIFrameElement;
        this.htmlElement.title = this.gameObject.name + "_iframe";
        this.htmlElement.width = (this._width / this.viewScale).toString();
        this.htmlElement.height = (this._height / this.viewScale).toString();
        this.htmlElement.src = this._iframeSource;
        this.htmlElement.style.border = "none";
        const css3DObject = this.initializeBaseComponents(false);
        css3DObject.scale.set(this.viewScale, this.viewScale, this.viewScale);

        Transform.updateRawObject3DWorldMatrixRecursively(css3DObject);
        this.transform.enqueueRenderAttachedObject3D(css3DObject);
    }

    protected override updateCenterOffset(updateTransform: boolean): void {
        if (!this.css3DObject) return;

        this.css3DObject.position.set(
            this._width * this.centerOffset.x,
            this._height * this.centerOffset.y, 0
        );

        if (updateTransform) {
            Transform.updateRawObject3DWorldMatrixRecursively(this.css3DObject);
            this.transform.enqueueRenderAttachedObject3D(this.css3DObject);
        }
    }

    protected override updateViewScale(updateTransform: boolean): void {
        if (!this.css3DObject) return;

        const value = this.viewScale;
        this.htmlElement!.width = (this._width / this.viewScale).toString();
        this.htmlElement!.height = (this._height / this.viewScale).toString();
        this.css3DObject.scale.set(value, value, value);
        
        if (updateTransform) {
            Transform.updateRawObject3DWorldMatrixRecursively(this.css3DObject);
            this.transform.enqueueRenderAttachedObject3D(this.css3DObject);
        }
    }

    public get width(): number {
        return this._width;
    }

    public set width(value: number) {
        this._width = value;

        if (this.htmlElement) {
            this.htmlElement.width = (value / this.viewScale).toString();
        }
        this.updateCenterOffset(true);
    }

    public get height(): number {
        return this._height;
    }

    public set height(value: number) {
        this._height = value;

        if (this.htmlElement) {
            this.htmlElement.height = (value / this.viewScale).toString();
        }
        this.updateCenterOffset(true);
    }

    public get iframeSource(): string {
        return this._iframeSource;
    }

    public set iframeSource(value: string) {
        this._iframeSource = value;

        if (this.htmlElement) {
            this.htmlElement.src = value;
        }
    }

    public get element(): HTMLIFrameElement|null {
        return this.htmlElement;
    }
}

import { EventContainer, IEventContainer } from "../collection/EventContainer";
import { IInputEventHandleable } from "./IInputEventHandleable";

/**
 * engine global input event handler
 * do not drive this class
 */
export class InputHandler implements IInputEventHandleable {
    private _map: Map<string, boolean>;
    private _isDisposed: boolean;
    private _renderTargetDom: HTMLElement;
    private _onKeyDownEvent = new EventContainer<((event: KeyboardEvent) => void)>();
    private _onKeyUpEvent = new EventContainer<((event: KeyboardEvent) => void)>();
    private _onWheelEvent = new EventContainer<((event: WheelEvent) => void)>();
    private _onPointerDownEvent = new EventContainer<((event: MouseEvent) => void)>();
    private _onPointerUpEvent = new EventContainer<((event: MouseEvent) => void)>();
    private _onPointerEnterEvent = new EventContainer<((event: MouseEvent) => void)>();
    private _onPointerLeaveEvent = new EventContainer<((event: MouseEvent) => void)>();
    private _onPointerMoveEvent = new EventContainer<((event: MouseEvent) => void)>();
    private _touchMoveOccured = false;
    private _onTouchStartFunc: (() => void)|null = null;
    private _lastMouseDownEvent: MouseEvent|null = null;
    private _lastMouseEnterEvent: MouseEvent|null = null;

    /** @internal */
    public constructor(renderTargetDom: HTMLElement) {
        this._map = new Map<string, boolean>();
        this._isDisposed = false;
        this._renderTargetDom = renderTargetDom;
    }

    /**
     * keyboard input map. key is key name, value is pressed or not
     */
    public get map(): ReadonlyMap<string, boolean> {
        return this._map;
    }

    /**
     * stop event handle and dispose this object
     * @internal
     */
    public dispose(): void {
        this.stopHandleEvents();
        this._isDisposed = true;
    }

    /**
     * start engine global input event handling. you can use this when you want focus the game view
     */
    public startHandleEvents(): void {
        if (this._isDisposed) {
            throw new Error("InputHandler is disposed.");
        }
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
        window.addEventListener("wheel", this.handleWheel);
        this._renderTargetDom.addEventListener("mousedown", this.handleMouseDown);
        this._renderTargetDom.addEventListener("mouseup", this.handleMouseUp);
        this._renderTargetDom.addEventListener("mouseenter", this.handleMouseEnter);
        this._renderTargetDom.addEventListener("mouseleave", this.handleMouseLeave);
        this._renderTargetDom.addEventListener("mousemove", this.handleMouseMove);
        this._renderTargetDom.addEventListener("touchstart", this.handleTouchStart);
        this._renderTargetDom.addEventListener("touchend", this.handleTouchEnd);
        this._renderTargetDom.addEventListener("touchmove", this.handleTouchMove);
        this._renderTargetDom.addEventListener("touchcancel", this.handleTouchCancel);
    }

    /**
     * stop engine global input event handling. you can use this when you want blur the game view
     */
    public stopHandleEvents(): void {
        if (this._lastMouseDownEvent) this.handleMouseUp(this._lastMouseDownEvent);
        if (this._lastMouseEnterEvent) this.handleMouseLeave(this._lastMouseEnterEvent);

        this._map.clear();
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("keyup", this.handleKeyUp);
        window.removeEventListener("wheel", this.handleWheel);
        this._renderTargetDom.removeEventListener("mousedown", this.handleMouseDown);
        this._renderTargetDom.removeEventListener("mouseup", this.handleMouseUp);
        this._renderTargetDom.removeEventListener("mouseenter", this.handleMouseEnter);
        this._renderTargetDom.removeEventListener("mouseleave", this.handleMouseLeave);
        this._renderTargetDom.removeEventListener("mousemove", this.handleMouseMove);
        this._renderTargetDom.removeEventListener("touchstart", this.handleTouchStart);
        this._renderTargetDom.removeEventListener("touchend", this.handleTouchEnd);
        this._renderTargetDom.removeEventListener("touchmove", this.handleTouchMove);
        this._renderTargetDom.removeEventListener("touchcancel", this.handleTouchCancel);
    }

    private simulateMouseEvent(eventName: string, touch: Touch): void {
        const simulatedEvent = new MouseEvent(
            eventName, {
                bubbles: true, cancelable: true, view: window, detail: 1,
                screenX: touch.screenX, screenY: touch.screenY, clientX: touch.clientX, clientY: touch.clientY,
                ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, button: 0, relatedTarget: null
            });
        touch.target.dispatchEvent(simulatedEvent);
    }

    private handleKeyDown = (event: KeyboardEvent): void => {
        this._map.set(event.key, true);
        this._onKeyDownEvent.invoke(event);
    };
    
    private handleKeyUp = (event: KeyboardEvent): void => {
        this._map.set(event.key, false);
        this._onKeyUpEvent.invoke(event);
    };

    private handleWheel = (event: WheelEvent): void => {
        this._onWheelEvent.invoke(event);
    };

    private handleMouseDown = (event: MouseEvent): void => {
        this._lastMouseDownEvent = event;
        this._onPointerDownEvent.invoke(event);
    };

    private handleMouseUp = (event: MouseEvent): void => {
        this._lastMouseDownEvent = null;
        this._onPointerUpEvent.invoke(event);
    };

    private handleMouseEnter = (event: MouseEvent): void => {
        this._lastMouseEnterEvent = event;
        this._onPointerEnterEvent.invoke(event);
    };

    private handleMouseLeave = (event: MouseEvent): void => {
        this._lastMouseEnterEvent = null;
        this._onPointerLeaveEvent.invoke(event);
    };

    private handleMouseMove = (event: MouseEvent): void => {
        this._lastMouseDownEvent = event;
        this._onPointerMoveEvent.invoke(event);
    };

    private handleTouchStart = (event: TouchEvent): void => {
        this._onTouchStartFunc = () => {
            this.simulateMouseEvent("mouseenter", event.touches[0]);
            this.simulateMouseEvent("mousedown", event.touches[0]);
        };
    };

    private handleTouchEnd = (event: TouchEvent): void => {
        if (!this._touchMoveOccured) return;
        this._touchMoveOccured = false;
        this.simulateMouseEvent("mouseup", event.changedTouches[0]);
        this.simulateMouseEvent("mouseleave", event.changedTouches[0]);
    };

    private handleTouchMove = (event: TouchEvent): void => {
        if (this._onTouchStartFunc) {
            this._onTouchStartFunc();
            this._onTouchStartFunc = null;
        }
        this.simulateMouseEvent("mousemove", event.touches[0]);
        this._touchMoveOccured = true;
    };

    private handleTouchCancel = (event: TouchEvent): void => {
        if (!this._touchMoveOccured) return;
        this._touchMoveOccured = false;
        this.simulateMouseEvent("mouseleave", event.changedTouches[0]);
    };

    /**
     * this event will be invoked when key down event occured
     */
    public get onKeyDown(): IEventContainer<(event: KeyboardEvent) => void> {
        return this._onKeyDownEvent;
    }

    /**
     * this event will be invoked when key up event occured
     */
    public get onKeyUp(): IEventContainer<(event: KeyboardEvent) => void> {
        return this._onKeyUpEvent;
    }

    /**
     * this event will be invoked when wheel event occured
     */
    public get onWheel(): IEventContainer<(event: WheelEvent) => void> {
        return this._onWheelEvent;
    }

    /**
     * this event will be invoked when pointer down event occured
     */
    public get onPointerDown(): IEventContainer<(event: MouseEvent) => void> {
        return this._onPointerDownEvent;
    }

    /**
     * this event will be invoked when pointer up event occured
     */
    public get onPointerUp(): IEventContainer<(event: MouseEvent) => void> {
        return this._onPointerUpEvent;
    }

    /**
     * this event will be invoked when pointer enter event occured
     */
    public get onPointerEnter(): IEventContainer<(event: MouseEvent) => void> {
        return this._onPointerEnterEvent;
    }

    /**
     * onPointerLeave event
     * this event will be invoked when pointer leave event occured
     */
    public get onPointerLeave(): IEventContainer<(event: MouseEvent) => void> {
        return this._onPointerLeaveEvent;
    }

    /**
     * onPointerMove event
     * this event will be invoked when pointer move event occured
     */
    public get onPointerMove(): IEventContainer<(event: MouseEvent) => void> {
        return this._onPointerMoveEvent;
    }
}

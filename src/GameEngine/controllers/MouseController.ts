import { Renderer } from "../renderer/Renderer";
import { Vec2 } from "../utils/Vec2";
import { getCanvasHTMLElement } from "../utils/canvas";


export class MouseController {
    private renderer : Renderer;
    constructor(renderer : Renderer) {
        const canvasElement = getCanvasHTMLElement();
        canvasElement.addEventListener('mousedown', this.handleClick)
        canvasElement.addEventListener('mousemove', this.handleHover)
        canvasElement.addEventListener('wheel', this.handleScroll);
        this.renderer = renderer;
    }

    findEntityByMousePosition (mouseEvent: MouseEvent) {
        const {
            clientX,
            clientY,
        } = mouseEvent;

        const mousePosition : Vec2 = new Vec2(clientX, clientY);

        return this.renderer.findByCoords(mousePosition)!;
    }

    handleClick = (mouseEvent: MouseEvent) => {
        const foundEntity = this.findEntityByMousePosition(mouseEvent);

        if(foundEntity) {
            foundEntity!.onClick();
        }
    }

    handleHover = (mouseEvent: MouseEvent) => {
        const foundEntity = this.findEntityByMousePosition(mouseEvent);

        if(foundEntity) {
            foundEntity!.onHover();
        }
    }

    handleScroll = (mouseEvent: MouseEvent) => {
        const foundEntity = this.findEntityByMousePosition(mouseEvent);

        if(foundEntity) {
            foundEntity!.onScroll();
        }
    }

    destroy() {
        const canvasElement = getCanvasHTMLElement();
        canvasElement.removeEventListener('mousedown', this.handleClick)
        canvasElement.removeEventListener('mousemove', this.handleHover)
        canvasElement.removeEventListener('wheel', this.handleScroll);
    }
}
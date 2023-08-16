import { Entities } from "../Entities";
import { GameObject } from "../GameObject";
import { Vec2 } from "../Vec2";
import { getCanvasHTMLElement } from "../utils/canvas";


export class EventController {
    private entities : Entities;
    constructor(entities : Entities) {
        const canvasElement = getCanvasHTMLElement();
        canvasElement.addEventListener('mousedown', this.handleClick)
        canvasElement.addEventListener('mousemove', this.handleHover)
        this.entities = entities;
    }

    findEntityByMousePosition (mouseEvent: MouseEvent) {
        const {
            clientX,
            clientY,
        } = mouseEvent;

        const mousePosition : Vec2 = new Vec2(clientX, clientY);

        return this.entities.findByCoords(mousePosition)!;
    }

    handleClick = (mouseEvent: MouseEvent) => {
        const foundEntity = this.findEntityByMousePosition(mouseEvent);

        if(foundEntity) {
            console.log('found it')
            foundEntity.onClick();
        }
    }

    handleHover = (mouseEvent: MouseEvent) => {
        const foundEntity = this.findEntityByMousePosition(mouseEvent);

        if(foundEntity) {
            console.log('found it')
            foundEntity.onHover();
        }
    }

    


    destory() {
        const canvasElement = getCanvasHTMLElement();
        canvasElement.removeEventListener('mousedown', this.handleClick)
    }
}
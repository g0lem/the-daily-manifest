import { Entities } from "../Entities";
import { GameObject } from "../GameObject";
import { Vec2 } from "../Vec2";
import { getCanvasHTMLElement } from "../utils/canvas";


export class EventController {
    private entities : Entities;
    constructor(entities : Entities) {
        const canvasElement = getCanvasHTMLElement();
        canvasElement.addEventListener('mousedown', this.handleClick)
        this.entities = entities;
    }

    handleClick = (mouseEvent: MouseEvent) => {
        const {
            clientX,
            clientY,
        } = mouseEvent;

        const mousePosition : Vec2 = new Vec2(clientX, clientY);

        const foundEntitiy : GameObject = this.entities.findByCoords(mousePosition)!;

        if(foundEntitiy) {
            console.log('found it')
            foundEntitiy.onClick();
        }
    }


    destory() {
        const canvasElement = getCanvasHTMLElement();
        canvasElement.removeEventListener('mousedown', this.handleClick)
    }
}
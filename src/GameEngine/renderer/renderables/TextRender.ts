import { getContext } from "../../utils/canvas";
import { Entity } from "../Entity";
import { iRenderableData } from "./iRenderableData";



export class TextRender implements iRenderableData {

    constructor() {

    }


    render(entity: Entity) {
        const args = entity.positionalData.getThree();
        const context = getContext();
        context.font = entity.generateFontString();
        context.strokeText(entity.stats.text , ...args); 
    }

}
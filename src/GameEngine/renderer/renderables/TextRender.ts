import { getContext } from "../../utils/canvas";
import { Camera } from "../Camera";
import { Entity } from "../Entity";
import { iRenderableData } from "./../../interfaces/iRenderableData";



export class TextRender implements iRenderableData {

    constructor() {

    }


    render(entity: Entity, camera: Camera) {
        camera.addToPos(0,0);
        const args = entity.positionalData.getThree();
        const context = getContext();
        context.font = entity.generateFontString();
        context.strokeText(entity.stats.text , ...args); 
    }

}
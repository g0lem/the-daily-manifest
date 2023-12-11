import { getContext } from "../../utils/canvas";
import { Entity } from "../Entity";
import { iRenderableData } from "./../../interfaces/iRenderableData";



export class HealthBarRender implements iRenderableData {

    constructor() {

    }


    render(entity: Entity) {
        const context = getContext();
        context.rect(...entity.positionalData.getAll());
        context.fillStyle = "red";
        context.fill();
        context.stroke();

        const [
            x, y, sx, sy
        ] = entity.positionalData.getAll()

        context.beginPath();
        context.rect(x, y, sx * entity.stats.calculateHealthPercentage(), sy);
        context.fillStyle = "green";
        context.fill();

        context.stroke();

    }

}
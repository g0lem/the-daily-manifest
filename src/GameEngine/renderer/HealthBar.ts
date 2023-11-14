import { Stats } from "../../RPGEngine/Stats";
import { iRenderableObject } from "./primitives/iRenderableObject";
import { getContext } from "../utils/canvas";
import { Id } from "../utils/Id";
import { PositionalData } from "../composables/PositionalData";


export class HealthBar implements iRenderableObject {
    public id : Id;

    public positionalData: PositionalData;

    public visible = true;

    public stats : Stats;

    constructor(id:string, stats: Stats) {
        this.id = new Id(id);
        this.positionalData = new PositionalData(10,300,50,5);

        this.stats = stats;
    }

    onClick = () => { console.log('click')};
    onHover = () => {};
    onScroll = () => {};

    render() {
        const context = getContext();
        context.rect(...this.positionalData.getAll());
        context.fillStyle = "red";
        context.fill();
        context.stroke();

        const [
            x, y, sx, sy
        ] = this.positionalData.getAll()

        context.beginPath();
        context.rect(x, y, sx * this.stats.calculateHealthPercentage(), sy);
        context.fillStyle = "green";
        context.fill();

        context.stroke();

    }
}
import { Stats } from "../RPGEngine/Stats";
import { RenderableObject } from "./RenderableObject";
import { Vec2 } from "./utils/Vec2";
import { getContext } from "./utils/canvas";


export class HealthBar implements RenderableObject {
    public position: Vec2;
    public size: Vec2;

    public stats : Stats;

    constructor(stats: Stats) {
        this.position = new Vec2(10,300);

        this.size = (new Vec2(50, 5));

        this.stats = stats;
    }

    onClick = () => { console.log('click')};
    onHover = () => {};
    onScroll = () => {};

    render() {
        const context = getContext();
        context.rect(this.position.x, this.position.y, this.size.x, this.size.y);
        context.fillStyle = "red";
        context.fill();
        context.stroke();

        context.beginPath();
        context.rect(this.position.x, this.position.y, this.size.x * this.stats.calculateHealthPercentage(), this.size.y);
        context.fillStyle = "green";
        context.fill();

        context.stroke();

    }
}
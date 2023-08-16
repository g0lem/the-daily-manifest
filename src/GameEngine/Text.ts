import { Vec2 } from "./Vec2";


export class Text {
    public position : Vec2;
    public text : string;
    public font : string = "30px Brush Script MT, cursive";

    constructor(position: Vec2, text: string) {
        this.position = position;
        this.text = text;
    }

    render(context: CanvasRenderingContext2D) {
        context.font = this.font;
        context.strokeText(this.text , this.position.x, this.position.y); 
    }
}
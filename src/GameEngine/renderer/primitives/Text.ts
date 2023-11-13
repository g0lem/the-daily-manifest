import { iRenderableObject } from "./iRenderableObject";
import { Vec2 } from "../../utils/Vec2";
import { getContext } from "../../utils/canvas";


export class Text implements iRenderableObject {
    public position : Vec2;
    public text : string;
    public size : Vec2 = new Vec2(30, 300);
    public font : string = "Brush Script MT, cursive";

    constructor(position: Vec2, text: string) {
        this.position = position;
        this.text = text;
    }

    onClick = () => {
        console.log('click');
    }

    onHover = () => {
        console.log('hover');
    }


    onScroll = () => {
        console.log('scroll');
    }

    generateFontString = () => {
        return `${this.size.x}px ${this.font}`;
    }

    render() {
        const context = getContext();
        context.font = this.generateFontString();
        context.strokeText(this.text , this.position.x, this.position.y, this.size.y); 
    }
}
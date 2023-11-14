import { iRenderableObject } from "./iRenderableObject";
import { Vec2 } from "../../utils/Vec2";
import { getContext } from "../../utils/canvas";
import { Id } from "../../utils/Id";


export class Text implements iRenderableObject {
    public id : Id;

    public visible = true;

    public position : Vec2;
    public text : string;
    public size : Vec2 = new Vec2(30, 300);
    private font : string = '';

    constructor(id : Id, position: Vec2, text: string) {
        this.id = id;

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

    setFont = (font: string) => {
        this.font = font;
    }

    render() {
        const context = getContext();
        context.font = this.generateFontString();
        context.strokeText(this.text , this.position.x, this.position.y, this.size.y); 
    }
}
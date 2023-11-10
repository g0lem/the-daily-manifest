import { RenderableObject } from "./RenderableObject";
import { Vec2 } from "../../utils/Vec2";
import { getContext } from "../../utils/canvas";


export class Text implements RenderableObject {
    public position : Vec2;
    public text : string;
    public font : string = "30px Brush Script MT, cursive";

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

    render() {
        const context = getContext();
        context.font = this.font;
        context.strokeText(this.text , this.position.x, this.position.y); 
    }
}
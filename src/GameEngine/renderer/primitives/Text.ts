import { iRenderableObject } from "./iRenderableObject";
import { getContext } from "../../utils/canvas";
import { Id } from "../../utils/Id";
import { PositionalData } from "../../composables/PositionalData";


export class Text implements iRenderableObject {
    public id : Id;

    public visible = true;
    public positionalData: PositionalData;

    public text : string;
    private font : string = '';

    constructor(id : Id, positionalData: PositionalData, text: string) {
        this.id = id;

        this.positionalData = positionalData;
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
        return `${this.positionalData.getSize().x}px ${this.font}`;
    }

    setFont = (font: string) => {
        this.font = font;
    }

    render() {
        const args = this.positionalData.getThree();
        const context = getContext();
        context.font = this.generateFontString();
        context.strokeText(this.text , ...args); 
    }
}
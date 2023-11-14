import { PositionalData } from "../composables/PositionalData";
import { Text } from "../renderer/primitives/Text";
import { Id } from "../utils/Id";
import { Vec2 } from "../utils/Vec2"


export class bText {

    private id: Id = new Id('');
    private positionalData: PositionalData = new PositionalData(0,0,0,0);
    private text = '';

    private font = '';


    withId = (id: string) => {
        this.id = new Id(id);
        return this;
    }


    withPositionalData = (posX: number, posY: number, sizeX: number, sizeY: number) => {
        this.positionalData = new PositionalData(posX,posY, sizeX, sizeY);

        return this;
    }

    withText = (text: string) => {
        this.text = text;
        return this;
    }

    withFont = (font: string) => {
        this.font = font;
        return this;
    }

    build = () => {
        const text = new Text(this.id, this.positionalData, this.text);
        text.setFont(this.font);

        return text;
    }
}
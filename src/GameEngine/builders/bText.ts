import { Text } from "../renderer/primitives/Text";
import { Id } from "../utils/Id";
import { Vec2 } from "../utils/Vec2"


export class bText {

    private id: Id = new Id('');
    private position = new Vec2(0,0);
    private text = '';

    private font = '';


    withId = (id: string) => {
        this.id = new Id(id);
        return this;
    }

    withPosition = (position : Vec2) => {
        this.position = position;
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
        const text = new Text(this.id, this.position, this.text);
        text.setFont(this.font);

        return text;
    }
}
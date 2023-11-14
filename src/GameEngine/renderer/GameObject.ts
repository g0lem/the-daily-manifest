import { iRenderableObject } from "./primitives/iRenderableObject";
import { Sprite } from "./primitives/Sprite";
import { Id } from "../utils/Id";
import { PositionalData } from "../composables/PositionalData";


export class GameObject implements iRenderableObject {
    public sprite: Sprite;
    public positionalData: PositionalData;

    public visible = true;

    public id : Id;

    constructor(id: Id, sprite: Sprite, positionalData: PositionalData) {
        this.id = id;

        this.sprite = sprite;
        this.positionalData = positionalData;
    }

    listenForKeyPresses = () => {
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
        if(!this.sprite) {
            return;
        }
        this.sprite.render(this.positionalData.getPosition());
    }
}
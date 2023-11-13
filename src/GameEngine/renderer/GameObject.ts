import { iRenderableObject } from "./primitives/iRenderableObject";
import { Sprite } from "./primitives/Sprite";
import { Vec2 } from "../utils/Vec2";
import { Id } from "../utils/Id";


export class GameObject implements iRenderableObject {
    public sprite: Sprite;
    public position: Vec2;
    public size = new Vec2(64,64);

    public id : Id;

    constructor(id: Id, sprite: Sprite, position: Vec2) {
        this.id = id;

        this.sprite = sprite;
        this.position = position;
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
        this.sprite.render(this.position);
    }
}
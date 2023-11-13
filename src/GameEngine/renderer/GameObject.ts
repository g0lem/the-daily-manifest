import { iRenderableObject } from "./primitives/iRenderableObject";
import { Sprite } from "./primitives/Sprite";
import { Vec2 } from "../utils/Vec2";


export class GameObject implements iRenderableObject {
    public sprite: Sprite;
    public position: Vec2;
    public size = new Vec2(64,64);

    constructor(sprite: Sprite, position: Vec2) {
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
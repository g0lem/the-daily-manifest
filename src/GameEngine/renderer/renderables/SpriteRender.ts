import { Animation } from "../Animation";
import { Entity } from "../Entity";
import { Sprite } from "../primitives/Sprite";
import { iRenderableData } from "./iRenderableData";



export class SpriteRender implements iRenderableData {

    public sprite : Sprite;
    public animation : Animation;

    constructor(sprite: Sprite, animation: Animation) {
        this.sprite = sprite;
        this.animation = animation;
    }

    render(entity:Entity) {
        if(!this.sprite) {
            return;
        }
        this.sprite.render(entity.positionalData.getPosition());
    }

}
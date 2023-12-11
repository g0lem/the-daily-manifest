import { Animation } from "../Animation";
import { Camera } from "../Camera";
import { Entity } from "../Entity";
import { Sprite } from "../primitives/Sprite";
import { iRenderableData } from "./../../interfaces/iRenderableData";



export class SpriteRender implements iRenderableData {

    public sprite : Sprite;
    public animation : Animation;

    constructor(sprite: Sprite, animation: Animation) {
        this.sprite = sprite;
        this.animation = animation;
    }

    render(entity:Entity, camera: Camera) {
        if(!this.sprite) {
            return;
        }
        const positionalData = entity.positionalData.getPosition().copy();

        this.sprite.render(positionalData.sub(camera.getPosition())!);
    }

}
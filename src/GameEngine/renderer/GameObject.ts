import { iRenderableObject } from "./primitives/iRenderableObject";
import { ResourceLoader } from "../loaders/ResourceLoader";
import { Sprite } from "./primitives/Sprite";
import { Vec2 } from "../utils/Vec2";


export class GameObject implements iRenderableObject {
    public sprite: Sprite | void;
    public spriteName: string;
    public position: Vec2;
    public resourceLoader: ResourceLoader;
    public size = new Vec2(64,64);

    constructor(resourceLoader: ResourceLoader, spriteName: string, position: Vec2) {
        this.position = position;
        this.resourceLoader = resourceLoader;
        this.spriteName = spriteName;
        this.sprite = this.generateSprite();
    }

    generateSprite = () : Sprite | void => {
        const resource = this.resourceLoader
                            .resourceList.find(({key}) => key === this.spriteName);
        if(!resource) {
            return;
        }
        return new Sprite(resource);
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
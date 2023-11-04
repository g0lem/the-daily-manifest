import { Animation } from "./Animation";
import { RenderableObject } from "./RenderableObject";
import { ResourceLoader } from "./ResourceLoader";
import { Sprite } from "./Sprite";
import { Vec2 } from "./Vec2";


export class GameObject implements RenderableObject {
    public sprite: Sprite | void;
    public spriteName: string;
    public position: Vec2;
    public resourceLoader: ResourceLoader;
    public animation: Animation | null = null;

    constructor(resourceLoader: ResourceLoader, spriteName: string, position: Vec2, animation: Animation | null) {
        this.position = position;
        this.resourceLoader = resourceLoader;
        this.spriteName = spriteName;
        this.animation = animation;
        this.sprite = this.generateSprite();
    }

    generateSprite = () : Sprite | void => {
        const resource = this.resourceLoader
                            .resourceList.find(({key}) => key === this.spriteName);
        if(!resource) {
            return;
        }
        return new Sprite(resource, this.animation);
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
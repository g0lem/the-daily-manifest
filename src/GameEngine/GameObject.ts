import { Animation } from "./Animation";
import { ResourceLoader } from "./ResourceLoader";
import { Sprite } from "./Sprite";
import { Vec2 } from "./Vec2";


export class GameObject {
    public sprite: Sprite | void;
    public spriteName: string;
    public position: Vec2;
    public resourceLoader: ResourceLoader;
    public animation: Animation = new Animation(new Vec2(0,0), new Vec2(64,64));

    constructor(resourceLoader: ResourceLoader, spriteName: string, position: Vec2) {
        this.position = position;
        this.resourceLoader = resourceLoader;
        this.spriteName = spriteName;
        this.sprite = this.generateSprite();

        this.listenForKeyPresses();
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
        document.addEventListener("keydown", (event) => {
            if (event.key === 'w') {
                this.position.y -= 8;
                setTimeout(() => {
                    this.sprite!.currentAnimation.frameStart = new Vec2(0,3);
                    this.sprite!.currentAnimation.amountOfFrames = new Vec2(3,0);
                }, 0);
            }
            if (event.key === 's') {
                this.position.y += 8;

                setTimeout(() => {
                    this.sprite!.currentAnimation.frameStart = new Vec2(0,0);
                    this.sprite!.currentAnimation.amountOfFrames = new Vec2(3,0);
                }, 0);
            }

            if (event.key === 'a') {
                this.position.x -= 8;

                setTimeout(() => {
                    this.sprite!.currentAnimation.frameStart = new Vec2(0,1);
                    this.sprite!.currentAnimation.amountOfFrames = new Vec2(3,0);
                }, 0);
            }
            if (event.key === 'd') {
                this.position.x += 8;
                setTimeout(() => {
                    this.sprite!.currentAnimation.frameStart = new Vec2(0,2);
                    this.sprite!.currentAnimation.amountOfFrames = new Vec2(3,0);
                }, 0);
            }
        })

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
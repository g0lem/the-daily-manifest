import { ResourceLoader } from "./ResourceLoader";
import { Sprite } from "./Sprite";
import { Vec2 } from "./Vec2";



export class GameObject {
    public sprite: Sprite | void;
    public spriteName: string;
    public position: Vec2;
    public resourceLoader: ResourceLoader;

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
        return new Sprite(resource, new Vec2(16,16));
    }

    listenForKeyPresses = () => {
        document.addEventListener("keydown", (event) => {
            if (event.key === 'w') {
                this.position.y -= 8;
            }
            if (event.key === 's') {
                this.position.y += 8;
            }

            if (event.key === 'a') {
                this.position.x -= 8;
            }
            if (event.key === 'd') {
                this.position.x += 8;
            }
        })

    }

    onClick = () => {
        alert('here');
    }


    render() {
        if(!this.sprite) {
            return;
        }
        this.sprite.render(this.position);
    }
}
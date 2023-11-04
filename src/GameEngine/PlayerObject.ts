import { Animation } from "./Animation";
import { GameObject } from "./GameObject";
import { ResourceLoader } from "./ResourceLoader";
import { Vec2 } from "./Vec2";



export class PlayerObject extends GameObject {

    constructor(resourceLoader: ResourceLoader, spriteName: string, position: Vec2, animation: Animation | null) {
        super(resourceLoader, spriteName, position, animation);

        this.listenForKeyPresses();
    }

    listenForKeyPresses = () => {
        document.addEventListener("keydown", (event) => {
            if (event.key === 'w') {
                this.position.y -= 8;
                setTimeout(() => {
                    this.sprite!.currentAnimation!.frameStart = new Vec2(0,3);
                    this.sprite!.currentAnimation!.amountOfFrames = new Vec2(3,0);
                }, 0);
            }
            if (event.key === 's') {
                this.position.y += 8;

                setTimeout(() => {
                    this.sprite!.currentAnimation!.frameStart = new Vec2(0,0);
                    this.sprite!.currentAnimation!.amountOfFrames = new Vec2(3,0);
                }, 0);
            }

            if (event.key === 'a') {
                this.position.x -= 8;

                setTimeout(() => {
                    this.sprite!.currentAnimation!.frameStart = new Vec2(0,1);
                    this.sprite!.currentAnimation!.amountOfFrames = new Vec2(3,0);
                }, 0);
            }
            if (event.key === 'd') {
                this.position.x += 8;
                setTimeout(() => {
                    this.sprite!.currentAnimation!.frameStart = new Vec2(0,2);
                    this.sprite!.currentAnimation!.amountOfFrames = new Vec2(3,0);
                }, 0);
            }
        })
    }
}
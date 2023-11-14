import { Stats } from "../../RPGEngine/Stats";
import { GameObject } from "./GameObject";
import { Vec2 } from "../utils/Vec2";
import { TimeDelta } from "../utils/TimeDelta";
import { Sprite } from "./primitives/Sprite";
import { Id } from "../utils/Id";



export class PlayerObject extends GameObject {

    public stats: Stats;
    private timeDelta: TimeDelta;

    constructor(id: Id, sprite: Sprite, position: Vec2, stats: Stats) {
        super(id, sprite, position);

        this.stats = stats;

        this.timeDelta = new TimeDelta();

        this.listenForKeyPresses();
    }


    listenForKeyPresses = () => {
        document.addEventListener("keydown", (event) => {
            this.timeDelta.executeWithTimeDelta(() => {
                this.keyPressCallback(event);
            }, 10);
        })

        document.addEventListener("keyup", () => {
            this.timeDelta.setTime();
            this.stopAnimation();
        })
    }

    stopAnimation = () => {
        this.sprite!.currentAnimation!.setAmountOfFrames(new Vec2(0,0));
    }

    keyPressCallback = (event : KeyboardEvent) => {
        if(this.stats.isDead()) {
            return;
        }
        switch(event.key){
            case 'w': 
                this.position.y -= 8;
                this.sprite!.currentAnimation!.setFrameStart(new Vec2(0,3));
                this.sprite!.currentAnimation!.setAmountOfFrames(new Vec2(3,0));
                break;
            case 's': 
                this.sprite!.currentAnimation!.setFrameStart(new Vec2(0,0));
                this.sprite!.currentAnimation!.setAmountOfFrames(new Vec2(3,0));
                this.position.y += 8;
                break;
            case 'a': 
                this.sprite!.currentAnimation!.setFrameStart(new Vec2(0,1));
                this.sprite!.currentAnimation!.setAmountOfFrames(new Vec2(3,0));
                this.position.x -= 8;
                break;
            case 'd': 
                this.sprite!.currentAnimation!.setFrameStart(new Vec2(0,2));
                this.sprite!.currentAnimation!.setAmountOfFrames(new Vec2(3,0));
                this.position.x += 8;
                break; 
            case 'x': 
                this.stats.health -= 1;
                break; 

            default: 
                break;

        }
    };
}
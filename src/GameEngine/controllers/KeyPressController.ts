import { GameObject } from "../renderer/GameObject";
import { Renderer } from "../renderer/Renderer";
import { iRenderableObject } from "../interfaces/iRenderableObject";
import { Vec2 } from "../utils/Vec2";

export class KeyPressController {

    private renderer: Renderer;

    private keyMap : Map<string, boolean> = new Map();

    constructor(renderer : Renderer) {
        this.renderer = renderer;
    }

    listen = () => {
        this.listenForKeyPress();
        this.listenForKeyRelease();

        this.handleInputs();
    }

    listenForKeyPress = () => {
        document.addEventListener("keydown", (event) => {
            this.keyMap.set(event.key, true);
        })
    }

    listenForKeyRelease = () => {
        document.addEventListener("keyup", (event) => {
            this.keyMap.set(event.key, false);
        })
    }

    handlePlayerMovement = (player: GameObject) => {

        // if(player.stats.isDead()) {
        //     return;
        // }

        if(this.keyMap.get('w')) {
            player.entity.positionalData.addToPos(0, -8);
            player.renderableData.sprite!.currentAnimation!.setFrameStart(new Vec2(0,3));
            player.renderableData.sprite!.currentAnimation!.setAmountOfFrames(new Vec2(3,0));
        }
        if(this.keyMap.get('s')) {
            player.renderableData.sprite!.currentAnimation!.setFrameStart(new Vec2(0,0));
            player.renderableData.sprite!.currentAnimation!.setAmountOfFrames(new Vec2(3,0));
            player.entity.positionalData.addToPos(0, 8);
        }
        if(this.keyMap.get('a')) {
            player.renderableData.sprite!.currentAnimation!.setFrameStart(new Vec2(0,1));
            player.renderableData.sprite!.currentAnimation!.setAmountOfFrames(new Vec2(3,0));
            player.entity.positionalData.addToPos(-8, 0);
        }
        if(this.keyMap.get('d')) {
            player.renderableData.sprite!.currentAnimation!.setFrameStart(new Vec2(0,2));
            player.renderableData.sprite!.currentAnimation!.setAmountOfFrames(new Vec2(3,0));
            player.entity.positionalData.addToPos(8, 0);
        }

        if(this.keyMap.get('x')) {
            player.entity.stats.health -= 100;
        }

        if(!this.keyMap.get('w') 
            && !this.keyMap.get('a') 
            && !this.keyMap.get('s') 
            && !this.keyMap.get('d')) {
                player.renderableData.sprite!.currentAnimation!.setAmountOfFrames(new Vec2(0,0));
        }
    }

    handleInputs = () => {
        setInterval(() => {
            const player = this.renderer.find((renderableObj : iRenderableObject) => {
                return renderableObj.entity.id.hasId('player1');
            })

            const player2 = this.renderer.find((renderableObj : iRenderableObject) => {
                return renderableObj.entity.id.hasId('player2');
            })

            this.handlePlayerMovement(<GameObject>player!);
            this.handlePlayerMovement(<GameObject>player2!);
        },30)
    }


}
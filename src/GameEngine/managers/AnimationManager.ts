import { Animation } from "../renderer/Animation";



export class AnimationManager {
    private animations : Map<string, Animation> = new Map();

    constructor() {

    }


    add = (key: string, value:Animation) => {
        this.animations.set(key, value);
    }

    get = (key:string) => {
        return this.animations.get(key);
    }

    updateFrame = (key: string) => {
        const animation = this.get(key);

        animation!.updateFrame();
    }
}
import { RenderableObject } from "./RenderableObject";
import { Vec2 } from "./Vec2";


export class Entities {
    public gameObjects : Array<RenderableObject> = [];
    constructor() {

    }

    push(gameObject: RenderableObject) {
        this.gameObjects.push(gameObject);
    }

    findByCoords(coords: Vec2) {
        return this.gameObjects.find((gameObject: RenderableObject) => {
            const position: Vec2 = gameObject.position;
            const size = new Vec2(64,64);
            return coords.isContained(position, size);
        })
    }


    render() {
        this.gameObjects.forEach((gameObject: RenderableObject) => {
            gameObject.render();
        })
    }


}
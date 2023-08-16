import { GameObject } from "./GameObject";
import { Vec2 } from "./Vec2";


export class Entities {
    public gameObjects : Array<GameObject> = [];
    constructor() {

    }

    push(gameObject: GameObject) {
        this.gameObjects.push(gameObject);
    }

    findByCoords(coords: Vec2) {
        return this.gameObjects.find((gameObject: GameObject) => {
            const position: Vec2 = gameObject.position;
            const size = new Vec2(16,16);
            return coords.isContained(position, size);
        })
    }


    render() {
        this.gameObjects.forEach((gameObject: GameObject) => {
            gameObject.render();
        })
    }


}
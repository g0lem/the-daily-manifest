import { RenderableObject } from "./primitives/RenderableObject";
import { Vec2 } from "../utils/Vec2";


export class Renderer {
    public gameObjects : Array<RenderableObject> = [];
    constructor() {

    }

    push(gameObject: RenderableObject) {
        this.gameObjects.push(gameObject);
    }

    clear = () => {
        this.gameObjects = [];
    }

    override = (newArray : Array<RenderableObject>)=> {
        this.gameObjects = newArray;
    }

    findByCoords(coords: Vec2) {
        return this.gameObjects.find((gameObject: RenderableObject) => {
            const position: Vec2 = gameObject.position;
            const size = new Vec2(200,200);
            return coords.isContained(position, size);
        })
    }


    render() {
        this.gameObjects.forEach((gameObject: RenderableObject) => {
            gameObject.render();
        })
    }


}
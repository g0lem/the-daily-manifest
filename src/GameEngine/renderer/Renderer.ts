import { iRenderableObject } from "./primitives/iRenderableObject";
import { Vec2 } from "../utils/Vec2";


export class Renderer {
    public gameObjects : Array<iRenderableObject> = [];
    constructor() {

    }

    push(gameObject: iRenderableObject) {
        this.gameObjects.push(gameObject);
    }

    clear = () => {
        this.gameObjects = [];
    }

    override = (newArray : Array<iRenderableObject>)=> {
        this.gameObjects = newArray;
    }

    findByCoords(coords: Vec2) {
        return this.gameObjects.find((gameObject: iRenderableObject) => {
            const position: Vec2 = gameObject.position;
            const size = gameObject.size;
            return coords.isContained(position, size);
        })
    }


    render() {
        this.gameObjects.forEach((gameObject: iRenderableObject) => {
            gameObject.render();
        })
    }


}
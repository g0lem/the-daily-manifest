import { iRenderableObject } from "./primitives/iRenderableObject";
import { Vec2 } from "../utils/Vec2";

type RendererFindFunction = (gameObject: iRenderableObject) => boolean;

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

    find = (findFunction : RendererFindFunction) => {
        return this.gameObjects.find(findFunction);
    }

    findByCoords(coords: Vec2) {
        return this.find((gameObject: iRenderableObject) => {
            const position: Vec2 = gameObject.entity.positionalData.getPosition();
            const size = gameObject.entity.positionalData.getSize();
            return coords.isContained(position, size);
        })
    }

    findById(id: string) {
        return this.find((gameObject: iRenderableObject) => {
            const { entity } = gameObject;
            return entity.id.hasId(id);
        })
    }


    render() {
        this.gameObjects.forEach((gameObject: iRenderableObject) => {
            gameObject.render();
        })
    }


}
import { iRenderableObject } from "./../interfaces/iRenderableObject";
import { Vec2 } from "../utils/Vec2";
import { Camera } from "./Camera";

type RendererFindFunction = (gameObject: iRenderableObject) => boolean;

export class Renderer {
    public gameObjects : Array<iRenderableObject> = [];

    private camera: Camera;

    constructor(camera: Camera) {
        this.camera = camera;
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
        const adjustedCoords = coords.copy().add(this.camera.getPosition());
        return this.find((gameObject: iRenderableObject) => {
            const position: Vec2 = gameObject.entity.positionalData.getPosition();
            const size = gameObject.entity.positionalData.getSize();
            return adjustedCoords.isContained(position, size);
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
            gameObject.render(this.camera);
        })
    }


}
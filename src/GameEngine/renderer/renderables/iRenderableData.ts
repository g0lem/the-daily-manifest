import { Animation } from "../Animation";
import { Entity } from "../Entity";
import { Sprite } from "../primitives/Sprite";


export interface iRenderableData {
    sprite?: Sprite;
    animation?: Animation;


    render: (entity: Entity) => void;
}
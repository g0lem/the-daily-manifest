import { Animation } from "../renderer/Animation";
import { Camera } from "../renderer/Camera";
import { Entity } from "../renderer/Entity";
import { Sprite } from "../renderer/primitives/Sprite";

export interface iRenderableData {
    sprite?: Sprite;
    animation?: Animation;


    render: (entity: Entity, camera: Camera) => void;
}